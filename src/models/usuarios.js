const db= require('../db');
//const mysql=require('mysql');
const usuarios={};

usuarios.getUser=async()=>{
    return await db.query('select * from usuario');
    }
usuarios.storeUser=async(data)=>{
    console.log(data);
    return await db.query('insert into usuario set ?',[data]);
}
usuarios.delete=async(id)=>{
    return await db.query('delete from usuario where id=?',[id]);
}
module.exports=usuarios;