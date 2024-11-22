// import { useState } from "react"
import { Box } from '@mui/material'
import HashLoader from 'react-spinners/HashLoader'
import './Loader.css'
export default function Loader(){
    // let [loading, setLoading] = useState(true);

    return(
        <>
        <Box className='loader'>

            <HashLoader
            color={'#7a7070'}
            loading={true}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </Box>
        </>
    )
}