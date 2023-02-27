function escribir (dict) {
    let dictstring = JSON.stringify(dict);

    let fs = require('fs');
    fs.writeFile("thing.json", dictstring, function(err, result) {
        if(err) console.log('error', err);
    });
}
const objetoo = 'HOLA NENEE. '

escribir(objetoo)
