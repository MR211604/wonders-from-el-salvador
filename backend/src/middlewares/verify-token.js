import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {


  try {
    const token = req.header('x-token')

    if (!token) {
      return res.status(401).send({ ok: false, error: 'El token no fue proporcionado' })
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    return next();
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ error: 'Error interno' })
  }

}