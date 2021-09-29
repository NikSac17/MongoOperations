const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to database.");
    })
    .catch(()=>{
        console.log("Database down...");
    })
}

module.exports = connectToMongo;