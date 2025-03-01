import {
    Box,
    Button,
    CardMedia,
    CircularProgress,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editproductData, updateproductData } from "../../Redux/crudSlice";
export default function EditProduct() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm();
    const { loading } = useSelector((state) => state.crudKey);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { editProductData } = useSelector((state) => state.crudKey);
    const [imagePreview, setImagePreview] = useState(null);

    const watchImage = watch("image");
    const newImage =
        watchImage && watchImage[0] ? URL.createObjectURL(watchImage[0]) : null;

    useEffect(() => {
        dispatch(editproductData(id));
    }, [id]);
    useEffect(() => {
        if (editProductData !== null) {
            setValue("title", editProductData?.title);
            setValue("description", editProductData?.description);
            setImagePreview(
                `https://wtsacademy.dedicateddevelopers.us/uploads/product/${editProductData?.image}`
            );
        }
    }, [editProductData, setValue]);

    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);

        if (data.image[0]) {
            formData.append("image", data.image[0]);
        }
        formData.append("id", id);
        dispatch(updateproductData(formData)).then(() =>
            setTimeout(() => navigate("/showproductlist"), 2000)
        );
    };
    const validateFile = (fileList) => {
        const allowedTypes = ["image/jpeg", "image/png"];
        const maxSize = 5 * 1024 * 1024;

        if (!fileList || fileList.length === 0) {
            return true;
        }

        const file = fileList[0];

        if (!allowedTypes.includes(file.type)) {
            return "Invalid file type. Only JPEG and PNG are allowed.";
        }

        if (file.size > maxSize) {
            return "File size exceeds the 5MB limit.";
        }

        return true;
    };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "rgba(111, 78, 55)",
                    width: "100%",
                    minHeight: "92vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "40px",
                        p: 2,
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            maxWidth: { xs: 250, sm: 400 },
                            border: "2px solid white",
                            p: 4.5,
                            borderRadius: "15px",
                            backgroundColor: "rgb(132 82 48 / 70%)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                            }}
                        >
                            Update Your Product List
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
                                placeholder="title"
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
                                placeholder="description"
                                multiline
                                rows={4}
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
                                Product Image
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
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "white",
                                        opacity: 1,
                                    },
                                }}
                                {...register("image", {
                                    validate: validateFile,
                                })}
                            />
                            {watch("image")?.length > 0 &&
                                errors.image?.message && (
                                    <span style={{ color: "red" }}>
                                        {errors.image.message}
                                    </span>
                                )}
                        </Grid>

                        <Button
                            sx={{
                                backgroundColor: "#ab6832",
                            }}
                            variant="contained"
                            type="submit"
                            fullWidth
                        >
                            {loading ? <CircularProgress /> : "Update"}
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: "16px",
                            maxWidth: { xs: 250, sm: 400 },
                            minHeight: "350px",
                            border: "2px solid white",
                            borderRadius: "15px",
                            backgroundColor: "rgb(132 82 48 / 70%)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                            p: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                                width: { xs: 200 },
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "white",
                                    textAlign: "center",
                                }}
                            >
                                Previous Image
                            </Typography>
                            {imagePreview ? (
                                <CardMedia
                                    component="img"
                                    image={imagePreview}
                                    alt="Existing Product Image"
                                    sx={{
                                        maxWidth: "200px",
                                        height: "200px",
                                        objectFit: "contain",
                                        borderRadius: "20px",
                                    }}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        maxWidth: "200px",
                                        height: "200px",
                                        bgcolor: "#f0f0f0",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    No Existing Image Available
                                </Box>
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                                width: { xs: 200 },
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ color: "white", textAlign: "center" }}
                            >
                                Current Image
                            </Typography>
                            {newImage ? (
                                <CardMedia
                                    sx={{
                                        width: "200px",
                                        height: "200px",
                                        objectFit: "cover",
                                        borderRadius: "20px",
                                    }}
                                    component="img"
                                    image={newImage}
                                    alt="New Product Image Preview"
                                />
                            ) : (
                                <Box
                                    sx={{
                                        width: "200px",
                                        height: "200px",
                                        bgcolor: "#f0f0f0",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    New Image Not Available
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
