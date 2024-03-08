import React from 'react'

const Companies = () => {
  return (
    <div className='col-start-1 col-span-6 flex flex-col justify-center items-center h-full'>
      <h2 className='text-2xl font-semibold mb-5'>Companies Available</h2>
      <div className='w-full max-h-[550px] overflow-y-scroll bg-white px-5 py-3 border-2 rounded-lg shadow-lg'>
        <ul>
          <li className='border-b-2 py-2'>
            <h3 className='text-xl text-blue-600 font-medium'>Company 1</h3>
            <p className='mb-1 text-zinc-500'>Place at the heart of Bangkok</p>
            <p className='mb-1 text-zinc-500'>2 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500</p>
            <a href='https://www.silomedge.com' target="_blank" className='mb-1 text-zinc-500 hover:underline'>Website</a>
            <p className='text-zinc-500'>053-722-782</p>
          </li>
          <li className='border-b-2 py-2'>
            <h3 className='text-xl text-blue-600 font-medium'>Company 2</h3>
            <p className='mb-1 text-zinc-500'>Place at the heart of Bangkok</p>
            <p className='mb-1 text-zinc-500'>2 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500</p>
            <a href='https://www.silomedge.com' target="_blank" className='mb-1 text-zinc-500 hover:underline'>Website</a>
            <p className='text-zinc-500'>053-722-782</p>
          </li>
          <li className='border-b-2 py-2-2'>
            <h3 className='text-xl text-blue-600 font-medium'>Company 3</h3>
            <p className='mb-1 text-zinc-500'>Place at the heart of Bangkok</p>
            <p className='mb-1 text-zinc-500'>2 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500</p>
            <a href='https://www.silomedge.com' target="_blank" className='mb-1 text-zinc-500 hover:underline'>Website</a>
            <p className='text-zinc-500'>053-722-782</p>
          </li>
          <li className='border-b-2 py-2'>
            <h3 className='text-xl text-blue-600 font-medium'>Company 4</h3>
            <p className='mb-1 text-zinc-500'>Place at the heart of Bangkok</p>
            <p className='mb-1 text-zinc-500'>2 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500</p>
            <a href='https://www.silomedge.com' target="_blank" className='mb-1 text-zinc-500 hover:underline'>Website</a>
            <p className='text-zinc-500'>053-722-782</p>
          </li>
          <li className='border-b-2 py-2'>
            <h3 className='text-xl text-blue-600 font-medium'>Company 5</h3>
            <p className='mb-1 text-zinc-500'>Place at the heart of Bangkok</p>
            <p className='mb-1 text-zinc-500'>2 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500</p>
            <a href='https://www.silomedge.com' target="_blank" className='mb-1 text-zinc-500 hover:underline'>Website</a>            <p className='text-zinc-500'>053-722-782</p>
            <p className='text-zinc-500'>053-722-782</p>          
          </li>
          <li className='py-2'>
            <h3 className='text-xl text-blue-600 font-medium'>Company 6</h3>
            <p className='mb-1 text-zinc-500'>Place at the heart of Bangkok</p>
            <p className='mb-1 text-zinc-500'>2 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500</p>
            <a href='https://www.silomedge.com' target="_blank" className='mb-1 text-zinc-500 hover:underline'>Website</a>
            <p className='text-zinc-500'>053-722-782</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Companies