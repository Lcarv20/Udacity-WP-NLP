export function alertText() {
	alert("works")
}

export function consoleiro() {
	console.log("It works")
	Client.alertText()
}

export function servent() {
	fetch("http://localhost:8081/test")
		.then((res) => res.json())
		.then((data) => console.log(data))
}

export function testPost() {
	document.getElementById("submiss").addEventListener("click", function () {
		let content = document.getElementById("texto").value
		postData("http://localhost:8081/tester", { value: content }).then(
			(data) => {
				console.log(data)
				document.getElementById("texto").value = data.jon
			}
		)
	})
}

//wrapp this inside a function and export it to index.js

const postData = async function (url, data) {
	console.log(data)
	const method = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}
	const response = await fetch(url, method)

	try {
		const newData = await response.json()
		console.log(newData)
		return newData
	} catch (error) {
		//console.log("Error:", error)
		alert("Please enter a valid address!")
	}
}
