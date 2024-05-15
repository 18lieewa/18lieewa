var message = "Vous allez bientôt pouvoir désinstaller ce virus : augmentez votre volume sonore et Ctrl+A";
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
        if (letterCount < message.length) {
            title.textContent = message.substring(0, letterCount + 1); // Affiche les lettres jusqu'à letterCount inclus
            letterCount++;
        } else {
            title.textContent = message;
        }
    } else {
        title.textContent = message;
    }

    document.body.appendChild(title);

    // Met à jour la référence du titre actuel
    if (title != message){
      currentTitle = title;
    }
    
}
