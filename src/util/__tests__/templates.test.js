"use strict"
import { postRequest, showResultBoard } from "../../client/js/templates"

test("postRequest: verifying parameters & functionality", () => {
	let got = postRequest({ value: "Hi" })
	expect(got.method).toBe("POST")
	expect(JSON.parse(got.body)).toMatchObject({ value: "Hi" })
	expect(JSON.parse(got.body)).toHaveProperty("value")
})

test("showResultBoard: testing style change from hidden to block", () => {
	document.body.innerHTML = `<table id="result" style="display:none"></table>`
	showResultBoard()
	const eleToTest = document.getElementById("result")
	expect(eleToTest.style.display).toBe("block")
})
