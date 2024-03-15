// ==UserScript==
// @name         Get shit done
// @version      0.1
// @description  No more procrastination
// @author       ngntrgduc
// @match        https://www.messenger.com/*
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	function getQuote() {
        let quotes = ["GET SHIT DONE", "KEEP CALM", "FUCKED-UP", "NOT TODAY"];
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	function getShitDone() {
		document.head.innerHTML = `
    <style>
    html {
        background-color: black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 60pt;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }
    </style>
    `
		document.body.innerHTML = `<div>` + getQuote() + `</div>`;
	}

    const today = new Date();
	let hour = today.getHours(); // From 0 to 23
	let date = today.getDate(); // From 1 to 31
	// [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let day = today.getDay(); // Sunday - Saturday : 0 - 6

	// From 10:00 PM - 06:00 AM, no more procrastination
	// if (hour == 22 || (hour >= 0 && hour <= 6)) {

	// Only using at 12:00 AM
	// if (hour != 12) {

	// Only using on "even" date like 2/12, 4/12,..., "odd" dates will be blocked
	// There are 179 even date, take ~49.04% of the year
    //if (date % 2 != 0) {

	// Only block when Saturday (6) and Sunday (0)
	// Monay, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
	//   1       2         3          4       5         6        0
	//if (day == 0 || day == 6) {
    if ([0, 1, 2, 3, 4, 6].includes(day)) {
		getShitDone();
	} else {
		// Block from 1:00 AM - 11:00 AM, 1:00 PM - 23:00 PM
		// Only use for 11AM, 12PM
        if (
			(hour >= 1 && hour < 11) ||
			(hour > 12 && hour < 24)
		) {
		    getShitDone();
		}
	}
})();