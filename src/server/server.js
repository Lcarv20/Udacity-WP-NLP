const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const fetch = require("node-fetch")
require("dotenv").config({ debug: process.env.DEBUG })

//Dependecies
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

//bodyParser to json
app.use(bodyParser.json())

//MeaningCloud API variables
const port = process.env.PORT
const apiKey = process.env.API_KEY

//************ TESTING SITE ************
//For testing purposes we'll serve directly from the src folder
app.use(express.static("distr"))

function urlChecker(str) {
	let pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	) // fragment locator
	return !!pattern.test(str)
}

app.post("/tester", (req, res) => {
	console.log("Requested: ", req.body.value)
	//Resolving Unescaped Characteres
	let uri = req.body.value
	let encoded = encodeURI(uri)

	fetch(
		`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&lang=en&${
			urlChecker(encoded) ? "url" : "txt"
		}=${encoded}&model=general`
	)
		.then((data) => data.json())
		.then((data) => {
			if (data.status.code === "204") {
				console.log(data.status.msg)
				throw err
			} else {
				let { score_tag, agreement, subjectivity, confidence, irony } = data
				//console.log(score_tag, agreement, subjectivity, confidence, irony)
				res.send({ score_tag, agreement, subjectivity, confidence, irony })
			}
		})
		.catch((err) => {
			console.log("URL not accepted", err)
			res.send("Sorry, something went wrong")
		})
})

//*************************************

app.listen(port, function () {
	console.log("Running on \nhttp://localhost:" + port)
})
