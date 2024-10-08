import jwt from 'jsonwebtoken';


const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id }
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject('No se pudo generar el token')
      } else {
        resolve(token)
      }
    })
  })
}

export { generateJWT }