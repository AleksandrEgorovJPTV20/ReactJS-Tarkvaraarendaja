import { Sequelize } from 'sequelize';

const db = new Sequelize('programmer', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;