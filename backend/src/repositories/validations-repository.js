import { connection } from "../database/db-connection.js";
import initModels from "../database/models/init-models.js";
import { ValidationError } from "./error-repository.js";
import bcrypt from 'bcryptjs'


const { user: UserModel } = initModels(connection)

export class ValidationsRepository {

  static ValidateUsername(username) {

    if (!username) throw new ValidationError("El nombre de usuario es requerido");

    if (username.length < 4) throw new ValidationError("El nombre de usuario debe tener al menos 4 caracteres");

  }

  static validateEmail(email) {
    if (!email) throw new ValidationError("El email es requerido");

    if (!email.includes("@")) throw new ValidationError("El email debe tener un formato válido");
  }

  static validatePassword(password) {

    if (!password) throw new ValidationError("La contraseña es requerida");

    if (password.length < 6) throw new ValidationError("La contraseña debe tener al menos 6 caracteres");

  }

  static comparePasswords(password, confirmPassword) {
    if (password !== confirmPassword) throw new ValidationError("Las contraseñas no coinciden");
  }

  static async validateUserExistence(email, shouldExist = true) {
    const foundUser = await UserModel.findOne({ where: { email } });
    if (shouldExist && !foundUser) {
      throw new ValidationError("Correo o contraseña incorrectos");
    }
    if (!shouldExist && foundUser) {
      throw new ValidationError("El usuario ingresado ya está registrado");
    }
  }

  static validateUserPassword(password, hashed_password) {
    const isPasswordValid = bcrypt.compareSync(password, hashed_password);
    if (!isPasswordValid) {
      throw new ValidationError("Usuario o contraseña incorrectos");
    }
  }

  static validatePlaceId(placeId) {
    if (!placeId) throw new ValidationError("El id del lugar es requerido");
  }

  static validateComment(comment) {
    if (comment.trim().length === 0) throw new ValidationError("El comentario no puede estar vacío");
  }

  static validateRating(rating) {
    if (!rating) throw new ValidationError("La calificación es requerida");

    if (rating < 1 || rating > 5) throw new ValidationError("La calificación debe estar entre 1 y 5");
  }

}