export function showResultBoard() {
	document.getElementById("result").style.display = "block"
}

export function postRequest(data) {
	return {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}
}
