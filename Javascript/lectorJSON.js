export function main (archivo) {
    fetch((archivo) + '.json')
    .then((response) => response.json())
    .then((data) => localStorage.setItem('registro', JSON.stringify(data)))


let registro = localStorage.getItem('registro');
let items = registro.length;
console.log(items)

function listaObjetos () {
    const conversor = JSON.parse(registro);
    let constructor = '';
    for (let i = 0; i < conversor.length; i++) {
        let datos = JSON.stringify(conversor[i]);
        constructor += datos
    }
    return constructor
}

function desComillar () {
    const conversor = listaObjetos();
    console.log(conversor)

    let reescritura = '';
    for (let i = 0; i < conversor.length; i++) {
        if (conversor[i] == '"' | conversor[i] == '{'  | conversor[i] == '[' | conversor[i] == ']' | conversor[i] == '.') 
        {reescritura += ''}
        else if (conversor[i] == ':' | conversor[i] == ','){
            reescritura += `${conversor[i]} `
        }
        else if (conversor[i] == 'c' & conversor[i+1] == 'r' & conversor[i+2] == 'e' & conversor[i+3] == 'd' & conversor[i+4] == 'e' & conversor[i+5] == 'n' & conversor[i+6] == 'c' & conversor[i+7] == 'i' & conversor[i+8] == 'a' & conversor[i+9] == 'l') {
            reescritura += ` c`
        } 
        else if (conversor[i] == '}') {
            reescritura += ` </br> `
        }
        else {reescritura+= conversor[i]}
    }
    return reescritura
}

let limpio = desComillar()
document.write(limpio)

}
