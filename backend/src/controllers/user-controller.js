import { AuthRepository } from "../repositories/auth-repository.js"
import { ValidationError } from "../repositories/error-repository.js"
import jwt from 'jsonwebtoken'

export async function registerUser(req, res) {
  const { username, password, email } = req.body
  try {
    const response = AuthRepository.createUser({ username, password, email })
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

    const response = AuthRepository.loginUser({ email, password })

    const token = jwt.sign({ id: response.id, username: response.username }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
      })
      .status(200).json({
        ok: true,
        message: 'Usuario logueado con éxito',
        response,
        token
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
