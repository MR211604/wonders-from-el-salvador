import { Sequelize } from "sequelize"; 

export const connection = new Sequelize('proyectolic', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})