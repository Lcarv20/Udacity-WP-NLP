"use strict"

const urlChecker = require("../../server/urlChecker")

test("urlChecker: expected output to be true when passed an url", () => {
	const trueUrl = "www.google.com"
	const falseUrl = "bazinga.umpf."

	expect(urlChecker(trueUrl)).toBeTruthy()
	expect(urlChecker(falseUrl)).toBeFalsy()
})
