export function testPost() {
	document.getElementById("submiss").addEventListener("click", function () {
		let content = document.getElementById("texto").value
		document.getElementById("result").innerHTML = "Loading"
		postData("http://localhost:8081/tester", { value: content }).then(
			(data) => {
				//console.log(data)
				document.getElementById(
					"result"
				).innerText = `${data.score_tag} / ${data.agreement} / ${data.subjectivity} / ${data.confidence} / ${data.irony}`
			}
		)
	})
}

const postData = async function (url, data) {
	//console.log(data)
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
		//console.log(newData)
		if (newData.msg) {
			throw error
		}
		return newData
	} catch (error) {
		console.log("Error:", error)
		alert(
			"Ups! Something went wrong. Please try again maybe with a different url/text"
		)
	}
}
