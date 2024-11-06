let trocouFundo = false;
let trocouCoresTexto = false;
let textoAntigo = Array();

/**
 * Coleta o texto antigo.
 */
function coletaTextoAntigo() {

    let to_collect = [
        document.getElementsByTagName("h1"),
        document.getElementsByTagName("h3"),
        document.getElementsByTagName("li")
    ];

    for(let i = 0; i < to_collect.length; i++) {
        let intermediary = Array();
        for(let j = 0; j < to_collect[i].length; j++) {
            intermediary.push(to_collect[i][j].textContent);
        }
        textoAntigo.push(intermediary);
    }
}
coletaTextoAntigo();


let abobrinha = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
    " dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
    "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est " +
    "laborum."

function trocaPlanoDeFundo() {
    trocouFundo = !trocouFundo; // alterna o valor da variável trocouFundo entre true e false

    if(trocouFundo) {
        document.body.style.background = '#CCFFFF';
    } else {
        document.body.style.background = '#FFFFFF';
    }
    console.log('a cor do background agora é ' + document.body.style.background);
}

function trocaCoresTexto() {
    trocouCoresTexto = !trocouCoresTexto; // alterna o valor da variável trocouFundo entre true e false

    let titulosh1 = document.getElementsByTagName("h1");  // pega todos os títulos h1
    let titulosh3 = document.getElementsByTagName("h3");  // pega todos os títulos h3
    let links = document.getElementsByTagName("a");

    let color = "#000000";
    if(trocouCoresTexto) {
        color = "#AAAAAA";
    }

    for(let i = 0; i < titulosh1.length; i++) {
        titulosh1[i].style.color = color;
    }

    for(let i = 0; i < titulosh3.length; i++) {
        titulosh3[i].style.color = color;
    }

    for(let i = 0; i < links.length; i++) {
        links[i].style.color = color;
    }

    console.log('a cor do texto agora é ' + color);
}

function trocaTexto(modo) {
    let elementos = Array();

    let titulosh1 = document.getElementsByTagName("h1");  // pega todos os títulos h1
    let titulosh3 = document.getElementsByTagName("h3");  // pega todos os títulos h3
    let items = document.getElementsByTagName("li");

    elementos.push(titulosh1);
    elementos.push(titulosh3);
    elementos.push(items);

    for(let i = 0; i < elementos.length; i++) {  // itera sobre a lista de todos os elementos
        for(let j = 0; j < elementos[i].length; j++) {  // itera sobre um conjunto de elementos
            let comprimento_texto = elementos[i][j].innerText.length;

            if(modo === 'titulos_paragrafos') {
                elementos[i][j].textContent = abobrinha.substring(0, comprimento_texto);
            } else if (modo === 'texto_normal') {
                elementos[i][j].textContent = textoAntigo[i][j];
            }
        }
    }

    if(modo === 'titulos_paragrafos') {
        console.log('o texto todo agora é abobrinha.');
    } else if (modo === 'texto_normal') {
        console.log('o texto está normal agora.');
    }
}