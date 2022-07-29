// ==UserScript==
// @name         Betastar Chat Downloader
// @namespace    http://betastarutils.github.io/
// @version      1.0
// @description  The **restored** Betastar Chat Downloader for Tampermonkey. 
// @author       l2vy7/acai
// @match        https://betastar.org/chat/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=betastarutils.github.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.textContent = `
    .chatExport {
        font-family: jua;
        color: white;
        border-radius: 0.25rem;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: black;
        box-shadow: 0px 10px 25px 15px rgba(100,100,100,0.2);
        padding: 5px 10px;
    }
    `;
    document.body.appendChild(style);

    var bruh = document.createElement('h3');
    bruh.textContent = 'Download Chat Logs';
    bruh.classList.add('chatExport');
    document.body.appendChild(bruh);

    bruh.addEventListener('click', function (e) {
        var text = ``;
        for (var elem of document.getElementsByClassName('chatBox')[0].children) {
            var profile = elem.children[0].src.endsWith('gif') ? 'Owner' : capitalizeFirstLetter(elem.children[0].src.replace('https://betastar.org', '').replace('/image/elements/', '').replace('.png', ''));
            text += `${profile} - ${elem.children[1].textContent.replace(' > ', '')}: ${elem.children[2].textContent}\n`.replace('Https://betastar.org', '');
        }
        downloadFile(`data:application/txt,${encodeURIComponent(text)}`);
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function downloadFile(url) {
        const a = document.createElement('a');

        a.style.display = 'none';
        a.href = url;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        a.download = `logs-${mm}-${dd}-${yyyy}-${today.getSeconds()}.txt`;

        document.body.appendChild(a);

        a.click();

        window.URL.revokeObjectURL(url);
    }
})();
