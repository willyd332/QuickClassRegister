// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       https://saprod.emory.edu/psc/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    console.log("what")
    document.addEventListener("click", function(){ // Listens for click
       if (document.getElementById("DERIVED_SSR_FL_SSR_ENROLL_FL")){ // Checks for Enroll Button
            document.getElementById("DERIVED_REGFRM1_SSR_SELECT$2").click() // Selects check box 2 ****NOTE check boxes aren't necessarily in order
            document.getElementById("DERIVED_REGFRM1_SSR_SELECT$5").click() // ..
            document.getElementById("DERIVED_REGFRM1_SSR_SELECT$8").click() // ..
            // document.getElementById("DERIVED_REGFRM1_SSR_SELECT$4").click()
            document.getElementById("DERIVED_SSR_FL_SSR_ENROLL_FL").click() // Clicks Enroll Button
            document.addEventListener("click", function(){ // Click a second time
            document.getElementById("#ICYes").click() //. Clicks the confirmation button
            });
        } else {
            window.location.reload() // If there isnt an enroll button yet, click to reload the page
        }
    });
})();
