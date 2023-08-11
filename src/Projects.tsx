import Box from "@mui/material/Box";
import { Grid, Tabs} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/material/Pagination';
import Divider from "@mui/material/Divider";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function Projects() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return(
        <div>
            <Grid container spacing={2} mb={10}>
                <Grid item xs={5}>
                    <Typography variant="h2" gutterBottom ml={10} color={'white'}>
                        Projects
                    </Typography>
                </Grid>
            </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={2} ml={20} sx={{ minWidth: 500 }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Amazon" {...a11yProps(0)} sx={{color: 'white'}}/>
                                <Tab label="Semester.ly" {...a11yProps(1)} sx={{color: 'white'}}/>
                                <Tab label="JHU IAA" {...a11yProps(2)} sx={{color: 'white'}}/>
                            </Tabs>
                            <CustomTabPanel value={value} index={0}>
                                <Card >
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        image="amazonSDE.jpg"
                                    />
                                    <CardContent sx={{ backgroundColor: "black"}}>
                                        <Typography variant="h5" component="div" color={'white'}>
                                            Amazon SDE Intern
                                        </Typography>
                                        <Typography variant="body2" color={'white'}>
                                            Worked on the Data Center Automation developing front
                                            end application
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/*<Button size="small">More on it</Button>*/}
                                    </CardActions>
                                </Card>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        image="semesterly.png"
                                    />
                                    <CardContent sx={{ backgroundColor: "black"}}>
                                        <Typography variant="h5" component="div" color={'white'}>
                                            Semesterly
                                        </Typography>
                                        <Typography variant="body2" color={'white'}>
                                            Developed search course
                                            abbreviations of class
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/*<Button size="small">More on it</Button>*/}
                                    </CardActions>
                                </Card>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <Card sx={{ minWidth: 275  }}>
                                    <CardContent sx={{ backgroundColor: "black"}}>
                                        <Typography variant="h5" component="div" color={'white'}>
                                            JHU Institute of Assured Autonomy
                                        </Typography>
                                        <Typography variant="body2" color={'white'}>
                                            Researched use of honeypots on inexpensive
                                            ground stations
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/*<Button size="small">More on it</Button>*/}
                                    </CardActions>
                                </Card>
                            </CustomTabPanel>
                    </Grid>

                    <Grid item xs={5} ml={25} sx={{ minWidth: 500 }}>
                        <CustomTabPanel value={value} index={0}>
                            <Card sx={{ maxHeight: 500 }}>
                                <CardContent sx={{ backgroundColor: "black"}}>
                                    <Typography variant="h2" component="div" color={'white'} mb={3}>
                                        Amazon SDE Intern
                                    </Typography>
                                    <Divider color={"white"}/>
                                    <Typography variant="h6" color={'white'} mt={3}>
                                        In the summer of 2023, I worked as a Software Development Engineer (SDE) intern at Amazon. I worked on the Data Center Automation team
                                        building front end pages for auto generated tickets. The project would help with security
                                        since the previous implementation used software that was deprecated. In the end I worked on two components that
                                        interacts with a backend database, having me learn skills such as asynchronous programming, React rendering, and transfer of data between components.
                                        I then used the experience to build this page!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Card sx={{ maxHeight: 500 }}>
                                <CardContent sx={{ backgroundColor: "black"}}>
                                    <Typography variant="h2" component="div" color={'white'} mb={3}>
                                        Semesterly
                                    </Typography>
                                    <Divider color={"white"}/>
                                    <Typography variant="h6" color={'white'} mt={3}>
                                        The second position was at Semester.ly Technologies,
                                        a Hopkins started company to help students plan their classes for the semester.
                                        I was a backend developer working with Django to support common class abbreviations to be added to the search.
                                        In order to gauge what was used, we gathered user analytics through surveys and in person contacts.
                                        From this new feature, users reported pleasure with the feature and had their schedules completed quicker.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Card sx={{ maxHeight: 500 }}>
                                <CardContent sx={{ backgroundColor: "black"}}>
                                    <Typography variant="h2" component="div" color={'white'} mb={3}>
                                        JHU Institute of Assured Autonomy
                                    </Typography>
                                    <Divider color={"white"}/>
                                    <Typography variant="h6" color={'white'} mt={3}>
                                        My first job was with the Johns Hopkins Institute of Assured Autonomy
                                        as a security researcher exploring the use of Honeypots on inexpensive ground stations.
                                        Ground stations are currently available through services like AWS where it’s paid per usage,
                                        but this poses problems for smaller companies and Universities for research.
                                        The honeypot was built using Python, and would use an authentication system between the ground station and satellite on initial connection.
                                        The honeypot had a fake web server, logs, and users to attract hackers. The project didn’t finish in time to get results.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CustomTabPanel>
                        <Pagination count={3} size="small" />
                    </Grid>
                </Grid>
        </div>
    )
}

export default Projects