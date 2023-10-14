const app = require("./app");
const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const server = http.createServer(app);
const port = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://jabutu:QkNlgK4b0drZglMo@cluster0.wvricnh.mongodb.net")
.then(() => console.log("database connected successefully"))
.catch(err => console.log(`error connecting to database:: ${err.message}`))


server.listen(port, () => {
    console.log(`app listen on ${port}`);
})  