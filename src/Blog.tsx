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
        await axios.get("/api/getBlogPosts")
            .then((response) => {
                setBlogArray(response.data)
            })
    }

    useEffect(() => {
       getBlogPosts();
    },[])

    return (
        <div>
            <Stack spacing={2}>
                <Grid container spacing={2} mt={30}>
                    <Grid item xs={1}  ml={60}>
                        <Typography variant="h6" gutterBottom color={"white"}>
                           Title
                        </Typography>
                    </Grid>
                    <Grid item xs={2} style={{backgroundColor: "#FBFAF5"}}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"
                            value={title} onChange={detail => setTitle(detail.target.value)}
                        />
                    </Grid>
                </Grid>
                    <TextareaAutosize
                        value={content}
                        onChange={detail => setContent(detail.target.value)}
                        style={{backgroundColor: "#FBFAF5", maxWidth:800, marginLeft: 325, marginBottom: 10}}
                        minRows={15}
                    />
                {blogArray.length != 0 && blogArray.map((blog:any) => {
                    return <BlogPost title={blog.title} content={blog.content} />
                })}
            </Stack>
        </div>
    )
}

export default Blog