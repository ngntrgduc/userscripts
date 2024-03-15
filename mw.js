// ==UserScript==
// @name         M-W utils
// @version      0.1
// @description  Merriam-Webster utils
// @author       ngntrgduc
// @match        https://www.merriam-webster.com/dictionary/*
// @match        https://www.merriam-webster.com/thesaurus/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	// Change between Dictionary/Thesaurus mode when Tab key pressed
	window.addEventListener("keydown", function(event) {
		if (event.key === "Tab") {
			document.getElementById("mw-search-toggle").click();
		}
	});

    // Auto search when double click on vocab
	window.addEventListener("dblclick", (event) => {
		const selected = window.getSelection().toString();
		if (selected.trim() !== "") {
			let currentUrl = window.location.href;
			const currentVocab = currentUrl.split('/').pop();
			if (currentVocab != selected) {
				window.location.href = currentUrl.replace(currentVocab, selected);
			}
		}
	});
})();