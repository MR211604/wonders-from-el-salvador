import { Router } from "express";
import passport from "passport";
import "../auth.js";
import { verifyToken } from "../middlewares/verify-token.js";
import { loginRefresh, loginUser, registerUser, renewToken } from "../controllers/user-controller.js";

const router = Router();


//Autentificacion con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: process.env.CLIENT_APP_URL,
  failureRedirect: '/api/auth/failure',
  authInfo: true
}))

//Autentificacion con JWT, Email y Password
router.post('/register', registerUser)

router.post('/login', loginUser)

//Probando ruta de autentificacion con JWT
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).send({ message: 'Ruta protegida' })
})

// Ruta que nos servira para obtener los datos del usuario logueado
router.get('/success', loginRefresh)

router.get('/failure', (_, res) => {
  res.send('Ocurrió un error al loguear con Google')
})

//Renovar el token 

//TODO: agregar renewAuthtoken para los usuarios que se logean por medio de form
router.get('/renew', verifyToken, renewToken)

//Logout
router.get('/logout', (_, res) => {
  try {
    return res.cookie('token', 'none', {
      expires: new Date(Date.now()),
      httpOnly: true
    }).status(200).send({ ok: true, message: 'Logout exitoso' })
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ ok: false, error: 'Error interno' })
  }
})
export default router;