import React from 'react'
import Companies from '../components/Companies'
import Login from '../components/Login'

const HomeContainer = ({ setIsLoggedIn }) => {
  return (
    <div className='grid grid-cols-12 w-[80%]'>
        <Companies />
        <Login setIsLoggedIn={setIsLoggedIn}/>

    </div>
  )
}

export default HomeContainer