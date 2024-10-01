import { Router } from "express";
import { registerUser } from "../controllers/user-controller.js";
import "../auth.js";
import passport from "passport";

const router = Router();


//Ruta para manejar usuarios y su autenticación
router.get("/", registerUser)

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api/auth/success',
    failureRedirect: '/api/auth/failure'
  })
)

router.get('/success', (req, res) => {
  res.send('Usuario logueado con Google')
})

router.get('/failure', (req, res) => {
  res.send('Ocurrió un error al loguear con Google')
})

// router.get("/",) 
// router.get("/",) 

export default router;