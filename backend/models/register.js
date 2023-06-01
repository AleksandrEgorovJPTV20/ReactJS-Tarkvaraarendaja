import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Register extends Model {}
Register.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: { type: DataTypes.STRING },
        lastname: { type: DataTypes.STRING },
        phone: { type: DataTypes.INTEGER },
        email: { type: DataTypes.STRING },
    },
    {
        sequelize: db,
        tableName: 'registers',
        freezeTableName: true,
        modelName: "register",
        timestamp: true,
    },
);

export default Register;