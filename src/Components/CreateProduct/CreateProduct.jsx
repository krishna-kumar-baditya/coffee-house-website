import {
    Alert,
    Box,
    Button,
    CardMedia,
    CircularProgress,
    Slide,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useForm } from "react-hook-form";
import { createProduct } from "../../Redux/crudSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CreateProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const { loading } = useSelector((state) => state.crudKey);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const watchImage = watch("image");
    const newImage =
        watchImage && watchImage[0] ? URL.createObjectURL(watchImage[0]) : null;
    const [open, setOpen] = useState(false);

    console.log("create product newImage", newImage);

    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data?.image[0]);
        dispatch(createProduct(formData)).then(() =>
            setTimeout(() => navigate("/showproductlist"), 2000)
        );
    };

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url('./images/backThree.jpeg')`,
                    width: "100%",
                    minHeight: "92vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "20px",
                        p: 2,
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            maxWidth: { xs: 350 },
                            border: "2px solid white",
                            p: 4,
                            borderRadius: "15px",
                            backgroundColor: "#ab6832d4", 
                            backdropFilter: "blur(10px)", 
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                fontSize : {xs : 'calc(1rem + 1vw)',sm : '2rem'},
                                fontWeight : '600'
                            }}
                        >
                            Add Product
                        </Typography>

                        <Grid size={12}>
                            <Typography
                                sx={{
                                    color: "white",
                                }}
                            >
                                Title
                            </Typography>

                            <TextField
                                id="outlined-basic"
                                placeholder="Title"
                                type="text"
                                fullWidth
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
                                {...register("title", {
                                    required: "enter title ",
                                })}
                            />
                            <span>{errors.title?.message}</span>
                        </Grid>
                        <Grid size={12}>
                            <Typography
                                sx={{
                                    color: "white",
                                }}
                            >
                                Description
                            </Typography>

                            <TextField
                                id="outlined-basic"
                                placeholder="Description"
                                type="text"
                                multiline
                                rows={4}
                                fullWidth
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
                                {...register("description", {
                                    required: "enter description",
                                })}
                            />
                            <span>{errors.description?.message}</span>
                        </Grid>
                        <Grid size={12}>
                            <Typography
                                sx={{
                                    color: "white",
                                }}
                            >
                                Product Picture
                            </Typography>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="file"
                                fullWidth
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
                                {...register("image", {
                                    required: "Upload Picture",
                                })}
                            />
                            <span style={{ color: "red" }}>
                                {errors.image?.message}
                            </span>
                        </Grid>

                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            onClick={() => setOpen(true)}
                            sx={{
                                backgroundColor: "#ab6832",
                            }}
                        >
                            {loading ? <CircularProgress /> : "Create Product"}
                        </Button>
                        {loading && <CircularProgress />}
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "22px",
                            // width: { xs: 250, sm: 350 },
                            maxWidth : '350px',
                            minHeight: "350px",
                            border: "2px solid white",
                            borderRadius: "15px",
                            backgroundColor: "#ab6832d4", 
                            backdropFilter: "blur(10px)", 
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                            p: 4,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                textAlign : 'center',
                                fontSize : {xs : 'calc(1rem + 1vw)',sm : '2rem'},
                                fontWeight : '600'

                            }}
                        >
                            Product Preview
                        </Typography>
                        {newImage ? (
                            <CardMedia
                                sx={{
                                    width: "90%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    borderRadius: "20px",
                                }}
                                component="img"
                                image={newImage}
                                alt="New Product Image Preview"
                            />
                        ) : (
                            ""
                        )}
                    </Box>
                </Box>
                s
            </Box>
        </>
    );
}
