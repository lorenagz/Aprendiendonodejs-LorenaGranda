//var servidor = require('./server');

//servidor.iniciar();

const express = require('express');
const app = express();
const calc = require('./Micalculadora')

app.get("/", function(req,res){
    //res.send("hola");
    //res.end();
    console.log(calc.Sumar(4,5));
    res.end();
})

app.listen(7577, ()=>{
    console.log("ejecutando")
});



