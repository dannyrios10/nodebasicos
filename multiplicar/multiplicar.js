
const fs = require('fs');
const { arch } = require('os');
const colors = require('colors');


let archivo = '';

let listarTabla = (base, limite) =>{
    return new Promise((resolve,reject) =>{

        if(base===true || !Number(base) ){
            reject('Ingrese un numero para realizar la operación');
            return;
        }

        for(let i = 1; i<=limite; i++){
            let resultado = '\n';
            resultado += `${base} * ${i} = ${base*i}`;
            archivo += `${resultado}`
        }
        resolve(archivo);
    })
}

let crearArchivo = (base, limite) =>{


    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject('Ingrese un numero para realizar la operación');
            return;
        }
        
        for(let i = 1; i<=limite; i++){
            let resultado = '\n';
            resultado += `${base} * ${i} = ${base*i}`;
            archivo += `${resultado}`
        }
    
        fs.writeFile(`tablas/tabla-${base}.txt`, archivo, (err) =>{
            archivo = '';
            if(err) reject(err);
            else resolve(`tabla-${base}.txt`);
            console.log('El archivo se ha creado con exito');
        });

    })


}




module.exports = {
    crearArchivo,
    listarTabla
}