const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
                     .command('listar', 'Imprime en consola la tala de multiplicar', opciones)
                     .command('crear', 'Crea un archivo con una tabla de multiplicar', opciones)
                     .help()
                     .argv;

module.exports = {
    argv,
}