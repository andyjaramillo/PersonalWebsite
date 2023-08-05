import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Grid, IconButton} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

import MoreIcon from '@mui/icons-material/MoreVert';
function NavBar(){

    return(
        <AppBar position="static" style={{ background: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <IconButton
                        href={'/'}
                        color={'info'}
                    >
                        <HomeIcon/>
                    </IconButton>
                    <Box component="span" style={{ 'float': 'right' }} ml={20}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <Button style={{'color':'white'}} href={'/about'}><b>About</b></Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button style={{'color':'white'}} href={'/blog'}><b>Blog</b></Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button style={{'color':'white'}}><b>Game</b></Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar