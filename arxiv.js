// ==UserScript==
// @name         Arxiv utils
// @version      0.1
// @description  Utils for Arxiv
// @author       ngntrgduc
// @match        https://arxiv.org/abs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Reduce width
    document.getElementsByClassName("abstract mathjax")[0].style = "width: 50vw";
})();