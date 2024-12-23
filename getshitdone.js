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

	// General logic
function getshitdone() {
    document.head.innerHTML = `
        <style>
        html {   
            background-color: #1f1f1f;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 100pt;
        }
        </style>`;
    document.body.innerHTML = `<div>👁️</div>`;
    // Or you can add motivational quotes
    // const quotes = [
    //     'KEEP CALM', // Add more here... 
    // ];
    // const i = Math.floor(Math.random() * quotes.length);
    // document.body.innerHTML = ''; // Clear existing content
    // document.body.innerHTML = `<div>${quotes[i]}</div>`
	}

	function inBlockRange(startHour, endHour) {
		// Block if between startHour and endHour
		// Hour range from 0 to 23
		const hour = new Date().getHours();
		return hour >= startHour && hour < endHour
	}


	if (inBlockRange(0, 6)) getshitdone(); // Sleep
	if (inBlockRange(9, 11)) getshitdone(); // Morning
	// if (inBlockRange(12, 13)) getshitdone(); // Noon
	if (inBlockRange(13, 17)) getshitdone(); // Afternoon
	if (inBlockRange(21, 23)) getshitdone(); // Evening
})();