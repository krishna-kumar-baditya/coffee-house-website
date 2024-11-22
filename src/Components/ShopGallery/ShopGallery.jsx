import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import './ShopGallery.css'
import ImageCard from "../ImageCard/ImageCard";
export default function ShopGallery(){
    return(
        <>
        <Box className='gallery'>
            <Box className='gallery-heading'>
                <Typography variant="h3">Coffee Shop Gallery</Typography>
            </Box>
            <Box className='gallery-content'>
                <Grid container>
                    <Grid className='gallery-container'>
                        <ImageCard image='./images/gallery-1.jpg'/>
                        <ImageCard image='./images/gallery-2.jpg'/>
                        <ImageCard image='./images/gallery-3.jpg'/>
                        <ImageCard image='./images/gallery-4.jpg'/>
                        <ImageCard image='./images/gallery-5.jpg'/>
                        <ImageCard image='./images/gallery-6.jpg'/>
                    </Grid>
                </Grid>

            </Box>

        </Box>
        </>
    )
}