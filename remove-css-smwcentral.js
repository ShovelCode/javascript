// ==UserScript==
// @name         Remove SMWC CSS
// @match        http*://www.smwcentral.net/*
// @grant        none
// ==/UserScript==

window.onload = function() {removeCSS();};
function removeCSS() {
    "use strict";
    var elements = document.getElementsByTagName("LINK");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("rel") === "stylesheet") {elements[i].setAttribute("href","");}
    }
}
//for TamperMonkey
