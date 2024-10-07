import express from "express";
import { connection } from "./database/db-connection.js";
import cookieParser from "cookie-parser";
import app from "./app.js";
import session from 'express-session'
import passport from 'passport'
import cors from 'cors'
// Rutas de la aplicación
import * as authRouter from './router/auth-route.js'
import * as placeRouter from './router/place-route.js'


app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/auth', authRouter.default);
app.use('/api/places', placeRouter.default);

async function main() {

  try {
    await connection.sync({ force: false });
    console.log('Connection has been established successfully.');
    app.listen(3000);
    console.log('Server running on port 3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}

main();