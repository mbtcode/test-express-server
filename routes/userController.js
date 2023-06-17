const express = require("express"); //import express
const router = express.Router(); //allows for the creation of i
const findById = require("../services/userServices") //imports services for routes
router.get("/users", (req, res) => { //route for users url
    res.send("Users")
})
// router.get("/users", helloMiddleware, (req, res) => { //middleware will only be used on this line when passed into path like this
//     res.send("Users")
// })
router.post("/users", (req, res) => {
    console.log(req.body)
    res.send("created user")
})
router.get("/users/:userid", (req, res) => { // routes to specific  usser where anything after ':' is the user id
    res.send(findById(req.params.userid)) //prints the user after importing logic for routes of the requested parameters
})
module.exports = router; //exports the routes back to main file