const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Breakfast extends Model {}

Breakfast.init (
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
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        carbs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'breakfast',
      }
);

module.exports = Breakfast;