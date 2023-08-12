import * as React from 'react';
import axios from "axios/index";
import BlogPost from "./BlogPost";
import Stack from "@mui/material/Stack";
import {TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";


function Add_Post() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function addBlogPosts(){
        await axios.post("/api/addPost", {title: title, content: content})
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
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </Stack>
        </div>
    )
}
export default Add_Post