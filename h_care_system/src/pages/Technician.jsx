import React, { useContext, useState } from 'react';  // Added useContext import
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';

const Technician = () => {

  const {speciality} = useParams()
  const [filterTechn,setFilterTechn] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {technicians} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality) {
      setFilterTechn(technicians.filter(techn => techn.speciality === speciality))
    } else {
      setFilterTechn(technicians)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[technicians,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Technicians Speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-500 text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>

        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'Desktop' ? navigate('/technician') : navigate('/technicians/Desktop')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Desktop" ? "bg-indigo-200 text-black" : ""}`}>Desktop</p>
          <p onClick={()=> speciality === 'Laptops' ? navigate('/technician') : navigate('/technicians/Laptops')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Laptops" ? "bg-indigo-200 text-black" : ""}`}>Laptops</p>
          <p onClick={()=> speciality === 'Printers' ? navigate('/technician') : navigate('/technicians/Printers')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Printers" ? "bg-indigo-200 text-black" : ""}`}>Printers</p>
          <p onClick={()=> speciality === 'CCTV_Cammeras' ? navigate('/technician') : navigate('/technicians/CCTV_Cammeras')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "CCTV_Cammeras" ? "bg-indigo-200 text-black" : ""}`}>CCTV_Cammeras</p>
          <p onClick={()=> speciality === 'Software_system' ? navigate('/technician') : navigate('/technicians/Software_system')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Software_system" ? "bg-indigo-200 text-black" : ""}`}>Software_Systems</p>
        </div>

      </div>

      <div className='w-full grid grid-cols-auto gap-4 gap-y-6' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {
          filterTechn.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Technician;