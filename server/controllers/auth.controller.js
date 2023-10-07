
import { SALT_ROUNDS, SECRET } from '../constants.js';
import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
import { getUserbyEmail } from '../dao/user.dao.js';
import jwt from 'jsonwebtoken';
export const register = async (req,res) =>{

    const {password,...data}=req.body;
    
    try {
        const hashedPassword= await bcrypt.hash(password,SALT_ROUNDS);

    const user=new User({...data,password:hashedPassword});
    await user.save();
    res.status(201).send('user created succesfully');
    }
    catch(er){
        res.status(500).send('Something went wrong');
    }

    




    
    
};

export const login = async (req,res) =>{
    
    const {email,password}=req.body;
    if(!password || !email){
        res.status(400).send('Missing credentials');
    }

    try{

        const user=await getUserbyEmail(email);
        
        const match=await bcrypt.compare(password,user.password);
        
    
        if (match){

            const token=jwt.sign({
                id:user._id.toString(),
                email:user.email
            },  SECRET, {expiresIn:60*60});
            res.status(200).send({token});
    
    
        } else{
            res.status(401).send('wrong email or password');
        }
    
    }
    catch(e){
        res.status(500).send('Something went wrong');
        console.log(e);
    }
   
};
