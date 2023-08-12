import Stack from "@mui/material/Stack";
import {Box, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Container from "@mui/material/Container";
import axios from "axios";
import BlogPost from "./BlogPost";
function Blog() {
    const [blogArray, setBlogArray] = useState([]);
    async function getBlogPosts(){
        await axios.get("/api/getPost")
            .then((response) => {
                setBlogArray(response.data.rows)
            })
            .catch(e => {
                console.error(e);
            })
    }

    useEffect(() => {
       getBlogPosts();
    },[])

    return (
        <div>
            <Stack spacing={2} mt={10}>
                {blogArray.length != 0 && blogArray.map((blog:any) => {
                    return <BlogPost title={blog.title} content={blog.content} id={blog.id} />
                })}
            </Stack>
        </div>
    )
}

export default Blog