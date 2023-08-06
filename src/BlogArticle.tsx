import axios from "axios";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


function BlogArticle() {
    const id = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    async function getBlogArticle() {
        await axios.get('/api/getPost/'+id.id)
            .then((response) => {
                setTitle(response.data.title)
                setContent(response.data.content)
            }).catch(e => {
                console.error(e);
            })
    }


    useEffect(() => {
      getBlogArticle();
    },)

    return (
        <div>
            <Typography variant="h1" gutterBottom>
                {title}
            </Typography>

            <Divider />

            <Typography variant="body1" gutterBottom>
                {content}
            </Typography>
        </div>
    )
}

export default BlogArticle