import User from '../models/User.model.js';
const getUserbyEmail = async (email) => {

    try{
        const user= await User.findOne({email});
        return user;

    }
    catch(e){
       return null;
    }
    

};
export { getUserbyEmail };