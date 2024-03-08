import React from 'react'

const UpdateAppointment = () => {
  return (
    <div className='col-start-9 col-span-4 flex flex-col justify-center items-center h-full'>
        <h2 className='text-2xl font-semibold mb-5'>Update An Appointment</h2>
        <div className='w-full bg-white px-5 py-3 border-2 rounded-lg shadow-lg'>
            <form className='flex flex-col content-center'>
                <label htmlFor="countries" className="block mb-2 text-gray-700 text-sm font-semibold dark:text-white">Company</label>
                <select id="countries" className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-600">
                    {/* There should be default value */}
                </select>

                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="tel">Appointment Date</label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" id="date" type="date"/>
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="tel">Created At</label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" id="date" type="date"/>
                </div>

                <button type='submit' className='bg-blue-600 text-white font-regular w-full rounded py-[3px]'>
                    Confirm
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateAppointment