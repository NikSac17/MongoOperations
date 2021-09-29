const express = require("express");
const connectToMongo=require("./db");

connectToMongo();

const port = 5000;
const app = express();

app.listen(port,()=>{
    console.log("Backend running...");
})