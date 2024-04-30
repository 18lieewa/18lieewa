var mot = "Vous avez bientot fini votre experience sur notre l'ARG nous esperons qu'il vous a plus, si oui n'ésitez pas à nous le faire savoir Crtl A";
var letterCount = 0; // Compteur de lettres affichées
var currentTitle = null; // Stocke la référence du titre actuel

// Attend que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    addEvent(document, "keydown", function (e) {
        e = e || window.event;
        console.log(e.key);
        displayNewTitle(e.key);
    });
});

function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}

function displayNewTitle(key) {
    // Supprime l'ancien titre s'il existe
    if (currentTitle !== null) {
        document.body.removeChild(currentTitle);
    }

    var title = document.createElement("h1");

    // Vérifie si la touche pressée est une lettre
    if (/^[a-zA-Z]$/.test(key)) {
        if (letterCount < mot.length) {
            title.textContent = mot.substring(0, letterCount + 1); // Affiche les lettres jusqu'à letterCount inclus
            letterCount++;
        } else {
            title.textContent = mot;
        }
    } else {
        title.textContent = mot;
    }

    document.body.appendChild(title);

    // Met à jour la référence du titre actuel
    currentTitle = title;
}
