import { DialogContent, DialogTitle,Dialog } from "@mui/material"
import { useState } from "react"
import { TextField } from "@mui/material"


const CreateBugModal =({open,setIsCreateBugModalOpen})=>{
    const [title,setTitle]=useState('')
    const [steps,setSteps]=useState('')
    return (
        <Dialog 
        onClose={()=>setIsCreateBugModalOpen(false)} 
        open={open}
        fullWidth
        >
            <DialogTitle>Create Bug</DialogTitle>
            <DialogContent sx={{marginTop:'10px', displax:"felx", flexDirection: "column"}}>
                <TextField sx={{ margin: '5px'}} id="outlined-basic" label="title" variant="outlined" value="title"  onChange={(e) => setTitle(e.target.value)}/>
                <TextField sx={{ margin: '5px'}} id="outlined-basic" label="steps" variant="outlined" value="steps" onChange={(e) => setSteps(e.target.value)}/>
            </DialogContent>
        </Dialog>
    )
}

export default CreateBugModal;