const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: { 
            autoIncrement: true, 
            primaryKey: true, 
            type: DataTypes.INTEGER, 
            allowNull: false 
        },
        firstName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        lastName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        emailId: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: { isEmail: true } 
        },
        password: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }
    }, {
        tableName: 'users'
    });
};