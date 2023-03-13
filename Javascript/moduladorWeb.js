//const inicio = localStorage.getItem('index');
//refresh(inicio)

function noWeb () {
    // noWeb solo es un aviso por consola, de que no se marco ningun indice.
    console.log('No web selected. Redirecting to main page.')
}

function fatalError () {
    // fatalError solo muestra por consola, un error terminal en el desarrollo de la web.
    console.log("Sorry. We can't set the local web. Try again later.");
}

function refresh (parameter) {
    let block = null;
    block = document.createElement('div');
    block.innerHTML = ''
    document.body.appendChild(block)

    
    block = document.createElement('div');
    block.innerHTML = parameter
    document.body.appendChild(block)
}

function builder () {
    const interface = { ...localStorage };
    // interface trae todas las paginas del almacenamiento local.
    console.log('Extracting selected webs.')
    if (interface != null) {
    console.log('All webs has been loaded.')
    }
    let nexID =  []
    // nexID va a ser quien las almacene en un arreglo, dandole una ID.
    for (const [key] of Object.entries(interface)) {
        // En este bucle, se va a generar el arreglo, con las N webs que hay almacenadas.
        if (`${key}` != 'nexID' & `${key}` != 'target') {
        nexID.push(`${key}`)
        }
    }
    // La construccion finaliza con el lanzamiento de nexID, para darle usos fuera.
    localStorage.setItem('nexID', nexID)
    console.log(`Web's pictures builded.`)
}

function seeker (parameter) {
    // seeker toma a nexID para "buscar" el ID de la pagina.
    let nexID = localStorage.getItem('nexID').split(',');
    // console.log('nexID en seeker:', nexID.split(','))
    for (let i = 0; nexID[i]; i++) {
        // Este bucle empieza a barrer el arreglo, buscando ese ID.
        console.log(`Tracking build device, step ${i + 1}...`)
        if (nexID[i] == parameter) {
        const find = i;
        console.log('Build device founded.')
    // finalmente se devuelve ese valor como "find" para comenzar a estructurar la imagen de pagina.
    localStorage.setItem('target', find)
        } else {console.log('The build device has not founded.')}
    }
}

function indexer () {
    // indexer da la orden de que la pagina a activar, es la pagina nativa index.
    const index = seeker('index');
    return index
}


//function main (web) {
    console.log('Reading web pictures archives.')
    builder();
    console.log('Passing data from selected web ID.')


    console.log('Setting modular mark for finish the page.')
    let webList = localStorage.getItem('nexID').split(',');
    console.log('webs storage:', webList)
    let position = localStorage.getItem('target');
    if (position == null) {
        noWeb()
        indexer()
    }


    console.log('position:', position)

    let converged = webList[position];
    if (position == null || position == undefined || webList == null || webList == undefined) {
        fatalError()
    } else {
    console.log(`Setting local web "${converged}".`)

    refresh(localStorage.getItem(`${converged}`))
    console.log('Charge complete. Script ending.')

    }

