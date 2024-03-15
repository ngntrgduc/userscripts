// ==UserScript==
// @name         Marginize GitHub dashboard feed
// @version      0.1
// @description  Marginize GitHub dashboard feed
// @author       ngntrgduc
// @match        https://github.com/dashboard-feed
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("application-main ")[0].style = "margin-left: 400px; margin-right: 400px;"
})();