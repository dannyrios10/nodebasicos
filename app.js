const {argv} = require('./config/yargs');
const colors = require('colors');
                     
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
         listarTabla(argv.base, argv.limite)
         .then(tabla => {
             console.log(`======== Tabla del ${argv.base} =========`.yellow);
             console.log(tabla.green);
             console.log(`\n`);
             console.log(`=========================================`.yellow);
            })
         .catch(e =>{
             console.log(e);
         })
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo Creado ` + `${archivo}`.green))
            .catch(e => {
            console.log(e);
        });
    break;

    default:
        console.log('Comando no reconocido');    
    break;
}



// Parametro enviado dese la terminal

// console.log(argv);

// console.log('Base: ', argv.base);
// console.log('Limite: ', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];



