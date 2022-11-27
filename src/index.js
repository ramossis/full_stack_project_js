require('dotenv').config();
const express = require('express');
const routes=require('./routes');
const cors=require('cors');
const {json}=require('express');
const app=express();

app.use(cors());
app.use(json());

app.use(routes);
app.listen(process.env.SERVER_PORT,()=>{
    console.log("Sever is On already for use");
});