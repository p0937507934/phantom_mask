const { Sequelize, Model, DataTypes } = require('sequelize');
const {sequelize} = require("./connect")

const Pharmacy = sequelize.define("Pharmacy",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cashBalance:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    openingHours:{
        type:DataTypes.DATE,
        allowNull:false
    },
    masks:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    tableName:"pharmacy",
    timestamps:false,
    createdAt:false,
    updatedAt:false
})