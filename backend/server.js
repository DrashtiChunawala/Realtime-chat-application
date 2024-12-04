const express=require('express');
const testRoute=require('./TestRoutes');

const app=express();

app.use('/', testRoute);

app.listen(3000,()=>console.log("server is running on port 3000"));