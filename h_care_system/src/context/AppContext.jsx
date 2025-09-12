import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = 'Rs'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [technicians,setTechnicians] = useState([])
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData,setUserData] = useState(false)
   

    // call the technician api
    const getTechniciansData = async () => {

        try {

            const {data} = await axios.get(backendUrl + '/api/technician/list')
            if (data.success) {
                setTechnicians(data.technicians)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Load user Profile
    const loadUserProfileData = async () => {
        try {

            const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


     const value = {
        technicians,getTechniciansData,
        currencySymbol,
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData
    }

   
    useEffect(()=>{

        getTechniciansData()
    },[])

    useEffect(()=>{
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    },[token])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;