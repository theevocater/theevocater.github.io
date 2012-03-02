"use strict";
var xmlhttp = new XMLHttpRequest();
var chatWindow = document.getElementById('text');
//document.getElementsByTagName('form')[0].onsubmit = sendValue;

function getScrollback() {
    chatWindow = document.getElementById('text');
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            chatWindow.value = xmlhttp.responseText;
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    };
    xmlhttp.open("GET", "/test/all", true);
    xmlhttp.send(null);
}

function getMessages() {
    //   document.getElementById('txt').innerHTML+=;
    // t=setTimeout('drawBall()',16);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            chatWindow.value = xmlhttp.responseText;
            chatWindow.scrollTop = chatWindow.scrollHeight;
            getMessages();
        }
    };
    xmlhttp.open("POST", "/test/latest", true);
    xmlhttp.send(new Date().toTimeString());
}

function sendValue() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            chatWindow.value += xmlhttp.responseText;
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    };
    xmlhttp.open("POST", "/test", true);
    xmlhttp.send(document.getElementById("inputbox").value);
    document.getElementById("inputbox").value = "";
}
