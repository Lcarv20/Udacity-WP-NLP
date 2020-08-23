const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config({ debug: process.env.DEBUG })

const port = process.env.PORT

//Dependecies
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

//************ TESTING SITE ************
//For testing purposes we'll serve directly from the src folder
app.use(express.static("distr"))

app.get("/", (req, res) => {
	res.sendFile("./distr/index.html")
})

app.get("/test", (req, res) => {
	console.log("Request Made")
	res.send({ joakin: "14" })
})
//*************************************

app.listen(port, function () {
	console.log("Running on \nhttp://localhost:" + port)
})
