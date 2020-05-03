// VER RESULTADO
function ver(params) {
    // source code del recuadro de edición
    let texto = document.getElementById('contenedor1').outerHTML;
    // si aun no se ha ingresado nada no produce ningun efecto
    if (texto.length <= 50) {
        document.getElementById("sourceCodeElinv").innerText = '';
        return 1;
    }
    // sino muestra el contenido
    texto = texto.replace(/oncontextmenu="\w+='\w+';"/g, "");
    texto = texto.replace(/contextmenu="\w+"/g, "");
    texto = texto.replace(/objMovible/g, "");
    texto = texto.replace(/"contenedor1"/g, '"contenedor" style="position: relative;"');
    //texto = texto.replace(/position: absolute/g, "clear: both; position: relative");;
    // ver el codigo en el text area
    texto = texto.replace(/</g, '\n<');
    // creamos la ventana donde veremos el resultado gráfico
    var myWindow = window.open("", "winGrafRes", "width=800,height=600");
    myWindow.document.write(texto); 
    // setTimeout(() => {
    //     myWindow.close();
    // }, 3000);

    // Para enviar al clipboard
    let codeClipBoard = texto;

    // escapamos los tags para mostrar en el pre tag
    texto = texto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //now we add <pre> tags to preserve whitespace
    texto = '<pre class="prettyprint">'+texto+'</pre>';
    //Conformamos el resultado final
    var source = `<html>
    <head>
        <meta charset="UTF-8" />
        <title>Creador Formularios Web Elinv</title>
        <link rel="stylesheet" type="text/css" href="./css/prettify.css" />
        <script src="./scripts/prettify.js"></script>
        <style> 
        pre { 
            font-family: Arial; 
            color: #009900; 
            margin: 25px;
            font-size: 20px
            white-space: pre-wrap !important;
            display: block;
            white-space: pre;
            margin: 1em 0; 
            white-space: pre-wrap;       /* Since CSS 2.1 */
            white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
            white-space: -pre-wrap;      /* Opera 4-6 */
            white-space: -o-pre-wrap;    /* Opera 7 */
            word-wrap: break-word;       /* Internet Explorer 5.5+ */         
        }  
        </style>       
        </head>
        <body>${texto}
        </body>
        </html>          
      `;

    // creamos la ventana donde veremos el codigo fuente
    var myWindow1 = window.open("", "winSourceCode", "width=800,height=600");
    myWindow1.document.write(source);
    copyTextToClipboard(codeClipBoard);    
    setTimeout(() => {
        myWindow1.prettyPrint();
        alert("Source code copiado al portapapeles!");
    }, 3000);
}


// INICIAR NUEVO PROYECTO
function nuevo(params) {
    document.getElementById('contenedor1').innerHTML = '';
    document.getElementById('contenedor2').innerHTML = '';
    document.getElementById("sourceCodeElinv").innerText = '';
}

// COPIAR RESULTADO AL PORTAPAPELES
function copiarResult(params) {
    let result = document.getElementById("sourceCodeElinv").innerText.trim();
    if ( result !== undefined || result !== null) {
        copyTextToClipboard(result);
        alert("Codigo resultante copiado al portapapeles!.")    
    }
}

// vaciar textarea
window.onload = function () {
    //document.forms['sourceCodeElinv'].reset()
    //document.getElementById("sourceCodeElinv").value = '';
};
