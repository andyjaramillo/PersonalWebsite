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
        await axios.get('/api/getSpecificPost/', {params: {id: id.pk}})
            .then((response) => {
                setTitle(response.data.rows.title)
                setContent(response.data.rows.content)
            }).catch(e => {
                console.error(e);
            })
    }


    useEffect(() => {
      getBlogArticle();
    }, [])

    return (
        <div>
            <Typography variant="h1" gutterBottom color={'white'}>
                {title}
            </Typography>

            <Divider />

            <Typography variant="body1" gutterBottom color={'white'}>
                {content}
            </Typography>
        </div>
    )
}

export default BlogArticle