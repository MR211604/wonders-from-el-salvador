import jwt from 'jsonwebtoken'

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id }
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

export { generateJWT }
