import express from 'express';
import route from './webPath.js';
import mongoose from 'mongoose';
import  bodyParser from 'body-parser';
const app = express();
const port = 8000;

mongoose.connect("mongodb://localhost:27017/ClientInfo").then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("Error");
})

app.use(express.urlencoded({extended:false}))

app.use(express.static('Project'));

app.use('/', route);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})


