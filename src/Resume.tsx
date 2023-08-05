import {Grid, Tabs} from "@mui/material";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Pagination from "@mui/material/Pagination";
import * as React from "react";
import Box from "@mui/material/Box";


function Resume() {

    return(
        <div>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={5}>
                    <Typography variant="h2" gutterBottom ml={10} color={'white'}>
                        Resume
                    </Typography>
                </Grid>
            </Grid>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                mb={15}
            >
                    <Card sx={{ minWidth: 1000, minHeight: 800 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="700"
                            image="Resume.png"
                        />
                        <CardContent sx={{ backgroundColor: "black"}}>
                            <Typography variant="h5" component="div" color={'white'}>
                                Education and Experience
                            </Typography>
                            <Typography variant="body2" color={'white'}>
                               Explore more below
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonGroup variant="text" aria-label="text button group">
                                <Button target="_blank" href={"https://drive.google.com/file/d/1YembLmref-ji4ZR99n_QPlObuFOSXeCy/view?usp=drive_link"}>More on it</Button>
                                <Button target="_blank" href={"https://drive.google.com/file/d/1pA31tacMB10pyqp_QiVF18scL-hFbj5e/view?usp=drive_link"}>Download my CV!</Button>
                            </ButtonGroup>

                        </CardActions>
                    </Card>
            </Box>

        </div>
    )

}

export default Resume