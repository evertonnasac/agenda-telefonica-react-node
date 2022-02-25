const {DataTypes} = require("sequelize")
const conn = require("../db")

const Contact = conn.define("schedule", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        
    },
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    } ,
    image:{
        type: DataTypes.STRING,
    } ,
    phone:{
        type: DataTypes.STRING
    }


})

module.exports = Contact