let adminUrl = 'https://wtsacademy.dedicateddevelopers.us/api/'

if (process.env?.REACT_APP_ENV === "production") {
    adminUrl = 'https://wtsacademy.dedicateddevelopers.us/api/'
}



export const baseURL = adminUrl

export const endpoint = {
    auth : {
        registration : 'user/signup',
        login : 'user/signin',
        profile : 'user/profile-details'
    },
    crud:{
        create : 'product/create',
        show : 'product/list',
        edit : 'product/detail',
        update : 'product/update',
        delete : 'product/remove',
    }
    
}