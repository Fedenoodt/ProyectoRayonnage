/////////////////////////////////////////////////////////////////////    ATENCION    //////////////////////////////////////////////////////////////////////

// En este codigo hay un par de pautas claras. Una es informar la utilidad del modulo, la segunda es informar que todas las funciones estan comentadas con 
// un preambulo informativo de la tarea a acatar en la misma. Y la tercera es informar que existen diversos separadores, para marcar distintas secciones.
// Estas son las referencias encerradas en "comillas", y un [...] que significa que la secuencia se repite...

// "[...]/////[...]": Barra que indica un segmento informativo.
// "//====[...]====//": Divisor de secciones del programa
// "//----[...]----//": Sencillo divisor estetico dentro del cuerpo.

// reloj es una funcion sencilla en la que se tiene que importar el modulo, haciendo en el archivo js "import { main } as reloj from 
// "*ubicacionDeEsteModulo*"". Ademas de en el archvo HTML, aclarar que la fuente del script es del tipo modulo (type = "module").
// Este bloque sencillo arma un reloj actualizado en linea con el uso de las librerias de luxon. Usas la etiqueta que portaria el reloj, y le marcas la ID
// como "hora", y eso va a ser un reloj.


////////////////////////////////////////////////////////////////    PROYECTO RAYONNAGE    /////////////////////////////////////////////////////////////////

export function main () {
    function relojCONF () {
        //// relojCONF toma los datos, y los compila en una unica linea. ////
        const DateTime = luxon.DateTime
        const dt = DateTime.now();
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        localStorage.setItem('mes', dt.month)
        let mes = meses[dt.month - 1];
    
        let horas = dt.hour;
        if (horas < 10) {
            horas = '0' + dt.hour;
        }
        let minutos = dt.minute;
        if (minutos < 10) {
            minutos = '0' + dt.minute;
        }
        let segundos = dt.second;
        if (segundos < 10) {
            segundos = '0' + dt.second;
        }
        
        const hora = `${horas}:${minutos}:${segundos}hs. ${dt.day} de ${mes} de ${dt.year}`;
        
        return hora
    }
    let getReloj = relojCONF();
    console.log(getReloj)
    const timeDateInterval = setInterval(() => {
        //// timeDateInterval genera un pantallazo de cada segundo con la clasica funsion de setInterval(). ////
        const time = relojCONF();
        localStorage.setItem('hora', time.toString());
    }, 1000);
    
    function darReloj () {
        //// darReloj devuelve esa imagen para la pagina. ////
        let pantalla = document.getElementById('hora');
        let hora = localStorage.getItem('hora');
        pantalla.innerHTML = hora;
    }

    console.log('Si tenes este problema: "Uncaught TypeError: Cannot set properties of null (setting innerHTML) at darReloj (reloj.js:37:28)" significa que no estas declarando donde va el reloj en la web.')
    
    //// Y por ultimo, se entrega toda la compilacion de darReloj en un setInterval externo. ////
    setInterval(darReloj, 1)
}