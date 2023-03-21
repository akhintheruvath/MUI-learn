import { Grid, Paper, Typography,Box } from "@mui/material";
import { flexbox } from "@mui/system";

const TourCard = () => {
    return (
        <Grid item xs={3} >
            <Paper elevation={3} square >
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=720" alt="tour_image" className="img" />
                <Typography component="h4" variant="subtitle1">Immerse into the falls</Typography>
                <Box padding={1}
                    sx={{
                        display: flex,
                        alignItems: "center"
                    }}
                >

                </Box>
            </Paper>
        </Grid>
    )
}

export default TourCard;