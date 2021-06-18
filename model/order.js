const { Sequelize, Model, DataTypes } = require('sequelize');
const {sequelize} = require("./connect")

const OrderInfo = sequelize.define("OrderInfo",{
    pharmacyName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    maskName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    transactionAmount:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    transactionDate:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    tableName:"order_info",
    timestamps:false,
    createdAt:false,
    updatedAt:false
})