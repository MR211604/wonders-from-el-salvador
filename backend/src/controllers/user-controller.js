import { AuthRepository } from '../repositories/auth-repository.js'
import { ValidationError } from '../repositories/error-repository.js'
import jwt from 'jsonwebtoken'

export async function registerUser (req, res) {
  const { username, email, password, confirmPassword } = req.body
  try {
    const response = await AuthRepository.createUser({ username, email, password, confirmPassword })
    return res.status(201).json({
      ok: true,
      message: 'Usuario creado con éxito',
      user: { id: response.user.dataValues.id, displayName: response.user.dataValues.name, email: response.user.dataValues.email }
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

export async function loginUser (req, res) {
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

export async function loginRefresh (req, res) {
  try {
    const token = req.header('x-token')

    if (req.user) {
      const token = jwt.sign({ id: req.user.id, username: req.user.displayName }, process.env.JWT_SECRET, { expiresIn: '24h' })
      return res
        .cookie('token', token, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
        .status(200).json({
          ok: true,
          message: 'Usuario logueado con éxito',
          user: req.user,
          token
        })
    }
    if (token !== null) {
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      const { id } = payload
      const { user } = await AuthRepository.renewToken(id)
      return res
        .cookie('token', token, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
        .status(200).json({
          ok: true,
          message: 'Usuario logueado con éxito',
          token,
          user: { id: user.dataValues.id, displayName: user.dataValues.name, email: user.dataValues.email }
        })
    }
    return res.status(401).send({ ok: false, error: 'No se pudo obtener el usuario' })
  } catch (error) {
    return res.status(500).send({ ok: false, error: 'Error interno' })
  }
}
