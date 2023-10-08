import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { useEffect, useState } from 'react';
import axiosInstance from '../axios-instance'
import { Card, CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { decodeToken } from 'react-jwt';

const BugDashboard = () => {
    const [bugs, setBugs] = useState([]); // array of bugs
   const token=localStorage.getItem('token');
   const user = decodeToken(token);


    useEffect(() => {
        (async () => {
            const result = await axiosInstance.get("/bugs/")
            console.log(result);
    
            if(result?.data?.length) {
                setBugs(result.data);
            }
        })(); // IIFE(Immediately Invoked Function Expression)
    }, []);

    return (
        <Box>
            <Box 
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    height: '60px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography 
                        sx={{ 
                            padding: '7px',
                            fontSize: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                        }}>
                        Bug app
                    </Typography>
                    <BugReportOutlinedIcon 
                        sx={{
                            fontSize: '30px',
                        }}/>
            </Box>
            <Box sx={{"marginTop": "10px"}}>
                {
                    user.role ==='QA'&& <Button variant ="outlined">Create Bug</Button>
                }
                </Box>
            <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '20px',
            }}>
                {bugs?.map((bug) => ( // when we use () we don't need to use return
                        <Card key={bug._id} sx={{ maxWidth: '300px', margin: '20px' }}>
                            <CardContent>
                                <Typography sx = {{
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}>
                                    Title: {bug?.title}
                                </Typography>

                                <Typography sx = {{
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}>
                                    Reproduction steps: {bug?.steps}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                {
                                    user && user.role ==='DEVELOPER'&& 
                                    <Button variant="outlined">
                                        Finish
                                    </Button>
                                }
                                </CardActions>
                        </Card>
                    ))}

            </Box>
        </Box>
    )
}

export default BugDashboard;