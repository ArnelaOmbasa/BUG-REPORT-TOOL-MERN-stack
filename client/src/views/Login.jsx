import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    TextField
  } from '@mui/material';  
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate(); // hook from react-router-dom

    // console.log({email});
    // console.log({password});

    const loginUser = async () => {
        try {
            const result = await axios.post('http://localhost:5000/auth/login', {
                email: email,
                password: password
            });

            if(result?.data && result?.status === 200) {
                const { token } = result.data;
                localStorage.setItem('token', token);
                navigate('/bugs-overview')
            }


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Box 
            sx={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
            }}>
            <Card 
                sx={{ 
                    maxWidth: '500px', 
                    border: '1px solid blue' 
                }}>
            <CardContent>
                <TextField sx={{ margin: '5px'}} id="outlined-basic" label="email" variant="outlined"  value={ email } onChange={(e) => setEmail(e.target.value)}/>
                <TextField sx={{ margin: '5px'}} id="outlined-basic" label="password" variant="outlined" value={ password } onChange={(e) => setPassword(e.target.value)}/>
            </CardContent>
            <CardActions>
                <Button variant="outlined" onClick={ loginUser }>Login</Button>
            </CardActions>
            </Card>
        </Box> 
      );
}

export default Login;