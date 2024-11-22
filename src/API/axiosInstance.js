import axios from "axios";
import { baseURL } from "./endpoint";

let productImageUrl = "https://wtsacademy.dedicateddevelopers.us/uploads/product"
let profileImageUrl = "https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic"


const axiosInstance = axios.create({
    baseURL,
})

export const productImagePath = (media)=>{
    return productImageUrl + `/${media}`
}
export const profileImagePath = (media)=>{
    return profileImageUrl + `/${media}`
}

axiosInstance.interceptors.request.use(
    async function (config) {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        if(token !== null && token !== undefined && token !== ''){
            config.headers['x-access-token'] = token
        }        
        return config
    },
    function (err){
        return Promise.reject(err)
    }
)

export default axiosInstance