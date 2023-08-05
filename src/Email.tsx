import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import * as React from "react";
import {CardActions, Grid, Modal, TextField} from "@mui/material";
import {useState} from "react";
import EmailIcon from '@mui/icons-material/Email';
import {border} from "@mui/system";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Email() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
        setInput('');
    };
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState('');
    return(
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="400"
                mt={10}
            >
                <Stack spacing={2}>
                    <Typography variant="h2"  color={'white'}>
                        Thank you for viewing my page
                    </Typography>
                    <Card sx={{ minWidth: 1000, minHeight: 100,  }}>
                        <CardContent sx={{ backgroundColor: "#FBFAF5" , minHeight: 65}}>
                                <EmailIcon/>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} ml={30}>
                                        <Typography variant="h5" component="div" mt={2} >
                                            Add your Email Here
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                            <TextField  id="outlined-basic" variant={"standard"} label="Email" color={"warning"} value={input}
                                                       onChange={detail => setInput(detail.target.value)}
                                            />

                                    </Grid>
                                </Grid>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Thank you
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            You are now a part of a fun emailing list
                                        </Typography>
                                    </Box>
                                </Modal>
                        </CardContent>
                        <CardActions sx={{ backgroundColor: "#FBFAF5"}} >
                            <Button style={{marginLeft: 450, marginBottom: 10, textEmphasisColor: 'black'}} disabled={(0 == input.length)} onClick={handleOpen}><b>Send!</b></Button>
                        </CardActions>
                    </Card>
                </Stack>

            </Box>
        </div>
    )
}

export default Email