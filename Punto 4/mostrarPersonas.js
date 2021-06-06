const request = require('request-promise')

//determino cual va a ser el verbo HTTP a usar (GET) y el link al cual se le aplicara dicho verbo
const personas = {
    method: 'GET',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json'
}

request (personas)
.then(function(response){
    console.log(response)//imprimo por pantalla el resultado
})
.catch(function(error){
    console.error(error)//en caso de ocurrir algun error, es informado por consola
})