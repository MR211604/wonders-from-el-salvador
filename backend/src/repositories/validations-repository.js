import { ValidationError } from "./error-repository.js";

export class ValidationsRepository {

  static ValidateUsername(username) {

    if (!username) throw new ValidationError("El nombre de usuario es requerido");

    if (username.length < 4) throw new ValidationError("El nombre de usuario debe tener al menos 4 caracteres");

  }

  static validateEmail(email) {
    if (!email) throw new ValidationError("El email es requerido");

    if (!email.includes("@")) throw new ValidationError("El email debe tener un formato válido");

    //TODO: Verificar si el email ya existe en la base de datos

    //...
  }

  static validatePassword(password) {


    if (!password) throw new ValidationError("La contraseña es requerida");

    if (password.length < 6) throw new ValidationError("La contraseña debe tener al menos 6 caracteres");

    //TODO: Consultar si esta bien comprobar este error
    // const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/", "|", "~", "`"];
    // if (!specialCharacters.some(element => password.includes(element))) throw new ValidationError("La contraseña debe tener al menos un caracter especial");
  
  
  }

}