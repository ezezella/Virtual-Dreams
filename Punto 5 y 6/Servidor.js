//Obtengo los modulos necesarios para desarrollar el servidor:
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

//Creo app express
const app = express();
app.use(express.static(__dirname + '/public/'));

//bodyParser es utilizado para trabajar los datos en json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (peticion, respuesta) => {
    //valido cantidad de atributos
    const cant = Object.values(peticion.body).length;
    if (cant <= 3 && Validar(peticion.body.nombre, peticion.body.apellido, peticion.body.dni)) {
        request.post('https://reclutamiento-14cf7.firebaseio.com/personas.json',
            //Creo el json que se posteara y le asigno los valores
            {
                json: {
                    "nombre": peticion.body.nombre || "-",
                    "apellido": peticion.body.apellido,
                    "dni": peticion.body.dni
                }
            }, function (err) {
                respuesta.send(err ? 'Status Code: 500' : 'Status Code: 201');
                //status code: 201 y el json que devuelve el post en caso de que se haya ingresado exitosamente
                //status code 500 por cualquier otro error no previsto
            })
    } else
        respuesta.send('Status Code: 400');
        //status code 400 si el formato del json es inválido
});

app.listen('3000', function () {
    console.log('Servidor web escuchando en el puerto 3000');
});

function Validar(nombre, apellido, dni) {
    if ((dni && apellido) && typeof (apellido) == 'string') { //dni y apellido son obligatorios y apellido es cadena de texto
        if (nombre && !typeof (nombre) == 'string') // si hay nombre tiene que ser string
            return false;

        const dniValidacion = new RegExp("^[0-9]{1,10}$"); // El campo dni es numérico de máximo 10 caracteres
        if (!dniValidacion.test(dni))
            return false;

        return true;
    }
    return false;
}