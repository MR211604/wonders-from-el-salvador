import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {

  const token = req.cookies.token
  const googleToken = req.cookies['connect.sid']

  //Si no tiene token de google o token de jwt, no esta autorizado
  if (!token || !googleToken) {
    return res.status(401).send({ error: 'No autorizado' })
  }

  try {
    if (googleToken) {
      return next()
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    return next();
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ error: 'Error interno' })
  }

}