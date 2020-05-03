// si es nulo o vacío
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

// Prototitpo para anexar elementos
String.prototype.toDOM = function () {
    var htmlCode = document.createElement('div'),
        frag = document.createDocumentFragment();
    htmlCode.innerHTML = this;
    frag.appendChild(htmlCode.firstChild);
    return frag;
};

// random id
function randId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

// si es Hex
function isHex(h) {
    var a = parseInt(h, 16);
    return (a.toString(16) === h)
}

// funciones para copiar al portapapeles
// -------------------------------------
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    // para las notificaciones
    let msg;
    try {
        let successful = document.execCommand('copy');
        msg = successful ? config.msg.success : config.msg.unsucess;
        msg = config.msg.copyToClipb + msg;
        msgNotif(config.msg.titulo + "\r\n", msg)
    } catch (err) {
        msg = config.msg.errCopyToClipb + err;
        msgNotif(config.msg.titulo + "\r\n", msg);
    }
    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    let msg;
    navigator.clipboard.writeText(text).then(function () {
        msg = config.msg.copyToClipbExitosa + '\r\n \r\n => ' + text;
        msgNotif(config.msg.titulo + "\r\n", msg);
    }, function (err) {
        msg = config.msg.copyToClipbErr + err;
        msgNotif(config.msg.titulo + "\r\n", msg);
    });
}
     // -------------------------------------