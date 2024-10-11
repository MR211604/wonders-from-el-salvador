import { AuthRepository } from "../repositories/auth-repository.js"
import { ValidationError } from "../repositories/error-repository.js"
import jwt from 'jsonwebtoken'

export async function registerUser(req, res) {
  const { username, password, email } = req.body
  try {
    const response = await AuthRepository.createUser({ username, password, email })
    return res.status(201).json({
      ok: true,
      message: 'Usuario creado con éxito',
      response
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).send({ error: error.message })
    } else {
      console.log('error: ', error)
      return res.status(500).send({ error: 'Error interno' })
    }
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body
  try {

    const response = await AuthRepository.loginUser({ email, password })
    const token = jwt.sign({ id: response.dataValues.id, displayName: response.dataValues.name }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return res
      .status(200).json({
        ok: true,
        message: 'Usuario logueado con éxito',
        user: { id: response.dataValues.id, displayName: response.dataValues.name, email: response.dataValues.email },
        token
      })

  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).send({ ok: false, error: error.message })
    } else {
      console.log('error: ', error)
      return res.status(500).send({ ok: false, error: 'Error interno' })
    }
  }
}

export async function loginRefresh(req, res) {
  try {

    const token = req.header('x-token')

    if (req.user) {
      const token = jwt.sign({ id: req.user.id, username: req.user.displayName }, process.env.JWT_SECRET, { expiresIn: '24h' })
      return res.
        cookie('token', token, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
        .status(200).json({
          ok: true,
          message: "Usuario logueado con éxito",
          user: req.user,
          token
        })
    }
    if (token) {
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      const { id } = payload
      const { user } = await AuthRepository.renewToken(id)
      return res.
        cookie('token', token, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
        .status(200).json({
          ok: true,
          message: "Usuario logueado con éxito",
          token,
          user: { id: user.dataValues.id, displayName: user.dataValues.name, email: user.dataValues.email }
        })
    }
    return res.status(401).send({ ok: false, error: 'No se pudo obtener el usuario' })
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ ok: false, error: 'Error interno' })
  }
}

export async function renewToken(req, res) {
  try {
    if (req.user) {
      const { id } = req.user
      const { user, token } = await AuthRepository.renewToken(id)
      return res
        .cookie('token', token, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
        .status(200).
        json({ ok: true, message: 'Renew', token, user })
    }

  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ error: 'Error interno' })
  }

}