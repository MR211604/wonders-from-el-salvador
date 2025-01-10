import { connection } from '../database/db-connection.js'
import initModels from '../database/models/init-models.js'
import { generateJWT } from '../helpers/jwt.js'
import { ValidationsRepository } from './validations-repository.js'
import bcrypt from 'bcryptjs'

const { user: UserModel } = initModels(connection)

export class AuthRepository {
  static async createUser ({ username, email, password, confirmPassword }) {
    ValidationsRepository.ValidateUsername(username)
    ValidationsRepository.validateEmail(email)
    ValidationsRepository.validatePassword(password)
    ValidationsRepository.validatePassword(confirmPassword)
    ValidationsRepository.comparePasswords(password, confirmPassword)
    await ValidationsRepository.validateUserExistence(email, false)

    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await UserModel.create({ name: username, email, hashed_password: hashedPassword })

    return { user }
  }

  static async loginOauthUser ({ username, email }) {
    const foundOauth = await UserModel.findOne({ where: { email } })
    if (foundOauth) return { user: foundOauth.dataValues.id }

    // No se almacena la contraseña de un usuario OAuth
    const user = await UserModel.create({ name: username, email, hashed_password: 'oauth_user' })

    return { user: user.id }
  }

  static async loginUser ({ email, password }) {
    ValidationsRepository.validateEmail(email)
    ValidationsRepository.validatePassword(password)
    await ValidationsRepository.validateUserExistence(email)

    const user = await UserModel.findOne({ where: { email } })
    ValidationsRepository.validatePassword(password, user.hashed_password)

    // Omitir la contraseña del objeto de usuario
    const { hashed_password: _, ...userData } = user

    return userData
  }

  static getUsers () {
    return UserModel.findAll()
  }

  static async renewToken (id) {
    const user = await UserModel.findByPk(id)
    const token = await generateJWT(id)
    return { user, token }
  }
}
