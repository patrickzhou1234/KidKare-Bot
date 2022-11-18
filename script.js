// ==UserScript==
// @name         KidKare
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.kidkare.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kidkare.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onkeydown = function(event) {
        if (event.keyCode=="46") {
            var wid = document.querySelectorAll(".child-widget__widget-header");
            for (var i=0;i<wid.length;i++) {
                wid[i].click();
            }
            document.querySelectorAll("button.ng-binding")[1].click();
        }
        if (event.keyCode=="45") {
            var x = document.querySelectorAll(".child-in-out-component__header");
            for (i=0;i<x.length;i++) {
                x[i].click();
            }
        }
    }
})();
