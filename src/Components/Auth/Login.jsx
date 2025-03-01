import {
    Box,
    Button,
    CircularProgress,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { login } from "../../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, redirectHome } = useSelector(
        (state) => state.authKey
    );


    const onSubmit = (data) => {
        console.log("Registration data", data);
        let siginData = {
            email: data?.email,
            password: data?.password,
        };
        dispatch(login(siginData));
    };

    const redirectUser = () => {
        let token = localStorage.getItem("token");
        let isInLoginPage = window.location.pathname === "/login";
        console.log("isInLoginPage", isInLoginPage);

        if (token !== "" && token !== undefined && token !== null) {
            isInLoginPage && navigate("/");
        }
    };
    

    useEffect(
        () => {
            setTimeout(() => redirectUser(), 2000);
        },
        // eslint-disable-next-line
        [redirectHome]
    );


    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url('./images/backone.jpg')`,
                    width: "100%",
                    height: "92vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "50px",
                        minWidth: { xs: "250px" },
                        minHeight: "500px",
                        px: 2,
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            width: "100%",
                            border: "2px solid white",
                            p: 4,
                            borderRadius: "15px",
                            backgroundColor: "#ab6832d4", 
                            backdropFilter: "blur(10px)", 
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <InputLabel
                            sx={{
                                fontSize: {xs : '1.4rem',sm : '2rem'},
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "white",
                            }}
                        >
                            Login
                        </InputLabel>
                        <Grid container spacing={2}>
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
                        </Grid>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                backgroundColor: "#ab6832",
                            }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress/> : 'Login'}
                        </Button>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                gap: "10px",
                                color: "white",
                                width: "100%",
                            }}
                        >
                            <Typography
                            variant="body1"
                            sx={{
                                fontSize: '.9rem',
                            }}
                            > Don't have an account?</Typography>
                            <NavLink
                                to="/registration"
                                style={{ textDecoration: "none" }}
                            >
                                <Typography
                                    component="a"
                                    sx={{
                                        color: "white",
                                        fontSize: '.9rem',

                                    }}
                                >
                                    Click Here to Registered
                                </Typography>
                            </NavLink>
                        </Box>
                    </Box>
                </Box>
                
            </Box>
        </>
    );
}
