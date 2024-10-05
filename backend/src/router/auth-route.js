import { Router } from "express";
import passport from "passport";
import "../auth.js";
import { verifyToken } from "../middlewares/verify-token.js";
import { loginUser, registerUser } from "../controllers/user-controller.js";

const router = Router();


//Autentificacion con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/api/auth/success',
  failureRedirect: '/api/auth/failure',
  authInfo: true
}))

//Autentificacion con JWT, Email y Password
router.get('/register', registerUser)

router.post('/login', loginUser)

//Probando ruta de autentificacion con JWT
router.get('/protected', verifyToken, (_, res) => {
  res.status(200).send({ message: 'Ruta protegida' })
})


// Ruta de ejemplo para redireccionar luego de inciar sesion, deberia ser una ruta de la aplicacion. (Se cambiara despues)
router.get('/success', (req, res) => {
  res.status(200).send({ result: req.user })
})

router.get('/failure', (req, res) => {
  res.send('Ocurrió un error al loguear con Google')
})


export default router;