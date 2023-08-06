import Stack from "@mui/material/Stack";
import {Box, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Container from "@mui/material/Container";
import axios from "axios";
import BlogPost from "./BlogPost";
function Blog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [blogArray, setBlogArray] = useState([]);
    async function getBlogPosts(){
        await axios.get("/api/getPost")
            .then((response) => {
              // console.log(response.data.rows)
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
            <Stack spacing={2} mt={20}>
                {blogArray.length != 0 && blogArray.map((blog:any) => {
                    return <BlogPost title={blog.title} content={blog.content} />
                })}
            </Stack>
        </div>
    )
}

export default Blog