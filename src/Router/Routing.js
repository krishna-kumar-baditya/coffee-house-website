import { BrowserRouter as Router ,Routes,Route, Navigate} from "react-router-dom"
import { Suspense, lazy } from "react";

import Header from "../ShareModule/Header/Header"
import Footer from "../ShareModule/Footer/Footer"

// import Registration from "../Components/Auth/Registration"
// import Login from "../Components/Auth/Login"
// import Home from "../Components/Home/Home"
// import Blog from "../Components/Blog/Blog"
// import About from "../Components/About/About"
// import Contact from "../Components/Contact/Contact"
// import BlogDetails from "../Components/BlogDetails/BlogDetails"
// import ShowProductList from "../Components/ShowProductList/ShowProductList"
// import CreateProduct from "../Components/CreateProduct/CreateProduct"
// import EditProduct from "../Components/EditProduct/EditProduct"
// import ProfileDetails from "../Components/ProfileDetails/ProfileDetails"
import { check_token } from "../Redux/authSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import Loader from "../ShareModule/Loader/Loader";

const Home = lazy(()=>import('../Components/Home/Home'))
const Blog = lazy(()=>import('../Components/Blog/Blog'))
const About = lazy(()=>import('../Components/About/About'))
const Contact = lazy(()=>import('../Components/Contact/Contact'))
const BlogDetails = lazy(()=>import('../Components/BlogDetails/BlogDetails'))
const ShowProductList = lazy(()=>import('../Components/ShowProductList/ShowProductList'))
const CreateProduct = lazy(()=>import('../Components/CreateProduct/CreateProduct'))
const EditProduct = lazy(()=>import('../Components/EditProduct/EditProduct'))
const ProfileDetails = lazy(()=>import('../Components/ProfileDetails/ProfileDetails'))
const Login = lazy(()=>import('../Components/Auth/Login'))
const Registration = lazy(()=>import('../Components/Auth/Registration'))

export default function Routing(){
    const dispatch = useDispatch();
    const PublicRouteNames = [
        {
            path : '/login',
            Component : <Login/>,
        },
        {
            path : '/registration',
            Component : <Registration/>,
        },
    ];
    const PrivateRouteNames = [
        {
            path : '/',
            Component : <Home/>
        },
        {
            path : '/blog',
            Component : <Blog/>
        },
        {
            path : '/blogdetails/:id',
            Component : <BlogDetails/>
        },
        {
            path : '/aboutus',
            Component : <About/>
        },
        {
            path : '/contactus',
            Component : <Contact/>
        },
        
        {
            path : '/createproduct',
            Component : <CreateProduct/>
        },
        {
            path : '/showproductlist',
            Component : <ShowProductList/>
        },
        {
            path : '/product/detail/:id',
            Component : <EditProduct/>
        },
        {
            path : '/user/profile-details',
            Component : <ProfileDetails/>
        },
    ]
    useEffect(()=>{
        dispatch(check_token())
    }, [])
    function PrivateRoute({children}){
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        return token !== null && token !== undefined ? (
            children
        ) : (
            <Navigate to='/login'></Navigate>
        )
    }
    return(
        <>
        <Router>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    {PublicRouteNames?.map((route,index)=>{
                        return(
                            <Route
                                key={index + 1}
                                exact
                                path={route.path}
                                element={route.Component}
                            />
                        )
                    })}
                    {PrivateRouteNames?.map((route,index)=>{
                        return(
                            <Route
                                key={index + 2}
                                path={route.path}
                                element={<PrivateRoute>{route.Component}</PrivateRoute>}
                            />
                        )
                    })}
                </Routes>

            </Suspense>
            <Footer/>
        </Router>
        {/* <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/blogdetails/:id" element={<BlogDetails/>}/>
                <Route path="/aboutus" element={<About/>} />
                <Route path="/contactus" element={<Contact/>} />

                <Route path="/registration" element={<Registration/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/createproduct" element={<CreateProduct/>} />
                <Route path="/showproductlist" element={<ShowProductList/>} />
                <Route path="/product/detail/:id" element={<EditProduct/>} />
                <Route path="/user/profile-details" element={<ProfileDetails/>} />
            </Routes>
            <Footer/>
        </Router> */}
        
        </>
    )
}