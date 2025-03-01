import {
    Box,
    Button,
    CircularProgress,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { registration } from "../../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
export default function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, redirectLogin, isRegister } = useSelector(
        (state) => state.authKey
    );
    const watchImage = watch("profile_pic");
    const newImage =
        watchImage && watchImage[0] ? URL.createObjectURL(watchImage[0]) : null;

    const onSubmit = (data) => {
        console.log("Registration data", data);
        let formData = new FormData();
        formData.append("first_name", data?.first_name);
        formData.append("last_name", data?.last_name);
        formData.append("email", data?.email);
        formData.append("password", data?.password);
        formData.append("profile_pic", data?.profile_pic[0]);
        dispatch(registration(formData));
    };

    const redirectUser = () => {
        let rname = localStorage.getItem("registrationname");
        let isInRegistrationPage = window.location.pathname === "/registration";
        if (rname !== "" && rname !== undefined && rname !== null) {
            isInRegistrationPage && navigate("/login");
        }
    };
    useEffect(
        () => {
            setTimeout(() => redirectUser(), 3000);
        },
        // eslint-disable-next-line
        [redirectLogin]
    );


    return (
        <>
            <Box
                className='registration-container'
            >
                    <Box
                        component="form"
                        className="registration-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <InputLabel
                            sx={{
                                fontSize: "2.125rem",
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "white",
                            }}
                        >
                            Register
                        </InputLabel>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <Typography
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    First Name
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="First Name"
                                    type="text"
                                    fullWidth
                                    {...register("first_name", {
                                        required: "Enter first name",
                                    })}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "white", 
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            "&.Mui-focused": {
                                                color: "white",  
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "white",
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <span style={{ color: "red" }}>
                                    {errors.first_name?.message}
                                </span>
                            </Grid>
                            <Grid size={12}>
                                <Typography
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Last Name
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    placeholder="Last Name"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    {...register("last_name", {
                                        required: "Enter last name",
                                    })}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "white", 
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            "&.Mui-focused": {
                                                color: "white",  
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "white",
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <span style={{ color: "red" }}>
                                    {errors.last_name?.message}
                                </span>
                            </Grid>
                            <Grid size={12}>
                                <Typography
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Email
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    placeholder="Email"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    {...register("email", {
                                        required: "Enter email",
                                    })}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "white", 
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            "&.Mui-focused": {
                                                color: "white",  
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "white",
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <span style={{ color: "red" }}>
                                    {errors.email?.message}
                                </span>
                            </Grid>
                            <Grid size={12}>
                                <Typography
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Password
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    placeholder="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    {...register("password", {
                                        required: "Enter password",
                                    })}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "white", 
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            "&.Mui-focused": {
                                                color: "white",  
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "white",
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <span style={{ color: "red" }}>
                                    {errors.password?.message}
                                </span>
                            </Grid>
                            <Grid size={12}>
                                <Typography
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Confirm Password
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    placeholder="Confirm Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    {...register("confirmpassword", {
                                        required: "Enter password",
                                    })}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "white", 
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            "&.Mui-focused": {
                                                color: "white",  
                                            },
                                        },
                                        "& .MuiInputBase-input::placeholder": {
                                            color: "white",
                                            opacity: 1,
                                        },
                                    }}
                                />
                                <span style={{ color: "red" }}>
                                    {errors.confirmpassword?.message}
                                </span>
                            </Grid>
                            <Grid size={12}>
                                <Typography
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Profile Picture
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="file"
                                    fullWidth
                                    {...register("profile_pic", {
                                        required: "Upload Picture",
                                    })}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "white", 
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            "&.Mui-focused": {
                                                color: "white",  
                                            },
                                        },
                                    }}
                                />
                                <span style={{ color: "red" }}>
                                    {errors.profile_pic?.message}
                                </span>
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                backgroundColor: "#ab6832",
                            }}
                        >
                            
                            {loading ? <CircularProgress />:'Register'}

                        </Button>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                color: "white",
                            }}
                        >
                            <Typography> Already have an account?</Typography>
                            <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                <Typography
                                    component="a"
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Login
                                </Typography>
                            </Link>
                        </Box>
                        {loading && <CircularProgress />}
                    </Box>

                
            </Box>
        </>
    );
}
