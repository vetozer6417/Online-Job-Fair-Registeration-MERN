import { useEffect, useState } from 'react'
import './App.css'
import HomeContainer from './container/HomeContainer'
import Header from './container/Header'
import AppointmentContainer from './container/AppointmentContainer'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if(isLoggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Header/>
      {isLoggedIn ? <AppointmentContainer setIsLoggedIn={setIsLoggedIn}/> : <HomeContainer setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

export default App
