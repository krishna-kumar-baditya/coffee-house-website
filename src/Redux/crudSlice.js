import { endpoint } from "../API/endpoint";
import axiosInstance from "../API/axiosInstance";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    loading : null,
    upload_status : '',
    products : [{}],
    totalpage : '',
    editProductData : [{}],
}

export const createProduct = createAsyncThunk(
    'createproduct',
    async(formData)=>{
        let res = await axiosInstance.post(endpoint.crud.create,formData)
        let resData = res?.data
        return resData
    }
)
export const productData = createAsyncThunk(
    'productdata',
    async(formData)=>{
        let res = await axiosInstance.post(endpoint.crud.show,formData)
        let resData = res?.data
        return resData
    }
)
export const editproductData = createAsyncThunk(
    'editproductdata',
    async(id)=>{
        let editEndPoint = endpoint.crud.edit
        let res = await axiosInstance.get(`${editEndPoint}/${id}`)
        let resData = res?.data
        return resData
    }
)
export const updateproductData = createAsyncThunk(
    'updateproductData',
    async(formData)=>{
        let res = await axiosInstance.post(endpoint.crud.update,formData)
        let resData = await res?.data
        return resData
    }
)
export const productDataRemove = createAsyncThunk(
    'removeproduct',
    async(id)=>{
        let res = await axiosInstance.post(endpoint.crud.delete,{id})
        let resData = res?.data
        return resData
    }
)
export const crudSlice = createSlice({
    name : 'crud',
    initialState,
    extraReducers : (builder)=>{
        builder
        .addCase(createProduct.pending,(state,{payload})=>{
            state.loading = true
            state.upload_status = 'product yet not created'
        })
        .addCase(createProduct.fulfilled,(state,{payload})=>{
            if(payload.status === 200){
                state.loading = false
                state.upload_status = 'product added successfully'
                toast.success('Product Created Successfull')

            }
        })
        .addCase(createProduct.rejected,(state,{payload})=>{
            state.loading = false
            state.upload_status = 'product failed to add'
        })
        .addCase(productData.pending,(state,{payload})=>{
            state.loading = true
            state.upload_status = 'product list not yet fetched'
        })
        .addCase(productData.fulfilled,(state,{payload})=>{
            if(payload.status === 200){
                state.loading = false
                state.upload_status = 'product list fetched'
                state.products = payload?.data
                state.totalpage = payload?.totalPages

            }
        })
        .addCase(productData.rejected,(state,{payload})=>{
            state.loading = false
            state.upload_status = 'product list failed to fetched'

        })
        .addCase(editproductData.pending, (state, { payload }) => {
            state.upload_status = "editproductData not yet fetched";
        })
        .addCase(editproductData.fulfilled, (state, { payload }) => {
            state.upload_status = "editproductData fetched successfully";
            console.log("payload", payload.data);
            state.editProductData = payload?.data

        })
        .addCase(editproductData.rejected, (state, { payload }) => {
            state.upload_status = "editproductData fetched rejected";
        })
        .addCase(updateproductData.pending,(state,{payload})=>{
            state.loading = true
            state.upload_status = 'updateproductData is not done'
        })
        .addCase(updateproductData.fulfilled,(state,{payload})=>{
            if(payload.status === 200){
                state.loading = false
                state.upload_status = 'updateproductData is  done'
                toast.success('Update Data Successfully')
            }
        })
        .addCase(updateproductData.rejected,(state,{payload})=>{
            state.loading = false
            state.upload_status = 'updateproductData is rejected'
        })
        .addCase(productDataRemove.pending,(state,{payload})=>{
            state.loading = true
            state.upload_status = 'product not remove yet'
        })
        .addCase(productDataRemove.fulfilled,(state,{payload})=>{
            if(payload.status === 200){
                state.loading = false
                state.upload_status = 'product is removed'
                toast.success('Product Remove Succesfully')
            }
        })
        .addCase(productDataRemove.rejected,(state,{payload})=>{
            state.loading = false
            state.upload_status = 'product is failed to remove'
        })
    }
})