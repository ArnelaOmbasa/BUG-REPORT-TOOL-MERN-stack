
import Bug from '../models/Bug.model.js';
import User from '../models/User.model.js';
import {ROLES} from '../constants.js';


export const getAllBugs = async (req, res) => {
    
        const bugs = await Bug.find();
        console.log(bugs);
        res.status(200).send(bugs);
    
   
};


export const createBug = async (req, res) => {
    const bug = req.body;
    const bugToSave = new Bug(bug);
    try {
        const result = await bugToSave.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send('could not create bug');
    }


};

export const changeCompletedStatus = async (req, res) => {

    try{
    const {completed}=req.body;
    const{id}=req.params;
    const result= await Bug.findByIdAndUpdate(id,{completed});
    res.status(200).send('successfully changed status');
    }
    catch(e){
        res.status(500).send('Something went wrong');
    }

};

export const getBugsByUserId = async (req, res) => {
    const {userId}=req.params;
    if (!req.user) {
        return res.status(401).send({ error: 'User not authenticated' });
    }

    const {role} = req.user;

    //assignedTo developer
    //reportedBy QA

   try{

    
     
     let bugs=[];

     if(role === ROLES.QA){
        bugs= await Bug.find({reportedBy:userId});
     }
     else{
        bugs= await Bug.find({assignedTo:userId});
     }
     return res.status(200).send(bugs);

   } catch(e){
       res.status(500).send('Could not catch bugs');
   }
};
