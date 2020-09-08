export function dataGeter() {
	document.getElementById("submiss").addEventListener("click", function () {
		let content = document.getElementById("texto").value
		if (content.length <= 1) {
			document.getElementById("result").innerHTML =
				"Please Introduce some text to start analysis!"
			return
		}
		document.getElementById("result").innerHTML = "Loading"
		postData("http://localhost:8081/textanalysis", { value: content }).then(
			(data) => {
				//console.log(data)
				document.getElementById("result").innerHTML = `
				<tr>
				<th class="itemList">Score</th>
				<td>${data.score_tag}</td>
				</tr>
				<tr>
				<th class="itemList">Agreement</th>
				<td>${data.agreement}</td>
				</tr>
				<tr>
				<th class="itemList">Subjectivity</th>
				<td>${data.subjectivity}</td>
				</tr>
				<tr>
				<th class="itemList">Confidence</th>
				<td>${data.confidence}</td>
				</tr>
				<tr>
				<th class="itemList">Irony</th>
				<td>${data.irony}</td>
				</tr>
				`
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
