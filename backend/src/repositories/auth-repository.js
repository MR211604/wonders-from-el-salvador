import { connection } from "../database/db-connection.js";
import initModels from "../database/models/init-models.js";
import { generateJWT } from "../helpers/jwt.js";
import { ValidationsRepository } from "./validations-repository.js"
import bcrypt from 'bcryptjs'

const { user: UserModel } = initModels(connection)

export class AuthRepository {
  static async createUser({ username, email, password }) {

    ValidationsRepository.ValidateUsername(username);
    ValidationsRepository.validateEmail(email);
    ValidationsRepository.validatePassword(password);

    const foundUser = await UserModel.findOne({ where: { email } });
    if (foundUser) throw new Error("El email ingresado ya está registrado");

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await UserModel.create({ name: username, email, hashed_password: hashedPassword });

    return { user: user.id }
  }

  static async loginUser({ email, password }) {

    ValidationsRepository.validateEmail(email);
    ValidationsRepository.validatePassword(password);

    const user = await UserModel.findOne({ where: { email } });
    if (!user) throw new Error("Usuario o contraseña incorrectos");

    const isPasswordValid = bcrypt.compareSync(password, user.hashed_password);
    if (!isPasswordValid) throw new Error("Usuario o contraseña incorrectos");

    // Omitir la contraseña del objeto de usuario
    const { hashed_password: _, ...userData } = user;

    return userData;
  }

  static getUsers() {
    return UserModel.findAll();
  }

  static async renewToken(id) {
    const user = await UserModel.findByPk(id);
    const token = await generateJWT(id)
    return { user, token }
  }
}