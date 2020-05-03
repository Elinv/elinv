// Variable global elemento zindex
var zindexElemId = '';
// Variable global textarea
var textAreaId = '';
// Variable global img
var imgPos = '';
// Variable global Button
var butPosId = '';

// FUNCION DE CREACIÓN DE BOTONES
function crearButton(params) {
    // preguntamos si desea cambiar el label
    let paramsPers = prompt("Ingrese su label personalizado!", params);
    if (paramsPers == null || paramsPers == "") {
        return 1;
    }
    // html que insertaremos
    let id = randId();
    let frag = `<div class="objMovible" oncontextmenu="butPosId='${id}';" contextmenu="butPosNew" id="${id}"
    style="position: absolute;z-index:10;width:100px;height:20px; maxWidth: 300px; maxHheight: 60px;left: 19px; top: 23px;">
    <button>${paramsPers}</button></div>`.toDOM();
    // lo agregamos al area de trabajo
    document.getElementById("contenedor1").appendChild(frag);    
}

// FUNCION DE CREACIÓN DE BOTONES
function crearButton1(params) {
    // fragmento de código
    var frag = document.createDocumentFragment();
    // create div
    var newDiv = document.createElement("div");
    newDiv.className = "objMovible";
    let id = randId();
    newDiv.oncontextmenu=`butPosId='${id}';`;
    newDiv.contextmenu="butPosNew";
    newDiv.setAttribute("style", "position: absolute;z-index:10;width:100px;height:20px; maxWidth: 300px; maxHheight: 60px;left: 19px; top: 23px;");
    // create button
    var btn = document.createElement("button");   // Create a <button> element
    // preguntamos si desea cambiar el label
    let paramsPers = prompt("Ingrese su label personalizado!", params);
    if (paramsPers == null || paramsPers == "") {
        return 1;
    }
    btn.innerHTML = paramsPers;
    newDiv.appendChild(btn);
    frag.appendChild(newDiv);
    // lo agregamos al area de trabajo
    document.getElementById("contenedor1").appendChild(frag);
}

// FUNCION DE CREACIÓN DE FIELDSET
function crearFieldset(params) {
    // preguntamos si desea cambiar el label
    let paramsPers = prompt("Ingrese su label personalizado!", params);
    if (paramsPers == null || paramsPers == "") {
        return 1;
    }
    // ancho y alto fieldset
    // preguntamos si desea cambiar el label
    let ancho = prompt("Ingrese ancho del Fieldset! ", 500);
    if (ancho == null || ancho == "") {
        ancho = 500;
    }
    let alto = prompt("Ingrese ancho del Fieldset! ", 300);
    if (alto == null || alto == "") {
        alto = 500;
    }
    // html que insertaremos
    let id = randId();
    var frag = `<div class="objMovible" oncontextmenu="zindexElemId='${id}';" contextmenu="zindexPos" id="${id}"
  style="position: absolute;z-index:10;width: ${ancho}px; height: ${alto}px; left: 19px; top: 23px;">
  <fieldset style="width:100%;height:100%;">
  <legend id="fieldsetId">${paramsPers}</legend>
  </fieldset></div>`.toDOM();
    // lo agregamos al area de trabajo
    document.getElementById("contenedor1").appendChild(frag);
}
// RECIZE FIELDSET
function recizeFieldset(params) {
    // Recize ancho y alto fieldset
    let anchoOrig = document.getElementById(params).clientWidth;
    let altoOrig = document.getElementById(params).clientHeight;
    let ancho = prompt("Ingrese ancho del Fieldset! ", anchoOrig);
    if (ancho == null || ancho == "") {
        ancho = anchoOrig;
    }
    let alto = prompt("Ingrese ancho del Fieldset! ", altoOrig);
    if (alto == null || alto == "") {
        alto = altoOrig;
    }
    document.getElementById(params).style.width = ancho;
    document.getElementById(params).style.height = alto;
}

// FUNCIÓN DE CREACIÓN DE TEXTAREA
function crearTextarea(params) {
    // preguntamos si desea cambiar el label
    let paramsPers = prompt("Ingrese placeholder personalizado!", params);
    if (paramsPers == null || paramsPers == "") {
        return 1;
    }
    let id = randId();
    // html que insertaremos
    var frag = `<textarea  oncontextmenu="textAreaId='${id}';" contextmenu="moveRecize" placeholder="${paramsPers}" id="${id}" class="objMovible" style="position: absolute;z-index:10;width: 129px; height: 47px; left: 11px; top: 23px;" name="${id}" rows="6" cols="100"></textarea>`.toDOM();
    // lo agregamos al area de trabajo
    document.getElementById("contenedor1").appendChild(frag);
}

// FUNCION PARA LA CREACIÓN DE UNA IMAGEN PARA ESTILIZAR
function crearIMG(params){
    // preguntamos si desea cambiar el title
    let paramsPers = prompt("Ingrese title personalizado!", params);
    if (paramsPers == null || paramsPers == "") {
        return 1;
    }
    let id = randId();
    // html que insertaremos
    var frag = `<img oncontextmenu="imgPos='${id}';" contextmenu="imgPosNew" class='objMovible' style="position: absolute;z-index:10;width: 320; height: 240;" src='./img/testing.jpg' id='${id}' name='${id}' alt='${paramsPers}' title='${paramsPers}'>`.toDOM();
    // lo agregamos al area de trabajo
    document.getElementById("contenedor1").appendChild(frag);
}

// FUNCION PARA RECIZE IMG
function recizeImg(params) {
    // Recize ancho y alto img
    let anchoOrig = document.getElementById(params).clientWidth;
    let altoOrig = document.getElementById(params).clientHeight;
    let ancho = prompt("Ingrese ancho de la imágen! ", anchoOrig);
    if (ancho == null || ancho == "") {
        ancho = anchoOrig;
    }
    let alto = prompt("Ingrese alto de la imágen! ", altoOrig);
    if (alto == null || alto == "") {
        alto = altoOrig;
    }
    document.getElementById(params).style.width = ancho;
    document.getElementById(params).style.height = alto;    
}

// FUNCION PARA CREAR LABEL TEXT
function crearLabelText(params) {
        $('#dialogoDest').html = ""; 
        $('#dialogoDest').load('./template/templateDialogoControlTexto.html', function () {
            dialogoCrearTexto();
            $('#dialogCreacTexto').dialog('option', 'title', 'Ingrese texto a crear').dialog('open');
        });
}

// FUNCION PARA CREAR INPUTS
function crearInputs(params) {
    $('#dialogoDest').html = "";
    $('#dialogoDest').load('./template/templateDialogoControlsInputs.html', function () {
        dialogCreaInputs();
        $('#dialogCreaInputs').dialog('option', 'title', 'Creando Inputs').dialog('open');
    });

}

// FUNCION PARA CREAR FORM PREMOLDEADOS
function crearFormPreMold(params) {
    $('#dialogoDest').html = "";
    $('#dialogoDest').load('./template/templateForm.html', function () {
        dialogCreaFormPreMold();
        $('#dialogCreacFormPreMold').dialog('option', 'title', 'Creando Form Premoldeados').dialog('open');
    });

}


var dialogoCrearTexto = () => {
    //includeHTML('templateDialogoControlTexto.html');
    $(function () {
        $("#dialogCreacTexto").dialog({
            open: function (event, ui) {
                document.getElementById('inputDialCrearTexto').value = "";
            },
            close: function (event, ui) { },
            autoOpen: false,
            modal: true,
            closeOnEscape: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            },
            buttons: {
                Aceptar: function () {
                    let res = aceptar();
                    if (res == 0) {
                        $(this).dialog("close");
                    }
                },
                Salir: function () {
                    $(this).dialog("close");
                }
            }
        });

        // crear elemento con texto en su interior
        function crearElemYTextNode(elemento, texto) {
            // crea un nuevo div 
            // y añade contenido 
            let newDiv = document.createElement(elemento);
            let newContent = document.createTextNode(texto);
            newDiv.appendChild(newContent); //añade texto al div creado. 
            return newDiv;
        }

        aceptar = function () {
            let result = document.getElementById('inputDialCrearTexto').value;
            if (isEmptyOrSpaces(result)) {
                alert("No ha ingresado datos.");
                return 1;
            }
            var x = document.getElementById("opcionesDialCrearTexto").selectedIndex;
            var y = document.getElementById("opcionesDialCrearTexto").options;
            //alert("Index: " + y[x].index + " is " + y[x].text);                
            // creamos
            let newDiv = crearElemYTextNode(y[x].text, result);
            newDiv.className = "objMovible";
            newDiv.setAttribute("style", "position: absolute;z-index:10;width:auto;height:auto; maxWidth: 300px; maxHheight: 60px;left: 19px; top: 23px;");

            if (y[x].text === 'label'){
                // preguntamos por el id destino para el parámetro para for
                let forParam = prompt("Ingrese id destino para el atributo for", "id_destino");
                if (forParam == null || forParam == "" || forParam == 'id_destino') {
                    forParam = randId();
                }
                newDiv.setAttribute("for", forParam);
            }
            // añade el elemento creado y su contenido al DOM 
            let currentDiv = document.getElementById("contenedor1");
            currentDiv.appendChild(newDiv);
            return 0;
        }
    });
};