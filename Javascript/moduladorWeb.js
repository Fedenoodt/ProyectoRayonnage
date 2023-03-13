/////////////////////////////////////////////////////////////////////    ATENCION    //////////////////////////////////////////////////////////////////////

// En este codigo hay un par de pautas claras. Una es informar la utilidad del modulo, la segunda es informar que todas las funciones estan comentadas con 
// un preambulo informativo de la tarea a acatar en la misma. Y la tercera es informar que existen diversos separadores, para marcar distintas secciones.
// Estas son las referencias encerradas en "comillas", y un [...] que significa que la secuencia se repite...

// "[...]/////[...]": Barra que indica un segmento informativo.
// "//====[...]====//": Divisor de secciones del programa
// "//----[...]----//": Sencillo divisor estetico dentro del cuerpo.

// moduladorWeb tiene la tarea de construir una web, partiendo desde la base de que el diseñador tiene que tomar los enlaces con la funcion buscadora 
// seeker("nombreQueTieneLaWeb"), y subir ese mismo nombre a un localStorage, con cada una de las paginas.
// incluyendo asi este modulo "automatico", una funcion especial, a la que se le pide al mismo diseñador, que la web de cabezera, se nombre como "index".
// Para no perder el tiempo con las dudas de cual es de estas webs.


////////////////////////////////////////////////////////////////    PROYECTO RAYONNAGE    /////////////////////////////////////////////////////////////////

//=======================================================    funciones de impresion en consola    =======================================================//
//// Estas funciones son para el uso especial en el que en la proyecion desde la consola se produce algun evento, avise de la situacion actual. ////

function noWeb () {
    // noWeb solo es un aviso por consola, de que no se marco ningun indice.
    console.log('No web selected. Redirecting to main page.')
}

function fatalError () {
    // fatalError solo muestra por consola, un error terminal en el desarrollo de la web.
    console.log("Sorry. We can't set the local web. Try again later.");
}

//===========================================================    funciones de construccion    ===========================================================//
//// Estas funciones son las que se encargan de modelar la estructura que va a conformar adecuadamente la pagina, segun las instrucciones. ////

function refresh (parameter) {
    // refresh se encarga detras de la produccion de la imagen, de agarrar el nombre que finalmente correspnde, y suplantar el cuerpo por la pagina actual.
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

//==========================================================    funciones de investigacion    ===========================================================//
//// Estas son las primeras funciones del programa, que se encargan de tomar los parametros, y dirigir esta informacion en la direccion correcta. ////

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

//====================================================================    cuerpo    =====================================================================//
//// En el cuerpo se hacen dos cosas. Se ejecutan las funciones en orden, y se hace una proyeccion en consola de el estado del programa. ////

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
