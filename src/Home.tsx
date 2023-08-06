import {Grid, IconButton, useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from "@mui/icons-material/Home";
import * as React from "react";
import Projects from "./Projects";
import Resume from "./Resume";
import Email from "./Email";
import Footer from "./Footer";



function Home() {
    const theme = useTheme();
    return (
        <div>
        <Box width={'100%'} height={600} >
            <Grid container spacing={2} mb={10}>
                <Grid item xs={5}>
                    <Typography variant="h2" gutterBottom mt={40} ml={10} color={'white'}>
                        Andreas Jaramillo
                        <Button variant="outlined" size="large" disabled style={{color:'white'}}>Portfolio</Button>
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography ml={25} mt={5} >
                        <img src={'IMG_7452.jpg'} width={400} height={500} />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    <Box
        display="flex"
        ml={65}
        alignItems="center"
        justifyContent="center"
    >
        <Grid container spacing={4}>
            <Grid item xs={2}>
                <Typography variant="overline" display="block" gutterBottom color={'white'}>
                   Tech Curious
                </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem color={'white'} />
            <Grid item xs={2}>
                <Typography variant="overline" display="block" gutterBottom color={'white'}>
                   Aeronautic Enthusiast
                </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem color={'white'} />
            <Grid item xs={2}>
                <Typography variant="overline" display="block" gutterBottom color={'white'}>
                    Chinese Learner
                </Typography>
            </Grid>
        </Grid>
    </Box>
            <Divider color={'white'}>
                <IconButton
                color={'secondary'}
                size={"large"}
            >
                <KeyboardArrowDownIcon/>
            </IconButton></Divider>

            <Projects/>

            <Divider color={'white'}> <IconButton
                color={'secondary'}
                size={"large"}
            >
                <KeyboardArrowDownIcon/>
            </IconButton></Divider>

            <Resume/>

            <Divider color={'white'}> <IconButton
                color={'secondary'}
                size={"large"}
            >
                <KeyboardArrowDownIcon/>
            </IconButton></Divider>

            <Email/>

            <Footer/>
        </div>
    )
}

export default Home