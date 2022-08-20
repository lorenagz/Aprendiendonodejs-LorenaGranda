//var servidor = require('./server');

//servidor.iniciar();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
//const calc = require('./Micalculadora')
const path =require('path');

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.use(express.static('./public'));

app.get("/",function(req,res){
    let usuario = ['Lorena','Granda']
    var nombre = "usuario LORENA"
    res.render('pages/index',
        {name:nombre,
        user:usuario}
    );
})

app.get("/", function(req,res){
    res.render('pages/index.ejs');
})

app.listen(PORT, ()=>{
    console.log("ejecutando")
});




