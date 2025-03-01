import { endpoint } from "../API/endpoint";
import axiosInstance from "../API/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    upload_status: "",
    loading: null,
    isLogin: false,
    isRegister: false,
    redirectLogin: null,
    redirectHome: null,
    profileData : []
};

export const registration = createAsyncThunk(
    "registration",
    async (formData) => {
        let res = await axiosInstance.post(
            endpoint.auth.registration,
            formData
        );
        let resData = await res?.data;
        return resData;
    }
);
export const login = createAsyncThunk("login", async (formData) => {
    let res = await axiosInstance.post(endpoint.auth.login, formData);
    let resData = await res?.data;
    return resData;
});
export const profiledetails = createAsyncThunk("profiledetails", async () => {
    let res = await axiosInstance.get(endpoint.auth.profile );
    let resData = await res?.data;
    return resData;
});

export const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        check_token : (state,{payload})=>{
            let token = localStorage.getItem('token')
            if(token !== null || token !== undefined){
                state.isLogin = true
            }
            console.log('isLogin in check token',state.isLogin);
            
        },
        handleLogout: (state, {payload}) => {
            state.isLogin = false;
            localStorage.removeItem("LoginName");
            localStorage.removeItem("token");
            localStorage.removeItem("RegistrationName");
            localStorage.removeItem('profileImage')
            toast.success('Logout Successfully')
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state, { payload }) => {
                state.upload_status = "registration data yet not load";
                state.loading = true;
                state.isRegister = false;
            })
            .addCase(registration.fulfilled, (state, { payload }) => {
                if (payload.status === 200) {
                    state.upload_status = "registration successfull";
                    state.loading = false;
                    state.isRegister = true;
                    state.redirectLogin = "/login";
                    localStorage.setItem(
                        "registrationname",
                        payload?.data.first_name
                    );
                    localStorage.setItem(
                        "registrationemail",
                        payload?.data.email
                    );
                    toast.success('Registration Successfull')
                }
                else if(payload.status !== 200){
                    toast.error('Check Credentials')
                }
            })
            .addCase(registration.rejected, (state, { payload }) => {
                state.upload_status = "registration is failed";
                state.loading = false;
                state.isRegister = false;
                toast.error('Registration Failed')
            })
            .addCase(login.pending, (state, { payload }) => {
                    state.upload_status = "login yet not done";
                    state.isLogin = false;
                    state.loading = true;
                    console.log("login loading pending", state.loading);
                    
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                if (payload.status === 200) {
                    state.upload_status = "login successfull";
                    localStorage.setItem(
                        "LoginName",
                        payload?.data.first_name
                    );
                    localStorage.setItem("token", payload?.token);
                    localStorage.setItem('profileImage',payload?.data.profile_pic)
                    state.redirectHome = "/";
                    state.isLogin = true;
                    state.loading = false;
                    console.log("login loading fullfilled", state.loading);
                    toast.success('Login Successfull')
                }
                else if(payload.status === 201){
                    toast.error('Invalid Credentials')
                    state.loading = false;
                }

            })
            .addCase(login.rejected, (state, { payload }) => {
                state.upload_status = "login is failed";
                state.isLogin = false;
                state.loading = false;
                console.log("login loading rejected", state.loading);
                toast.error('Login Failed')

            })
            .addCase(profiledetails.pending,(state,{payload})=>{
                state.upload_status = 'profile data not yet load'
            })
            .addCase(profiledetails.fulfilled,(state,{payload})=>{
                state.upload_status = 'profile data successfully load'
                state.profileData = payload?.data
            })
            .addCase(profiledetails.rejected,(state,{payload})=>{
                state.upload_status = 'profile data failed load'
            })
    },
});
export const {handleLogout,check_token} = authSlice.actions