const { Sequelize, Model, DataTypes } = require('sequelize');
const {sequelize} = require("./connect")


const Mask = sequelize.define("Mask",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
},{
    tableName:"mask",
    timestamps:false,
    createdAt:false,
    updatedAt:false
})



