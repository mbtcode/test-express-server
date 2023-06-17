const helloMiddleware = (req, res, next) => { //pass next in to allow continuing code
    console.log("hello")
    next() //next function keeps the code moving
}

module.exports = helloMiddleware;