import jwt, { decode } from 'jsonwebtoken';
import { SECRET } from '../constants.js';
const verifyJWTToken = (req, res, next) => {
    const token=req.header('x-access-token');
    try{

        const decoded=jwt.verify(token,SECRET);

        if(decoded){

            req.user={
                id: decoded.id,
                 role: decoded.role,
                email: decoded.email,
                
            }

            next();

        } else {

            return res.status(401).send('Unauthorized');
        }

    }
    catch(e){
        console.error('JWT verification error:', e);
        res.status(401).send('Unauthorized');
    }
    
};

export default verifyJWTToken;