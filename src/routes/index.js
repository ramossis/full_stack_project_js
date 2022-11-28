const express= require('express');
const UsuarioController=require("../controllers/UsuarioController");

const routes=express.Router();

routes.get('/',(req,res)=>{
    res.send('hola mundo');
    res.end();
});

/** 
 * Usuarios
*/
routes.get('/api/get-usuario',UsuarioController.getAll);
routes.post('/api/create-usuario',UsuarioController.createUser);
routes.put('/api/update-usuario/:id',UsuarioController.updateUser);
routes.delete('/api/delete-usuario/:id',UsuarioController.drop);


module.exports=routes;