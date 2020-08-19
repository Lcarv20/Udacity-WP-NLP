import { alertText } from "./js/test.js"

document.getElementById("btn").addEventListener("click", (e) => {
	console.log(e)
	e.target.innerText = "Clicked hehe"
	alertText()
})
