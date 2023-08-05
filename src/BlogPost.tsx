import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import {CardActions, Grid, Modal, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";


interface BlogPostInterface{
    title: string,
    content: string,
}


function BlogPost(props: BlogPostInterface) {

    const {title, content} = props;
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                mb={15}
            >
                <Card sx={{ minWidth: 1000, minHeight: 300 }}>
                    <CardContent sx={{ backgroundColor: "black"}}>
                        <Typography variant="h5" component="div" color={'white'}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color={'white'}>
                            {content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Learn more</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default BlogPost