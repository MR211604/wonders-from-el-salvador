import { Sequelize } from 'sequelize'

export const connection = new Sequelize('proyectolic', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})
