/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */
(function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    var mysql =  require('mysql');
    var morgan = require('morgan');
    var Sequelize = require('sequelize');

    var sequelize = new Sequelize('db_turismo', 'root', '', {
        host: 'localhost',
        pool: {
            max: 20,
            min: 0,
            idle: 10000
        }
    });

    //Declaraciones
    var Usuario = sequelize.define('usuario', {
        id_usuario: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        telefono :{type: Sequelize.INTEGER, allowNull: false},
        correo: {type: Sequelize.STRING, allowNull: false},
        nick: {type: Sequelize.STRING, allowNull: false},
        contrasena: {type: Sequelize.STRING, allowNull: false},
        direccion: { type: Sequelize.STRING, allowNull: false }
    });

    var Departamento = sequelize.define('departamento',{
        id_departamento: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: {type: Sequelize.STRING, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false}
    });

    var LugarTuristico = sequelize.define('lugarturistico',{
        id_lugarturistico: {type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false },
        descripcion: {type: Sequelize.STRING, allowNull: false },
        direccion: {type: Sequelize.STRING, allowNull: false },
        id_departamento: {type: Sequelize.INTEGER, foreignKey: true}
    });

    var Hotel = sequelize.define('hotel', {
        id_hotel: {type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        direccion: {type: Sequelize.STRING, allowNull: false},
        punteo:{type: Sequelize.INTEGER, allowNull: false},
        id_departamento: {type: Sequelize.INTEGER, foreignKey: true}
    });

    //---------
    Departamento.hasMany(LugarTuristico, {foreignKey: 'id_departamento', constraints: true});
    LugarTuristico.belongsTo(Departamento, {foreignKey: 'id_departamento', constraints: true});
    //---------
    Departamento.hasMany(Hotel, {foreignKey: 'id_departamento', constraints: true});
    Hotel.belongsTo(Departamento, {foreignKey: 'id_departamento', constraints: true});
    //---------
    //---------
    //---------
    //---------
    //---------

    sequelize.sync({ force: false});
    var puerto=3000;
    var conf= require('./config');
    var app=express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use('/api/v1', require('./routes')(app));
    app.use(morgan('dev'));
    app.set('usuario', Usuario);
    app.set('departamento', Departamento);
    app.set('lugarturistico', LugarTuristico);
    app.set('hotel', Hotel);

    app.listen(puerto,function(){
        console.log("Servidor iniciado en el puerto: " + puerto);
        console.log("Debug del servidor: ");
    });

})();