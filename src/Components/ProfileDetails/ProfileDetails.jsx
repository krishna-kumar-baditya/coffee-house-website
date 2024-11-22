import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { profiledetails } from "../../Redux/authSlice";
import { profileImagePath } from "../../API/axiosInstance";

export default function ProfileDetails() {
    const { profileData } = useSelector((state) => state.authKey);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profiledetails());
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "92vh",
                    backgroundImage: `url('../images/backfour.jpg')`,
                    backgroundPosition : 'center',
                    backgroundSize : 'cover'

                }}
            >
                <Card
                    sx={{
                        maxWidth: { xs: 300, sm: 600 },
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        padding: 2,
                        borderRadius: "20px",border :'3px solid white',
                        background : 'transparent'
                    }}
                >
                    <CardMedia
                        src={
                            profileData?.profile_pic
                                ? profileImagePath(profileData?.profile_pic)
                                : "error"
                        }
                        component="img"
                        alt="product"
                        sx={{
                            objectFit: "cover",
                            width: "200px",
                            height: "200px",
                            objectPosition: "center center",
                            borderRadius: "14px",
                        }}
                    />
                    <CardContent>
                        <Typography variant="h6" sx={{
                            color : 'white',fontSize : '26px',fontWeight : 'bold',textTransform : 'capitalize'
                        }}>
                            {profileData?.first_name} {profileData?.last_name}
                        </Typography>
                        <Typography variant="body2" sx={{
                            color : 'white',fontWeight : 'bold',
                            fontSize : '20px'
                        }}>
                            {profileData?.email}
                        </Typography>
                        <Typography variant="body2" sx={{
                            color : 'white',fontWeight : 'bold',
                            fontSize : '20px'
                        }}>
                            Role : User
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
