const express = require("express");
const connectToMongo=require("./db");

connectToMongo();

const port = 5000;
const app = express();

app.use(express.json()); //allows express to read the body and then parse that into a Json object

//routes
app.use("/mongo/user",require("./routes/user"));

app.listen(port,()=>{
    console.log("Backend running...");
})