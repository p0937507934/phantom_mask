const express = require("express")
const {connectDB} = require("./model/connect")
const app = new express()

connectDB()

app.listen(8000,()=>{
    console.log("server is running on 8000.")
})