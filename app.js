var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');


// var connectionString = "mongodb://root:toor@ds125113.mlab.com:25113/cifx2";
var connectionString = "mongodb://root:toor700@ds018248.mlab.com:18248/juliodb";


mongoose.connect(connectionString, function (err, res) {
    if (err) throw err;
    console.log('Conectado a la Base de Datos');
});

//ESTO PERMITE RECIBIR PETICIONES FUERA DE ESTE DOMINIO
function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*');
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(perimitirCrossDomain);

// Ruteo
var router = express.Router();

router.get('/', function (req, res) {
    res.send("Que tal sabandijassssssssssssssssssssss!");
});

app.use(router);

// Start server
var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Node server running");
});


