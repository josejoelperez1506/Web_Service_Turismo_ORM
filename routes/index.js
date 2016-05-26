/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */

var ruta = require('express').Router();
module.exports = (function (app){
    var departamento = require('../controller/ControladorDepartamento')(app);
    //var lugarturistico = require('../controller/ControladorLugarTuristico')(app);

    //Ruta departamento
    ruta.get('/departamento', departamento.list);
    ruta.post('/departamento', departamento.add);
    ruta.put('/departamento', departamento.edit);
    ruta.get('/departamento/:id', departamento.departamentolugares);

    return ruta;
});