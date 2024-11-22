import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import "./BlogCard.css";
import { NavLink } from "react-router-dom";
export default function BlogCard({ image, id,title }) {
    console.log('image',image);
    
    return (
        <>
            <Card className="blogcardContainer">
                <Box className="cardmediaContainer">
                    <CardMedia
                        className="cardmedia"
                        component="img"
                        image={image}
                        alt="blog card"
                    />
                </Box>
                <CardHeader
                    className="blog-title"
                    title={title}
                />
                <CardContent className="blog-content">
                    <Typography variant="body1">
                        14 November, 2023 \ 0 Comments
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptate hic laboriosam nesciunt aliquam dolo...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="btn" variant="outlined">
                        <NavLink to={`/blogdetails/${id}`}>
                            Explore More
                        </NavLink>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
