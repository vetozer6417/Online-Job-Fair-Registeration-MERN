import React from 'react'
import { FaEdit } from "react-icons/fa";

const MyAppointments = () => {
  return (
    <div className='col-start-1 col-span-6 flex flex-col justify-center items-center h-full'>
        <h2 className='text-2xl font-semibold mb-5'>Your Appointments</h2>
        <div className='w-full max-h-[550px] overflow-y-scroll bg-white px-5 py-3 border-2 rounded-lg shadow-lg'>
            <ul>
                <li className='border-b-2 py-2 flex flex-row items-center'>
                    <div className='flex-1'>
                        <h3 className='text-xl text-blue-600 font-medium'>Company 1</h3>
                        <p className='my-1 text-zinc-500'>Appointment Date: 11/10/2024</p>
                    </div>
                    <FaEdit className='text-zinc-400 text-xl ml-auto mr-5'/>
                </li>
                <li className='border-b-2 py-2 flex flex-row items-center'>
                    <div className='flex-1'>
                        <h3 className='text-xl text-blue-600 font-medium'>Company 2</h3>
                        <p className='my-1 text-zinc-500'>Appointment Date: 11/10/2024</p>
                    </div>
                    <FaEdit className='text-zinc-400 text-xl ml-auto mr-5'/>
                </li>
                <li className='py-2 flex flex-row items-center'>
                    <div className='flex-1'>
                        <h3 className='text-xl text-blue-600 font-medium'>Company 3</h3>
                        <p className='my-1 text-zinc-500'>Appointment Date: 11/10/2024</p>
                    </div>
                    <FaEdit className='text-zinc-400 text-xl ml-auto mr-5'/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MyAppointments