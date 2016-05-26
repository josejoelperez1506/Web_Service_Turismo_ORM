/**
 * Created by Fam. Pérez Sontay on 06/05/2016.
 */
module.exports = function (app){
    return{
        add:function (req, res){
            var Departamento = app.get('departamento');
            Departamento.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }).then(function (departamento) {
                res.json(departamento);
            });
        },
        list:function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.findAll().then(function (departamento) {
                res.json(departamento);
            });
        },
        edit:function(req, res){
            var Departamento = app.get('departamento');
            Departamento.find(req.body.id_departamento).then(function (departamento) {
                if(departamento){
                    departamento.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion
                    }).then(function (departamento) {
                        res.json(departamento);
                    });
                }else{
                    res.status(404).send({ message: 'departamento no encontrado'});
                }
            });
        },
        delete:function(req, res){
            var Departamento = app.get('departamento');
            Departamento.destroy({
                where:{
                    id_departamento: req.body.id_departamento
                }
            }).then(function (departamento){
                res.json(departamento);
            });
        },

        prueba:function(req, res){
            var Departamento = app.get('departamento');
            Departamento.find(req.body.id_departamento).then(function (departamento) {
                if(departamento){
                    res.json(departamento);
                }else {
                    res.status(404).send({ message: "departamento no encontrado"});
                }
            });
        },

        departamentolugares:function(req,res){
            var Departamento = app.get('departamento');
            var LugarTuristico = app.get('lugarturistico');
            Departamento.find({ where: { id_departamento: req.params.id }, include: [LugarTuristico]}).then(function (departamento){
                res.json(departamento);
            });
        }
    }
}