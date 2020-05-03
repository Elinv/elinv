//Si el navegador del cliente es Mozilla la variable siguiente valdrá true
var moz = document.getElementById && !document.all;
//Flag que indica si estamos o no en proceso de arrastrar el ratón
var estoyArrastrando = false;
//Variable para almacenar un puntero al objeto que estamos moviendo
var dobj;

function arrastrarRaton(e) {
    if (estoyArrastrando) {
        let x = dobj.style.width;
        let y = dobj.style.height;
        if (x = 'auto'){
            x = 100;
            y = 40;
        }
        //document.title = x + " " + y + " " + e.clientX + " " + e.clientY;
        // newLeft = moz ? e.clientX : event.clientX;
        // newTop = moz ? e.clientY : event.clientY;
        // //document.title = newLeft + " " + newTop + " " + dobj.style.width + " " + dobj.style.height;
        // dobj.style.left = newLeft - parseInt(dobj.style.width) / 2;
        // dobj.style.top = newTop - parseInt(dobj.style.height) / 2;
        dobj.style.left = e.clientX - parseInt(x) / 2 + "px";
        dobj.style.top = e.clientY - parseInt(y) / 2 - 30 + "px";
        return false;
    }
}

function soltarBoton(e) {
    estoyArrastrando = false;
    //let texto = document.getElementById("contenedor1").outerHTML;
    //document.getElementById("sourceCodeElinv").value = texto;
}

function presionarBoton(e) {
    //Obtenemos el elemento sobre el que se ha presionado el botón del ratón
    var fobj = moz ? e.target : event.srcElement;

    // Buscamos el primer elemento en la que esté contenido aquel sobre el que se ha pulsado
    // que pertenezca a la clase objMovible. 
    while (fobj.tagName.toLowerCase() != "html" && fobj.className != "objMovible") {
        fobj = moz ? fobj.parentNode : fobj.parentElement;
    }

    // Si hemos obtenido un objeto movible...			
    if (fobj.className == "objMovible") {
        // Activamos el flag para indicar que se empieza a arrastrar
        estoyArrastrando = true;
        // Guardamos un puntero al objeto que se está moviendo en la variable global
        dobj = fobj;

        // Devolvemos false para no realizar ninguna acción posterior
        return false;
    }
}

document.onmousedown = presionarBoton;
document.onmouseup = soltarBoton;
document.onmousemove = arrastrarRaton;
//document.oncontextmenu = new Function("return false");