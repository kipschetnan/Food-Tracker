const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Snacks extends Model { }

Snacks.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_cals: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
)