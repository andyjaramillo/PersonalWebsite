import * as React from 'react';
import axios from "axios";
import Stack from "@mui/material/Stack";
import {CardActions, Grid, Modal, TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function addBlogPosts(){
        await axios.post("/api/addPost", {title, content})
            .then((response) => {
                window.location.href = '/blog';
            })
            .catch(e => {
                console.error(e);
            })
    }

    function handleSubmit() {
        if (title.length != 0 && content.length != 0 ){
            addBlogPosts()
        }
    }

    return (
        <div>
            <Stack spacing={2} mt={10}>
                <Card sx={{ minWidth: 1000, minHeight: 100,  }}>
                    <CardContent sx={{ backgroundColor: "#FBFAF5" , minHeight: 65}}>
                        <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={ detail => setTitle(detail.target.value)}/>
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={10}
                            defaultValue="Add content"
                            value={content}
                            onChange={ detail => setContent(detail.target.value)}
                        />
                    </CardContent>
                    <CardActions sx={{ backgroundColor: "#FBFAF5"}} >
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </CardActions>
                </Card>
            </Stack>
        </div>
    )
}
export default AddPost