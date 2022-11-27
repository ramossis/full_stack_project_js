const usuarios =require('../models/usuarios');
const UsuarioController={};

UsuarioController.getAll=async(req,res)=>{
    const userAll= await usuarios.getUser();
    res.json(userAll);
}
UsuarioController.createUser=async(req,res)=>{
    const data=req.body;
    const user=await usuarios.storeUser(data);
    res.json({msg:"Persona Agregada"});
}
UsuarioController.drop=async(req,res)=>{
    const id_persona=req.params.id;
    let success;
    success=await usuarios.delete(id_persona);
    res.json({msg:"Persona Eliminada"});
    }
module.exports=UsuarioController;