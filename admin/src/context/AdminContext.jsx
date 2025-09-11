import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [technicians,setTechnicians] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllTechnicians = async () => {

        try {
            
            const {data} = await axios.post(backendUrl + '/api/admin/all-technicians', {}, {headers:{aToken}})
            if (data.success) {
                setTechnicians(data.technicians)
                console.log(data.technicians)

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    const changeAvailability = async (tecId) => {

        try {

            const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {tecId},{headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAllTechnicians()
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }

    // Context values
    const value = {
        aToken,setAToken,
        backendUrl,technicians,
        getAllTechnicians, changeAvailability,
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider