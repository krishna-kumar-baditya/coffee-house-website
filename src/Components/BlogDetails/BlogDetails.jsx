import { Box, Typography } from "@mui/material";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
export default function BlogDetails() {
    const { id } = useParams();
    return (
        <>
            {id == 1 ? (
                <Box className="blogdetail-container">
                    <Box className="blog-wrapper">
                        <Box className="blogdetail-image">
                            <img src="/images/blog-1.png" alt="" />
                        </Box>
                        <Box className="blogdetail-content-box">
                            <Box className="blogdetail-header">
                                <Typography variant="h3">
                                    Watch sdedn nises
                                </Typography>
                                <Typography variant="body1">
                                    14 November, 2023 \ HasTech Shopify Team
                                </Typography>
                            </Box>
                            <Box className="blogdetail-content">
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qei officia deser
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et
                                </Typography>
                                <Box className="blockquote">
                                    <Typography variant="body1">
                                        Es un hecho establecido hace demasiado
                                        tiempo que un lector se distraerá con el
                                        contenido del texto de un sitio mientras
                                        que mira su diseño.
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehendrit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ) : null}
            {id == 2 ? (
                <Box className="blogdetail-container">
                    <Box className="blog-wrapper">
                        <Box className="blogdetail-image">
                            <img src="/images/blog-2.png" alt="" />
                        </Box>
                        <Box className="blogdetail-content-box">
                            <Box className="blogdetail-header">
                                <Typography variant="h3">
                                    Smgori tuin nibes kninwe{" "}
                                </Typography>
                                <Typography variant="body1">
                                    14 November, 2023 \ HasTech Shopify Team
                                </Typography>
                            </Box>
                            <Box className="blogdetail-content">
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qei officia deser
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et
                                </Typography>
                                <Box className="blockquote">
                                    <Typography variant="body1">
                                        Es un hecho establecido hace demasiado
                                        tiempo que un lector se distraerá con el
                                        contenido del texto de un sitio mientras
                                        que mira su diseño.
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehendrit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ) : null}
            {id == 3 ? (
                <Box className="blogdetail-container">
                    <Box className="blog-wrapper">
                        <Box className="blogdetail-image">
                            <img src="/images/blog-3.png" alt="" />
                        </Box>
                        <Box className="blogdetail-content-box">
                            <Box className="blogdetail-header">
                                <Typography variant="h3">
                                    Minis mnies anide ewnis
                                </Typography>
                                <Typography variant="body1">
                                    14 November, 2023 \ HasTech Shopify Team
                                </Typography>
                            </Box>
                            <Box className="blogdetail-content">
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qei officia deser
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et
                                </Typography>
                                <Box className="blockquote">
                                    <Typography variant="body1">
                                        Es un hecho establecido hace demasiado
                                        tiempo que un lector se distraerá con el
                                        contenido del texto de un sitio mientras
                                        que mira su diseño.
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehendrit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ) : null}
            {id == 4 ? (
                <Box className="blogdetail-container">
                    <Box className="blog-wrapper">
                        <Box className="blogdetail-image">
                            <img src="/images/blog-4.png" alt="" />
                        </Box>
                        <Box className="blogdetail-content-box">
                            <Box className="blogdetail-header">
                                <Typography variant="h3">
                                    Jininsi smart watch mnisyh nise{" "}
                                </Typography>
                                <Typography variant="body1">
                                    14 November, 2023 \ HasTech Shopify Team
                                </Typography>
                            </Box>
                            <Box className="blogdetail-content">
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qei officia deser
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et
                                </Typography>
                                <Box className="blockquote">
                                    <Typography variant="body1">
                                        Es un hecho establecido hace demasiado
                                        tiempo que un lector se distraerá con el
                                        contenido del texto de un sitio mientras
                                        que mira su diseño.
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehendrit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </>
    );
}
