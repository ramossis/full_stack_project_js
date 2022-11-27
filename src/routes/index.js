const express= require('express');
const UsuarioController=require("../controllers/UsuarioController");

const routes=express.Router();

routes.get('/',(req,res)=>{
    res.send('hola mundo');
    res.end();
});

routes.get('/api/get-usuario',UsuarioController.getAll);

routes.post('/api/create-usuario',UsuarioController.createUser);
routes.delete('/api/delete-persona/:id',UsuarioController.drop);

module.exports=routes;