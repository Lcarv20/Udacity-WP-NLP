const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const fetch = require("node-fetch")

require("dotenv").config({ debug: process.env.DEBUG })

const port = process.env.PORT
const apiKey = process.env.API_KEY
const tempUrl =
	"https://examples.yourdictionary.com/descriptive-text-examples.html"

//Dependecies
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

//MeaningCloud API Settings

var options = {
	method: "POST",
	hostname: "api.meaningcloud.com",
	path: `/sentiment-2.1?key=${apiKey}&lang=auto&url="${tempUrl}"&model=general`,
	headers: {},
	maxRedirects: 20,
}

fetch(
	`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${tempUrl}&model=general`
)
	.then((data) => data.json())
	.then((data) => console.log(data))

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
