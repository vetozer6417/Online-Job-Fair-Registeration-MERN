import React, { useState } from 'react'
import axios from 'axios'
import config from '../../config'
import MyAppointments from '../components/MyAppointments'
import AddAppointment from '../components/AddAppointment'
import UpdateAppointment from '../components/UpdateAppointment'

const AppointmentContainer = ({ setIsLoggedIn }) => {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
        await axios.get(config.api_path + '/api/v1/auth/logout', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(config.token_name)}`
          }
        })
        localStorage.removeItem(config.token_name)
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false)
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className='flex flex-col w-[80%] items-center justify-center'>
      <div className='grid grid-cols-12'>
          <MyAppointments/>
          {/* <AddAppointment/> */}
          <UpdateAppointment/>
          <div className='col-span-12 flex flex-col justify-center items-center h-full py-10'>
            <button 
              className='bg-blue-600 text-white font-regular w-[120px] rounded py-[3px] hover:cursor-pointer'
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
      </div>
    </div>
  )
}

export default AppointmentContainer