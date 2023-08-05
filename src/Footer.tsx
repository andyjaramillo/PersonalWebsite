import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Grid, IconButton} from "@mui/material";
import * as React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    return(
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="200"
                width={"100%"}
                mt={10}
                mb={2}
            >
                <Grid container spacing={2} ml={85} >
                    <Grid item xs={1}>
                        <IconButton
                            color={'secondary'}
                            size={"large"}
                            href={"https://www.linkedin.com/in/andreas-jaramillo/"}
                            target='_blank'
                        >
                           <LinkedInIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                            color={'secondary'}
                            size={"large"}
                            href={"https://github.com/andyjaramillo"}
                            target='_blank'
                        >
                          <GitHubIcon/>
                        </IconButton>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Footer