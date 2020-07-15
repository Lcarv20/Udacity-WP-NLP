const express = require("express")
const app = express()

const port = 3333

//************ TESTING SITE ************

//For testing purposes we'll serve directly from the src folder
app.use(express.static("distr"))

app.get("/", (req, res) => {
	res.sendFile("./distr/index.html")
})

app.get("/test", (req, res) => {
	res.send("Welcome, Express Works!")
})
//*************************************

app.listen(port, function () {
	console.log("Running on port:", port)
})
