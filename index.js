const express = require("express"); //imports express by requiring it
const app = express(); //runs express in app
const userRouter = require("./routes/userController") //imports the routes from userController.js
const helloMiddleware = require("./middleware/helloMiddleware") //imports middleware function from middleware folder
// require("dotenv").config() //config method takes a .env file path as an argument
// console.log(process.env.USERNAME) //displays username from .env file using process.env.USERNAME
const variables = require("./config/variables") //imports variables from .env file into main app
console.log(variables.username) //prints out user1 using username variable from variables import in config folder
app.use(helloMiddleware) // uses the hellomiddle
app.use(express.json()); //allows the reading of json from incoming request
app.listen(3000); //creates server on port 3000 by 'listening'
app.get("/", (req, res) => { //route for base url
    res.send("hello")
})
app.use(userRouter) //Tells express routes are in another folder