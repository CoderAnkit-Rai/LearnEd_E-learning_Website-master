import express from 'express';
import {join} from 'path';
const route = express();
import userDetailSchema from './Project/schema.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const userDetail = new mongoose.model("UserDetail", userDetailSchema);

route.get('/login', (req, res)=>{
    res.sendFile(join(process.cwd(), 'Project', 'login.html'));
})

route.post('/', async (req, res)=>{
    try{
        const user = new userDetail({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        const result = await user.save();
        res.sendFile(join(process.cwd(), 'Project', 'index.html'));
    }catch(err){
        console.log(err);
    }
})

route.get('/', (req, res)=>{
    res.sendFile(join(process.cwd(), 'Project', 'index.html'));
})

export default route;