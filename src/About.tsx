import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {useState} from "react";


function About() {
    const [hovered, setHovered] = useState(-1);

    const handleMouseEnter = (index: number) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(-1);
    };

    return (
        <div>
            <Stack spacing={2}>
                <Grid container spacing={2} mb={15}>
                    <Grid item xs={5}>
                        <Typography variant="h2" gutterBottom ml={10} color={'white'}>
                            About
                        </Typography>
                    </Grid>
                </Grid>
                <Divider component="h2" color={"white"} />
                <Box width={'100%'} height={250}
                     sx={{
                         '&:hover': {
                             backgroundColor: 'white',
                             transition: 'background-color 0.5s ease-in-out', // Adjust the transition speed
                             textColor: 'black'
                         },
                     }}
                     onMouseEnter={() => handleMouseEnter(0)}
                     onMouseLeave={handleMouseLeave}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Typography variant="h4" gutterBottom ml={20} mt={5} color={(hovered==0)? 'black' : 'white'}>
                                Education
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom ml={10}  color={hovered==0? 'black' : 'white'} mt={4}>
                                I am currently a student at John’s Hopkins University studying Computer Science.
                                I have taken essential CS classes including Data Structures,
                                Low Level Computer Science fundamentals, and Discrete Math.
                                I am currently interested in exploring Deep learning, Compilers and Interpreters, and Operating Systems.
                                I have been part of Hopkins Rocketry Club and participated in HopHacks,
                                an annual hackathon sponsored by Johns Hopkins.
                                My concentration is going to explore the use of exciting technology of AI in Aerospace.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box width={'100%'} height={250}
                     sx={{
                         '&:hover': {
                             backgroundColor: 'white',
                             transition: 'background-color 0.5s ease-in-out', // Adjust the transition speed
                             textColor: 'black'
                         },
                     }}
                     onMouseEnter={() => handleMouseEnter(1)}
                     onMouseLeave={handleMouseLeave}
                >
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography variant="body1" gutterBottom color={hovered==1? 'black' : 'white'} ml={10} mt={4}>
                            My experience has mainly consisted of software development considering various contexts.
                            I have experience with the following skills: Python, React, Typescript, PostgreSQL, Django,
                            Docker, CI/CD, Dev ops, Linux fundamentals, C, C++, Unity.
                            I am currently exploring deep learning and aerospace robotics software. In my free time,
                            I am currently building a game in Unity.
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h4" gutterBottom ml={30} mt={5}  color={hovered==1? 'black' : 'white'}>
                            Experience
                        </Typography>
                    </Grid>
                </Grid>
                </Box>
                <Box width={'100%'} height={250}
                     sx={{
                         '&:hover': {
                             backgroundColor: 'white',
                             transition: 'background-color 0.5s ease-in-out', // Adjust the transition speed
                             textColor: 'black'
                         },
                     }}
                     onMouseEnter={() => handleMouseEnter(2)}
                     onMouseLeave={handleMouseLeave}
                >
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography variant="h4" gutterBottom ml={20} mt={5}  color={hovered==2? 'black' : 'white'}>
                            Non Academic Experience
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" gutterBottom  color={hovered==2? 'black' : 'white'} ml={10} mt={4}>
                            I have been an avid explorer of the Chinese language and cultures.
                            I have been studying for 5 years and I am currently rated as Intermediate mid
                            according to the Oral Proficiency Interview (OPI) exam, or useful in basic conversational and professional use.
                            In the summer of 2022, I traveled to Taiwan with US State Department and National Security Language for Youth Initiative
                            for language study for 6 weeks in Tamkang University 淡江大学. Currently I am exploring opportunities to utilize in my career
                        </Typography>
                    </Grid>
                </Grid>
                </Box>
            </Stack>

        </div>
    )
}

export default About