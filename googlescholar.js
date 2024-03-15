// ==UserScript==
// @name         Non-stop google scholar
// @version      0.1
// @description  Make you despair in google scholar
// @author       ngntrgduc
// @match        https://scholar.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
		document.getElementById("gsc_bpf_more").click();
	}, 1000)
})();