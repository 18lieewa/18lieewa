addEvent(document, "keypress", function (e) {
    e = e || window.event;
    system.out.println(e.keyCode);
    // use e.keyCode
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
