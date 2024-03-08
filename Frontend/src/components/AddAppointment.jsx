import React from 'react'

const AddAppointment = () => {
    const options = []
    for(let i = 1 ; i <= 10 ; i++) {
        options.push(<option key={i}>Company {i}</option>)
    }
  return (
    <div className='col-start-9 col-span-4 flex flex-col justify-center items-center h-full'>
        <h2 className='text-2xl font-semibold mb-5'>Add New Appointment</h2>
        <div className='w-full bg-white px-5 py-3 border-2 rounded-lg shadow-lg'>
            <form className='flex flex-col content-center'>
                <label for="countries" class="block mb-2 text-gray-700 text-sm font-semibold dark:text-white">Company</label>
                <select id="countries" class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-600">
                    {options}
                </select>

                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="tel">Date</label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" id="date" type="date"/>
                </div>

                <button type='submit' className='bg-blue-600 text-white font-regular w-full rounded py-[3px]' onSubmit=''>
                    Confirm
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddAppointment