import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Pagination,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productData, productDataRemove } from "../../Redux/crudSlice";
import { productImagePath } from "../../API/axiosInstance";
import Sweetalert from "../SweetAlert/SweetAlert";
import './ShowProductList.css'
export default function ShowProductList() {
    const dispatch = useDispatch();
    const { products, totalpage } = useSelector((state) => state.crudKey);

    useEffect(
        () => {
            dispatch(productData());
        },
        // eslint-disable-next-line
        []
    );

    const [delete_id, setDeleteId] = useState("");
    const [isDelete, setIsDelete] = useState(null);
    const delete_func = (id) => {
        if (delete_id !== "") {
            dispatch(productDataRemove(delete_id)).then(() => {
                dispatch(productData());
            });
        }
        setDeleteId("");
        setIsDelete(false);
    };

    const [totalrecord, setPage] = useState(1);
    const handlePagination = (item, pageno) => {
        setPage(pageno);
        dispatch(
            productData({
                page: pageno,
                perpage: 10,
            })
        );
    };
    // console.log(products.length);

    return (
        <>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(135deg, rgba(40,33,27,1) 20%, rgba(6,5,3,1) 60%, rgba(35,28,22,1) 100%)",
                    width: "100%",
                    minHeight: "92vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                }}
            >
                {products?.length ?
                (
                    <>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "white",
                            }}
                        >
                            Product List
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                p: { xs: 1 },
                                flexWrap: "wrap",
                                gap: { xs: "20px" },
                            }}
                        >
                            {products.map((item) => {
                                return (
                                    <>
                                        <Card
                                            sx={{
                                                maxWidth: { xs: 250, sm: 250 },
                                                minHeight: 500,
                                                p: 2,
                                                backgroundColor: "#1e1915",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                gap: { xs: "14px", sm: "7px" },
                                                borderRadius: "14px",
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    p: 0,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "10px",
                                                }}
                                            >
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        color: "#fff",
                                                    }}
                                                >
                                                    {item?.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: "#ddd",
                                                        width: "100%",
                                                        height: "150px",
                                                        overflowY: "auto",
                                                    }}
                                                >
                                                    {item?.description}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia
                                                src={
                                                    item?.image
                                                        ? productImagePath(
                                                              item?.image
                                                          )
                                                        : "error"
                                                }
                                                component="img"
                                                alt="product"
                                                sx={{
                                                    objectFit: "cover",
                                                    width: { xs: 250, sm: 250 },
                                                    height: {
                                                        xs: 250,
                                                        sm: 250,
                                                    },
                                                    objectPosition:
                                                        "center center",
                                                    borderRadius: "14px",
                                                }}
                                            />
                                            <CardActions
                                                sx={{
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                <Link
                                                    to={`/product/detail/${item?._id}`}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            px: 4,
                                                            backgroundColor:
                                                                "transparent",
                                                            color: "white",
                                                            border: "3px solid #c6a890",
                                                        }}
                                                    >
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <Link
                                                    to=""
                                                    onClick={() => {
                                                        setDeleteId(
                                                            `${item?._id}`
                                                        );
                                                        setIsDelete(true);
                                                    }}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            px: 4,
                                                            backgroundColor:
                                                                "transparent",
                                                            color: "white",
                                                            border: "3px solid #c6a890",
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </>
                                );
                            })}
                            {isDelete && (
                                <Sweetalert
                                    confirm={delete_func}
                                    cancel={() => setIsDelete(false)}
                                    title={"Are you sure want to delete"}
                                    subtitle={"You will be not able to recover"}
                                />
                            )}
                        </Box>
                        <Box className="paginatio_wrapper">
                            <Pagination
                            className="pagination"
                                count={totalpage}
                                onChange={handlePagination}
                                totalRecords={totalrecord}
                            />
                        </Box>
                    </>
                ) : (
                    <Typography
                        variant="h3"
                        sx={{
                            color: "white",
                        }}
                    >
                        No Customs Products Available
                    </Typography>
                )}
            </Box>
        </>
    );
}
