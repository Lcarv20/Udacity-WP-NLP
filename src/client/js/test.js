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
