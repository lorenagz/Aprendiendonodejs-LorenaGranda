//var servidor = require('./server');

//servidor.iniciar();

const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("hola");
    res.end();
})

app.listen(7577);



