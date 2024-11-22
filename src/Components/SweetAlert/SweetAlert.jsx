import SweetAlert from "react-bootstrap-sweetalert"
import  './SweetAlert.css'
import { Box } from "@mui/material"
export default function Sweetalert({confirm,cancel,title,subtitle,type}){
    return(
        <Box className = 'sweetalert'>

        <SweetAlert 
            style = {{zIndex : 1}}
            title = {title}
            onConfirm = {confirm}
            type = {type !== undefined ? type : "danger"}
            showCancel = {true}
            confirmBtnStyle = {{backgroundColor : "#ab6832"}}
            onCancel = {cancel}
        >
            <h5>{subtitle}</h5>
        </SweetAlert>
        </Box>
    )
}