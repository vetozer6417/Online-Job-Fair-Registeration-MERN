import React, { useState, useRef } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import config from '../../config'

const Login = ({ setIsLoggedIn }) => {
    const [isRegistering, setIsRegistering] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telephone, setTelephone] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    

    const handleRegisterButton = () => {
        setIsRegistering(!isRegistering);
        setEmail('')
        setPassword('')
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                name: name,
                tel: telephone,
                email: email,
                password: password,
                role: role
            }
            console.log('Payload:', payload)

            await axios.post(config.api_path + '/api/v1/auth/register', payload).then(res => {
                if(res.data.success) {
                    Swal.fire({
                        title: 'Successfully registered',
                        text: 'You have been registered',
                        icon: 'success',
                        timer: 3000
                        })
                } else {
                    Swal.fire({
                        title: 'Failed to register',
                        text: res.data.msg,
                        icon: 'error',
                        timer: 3000
                    })
                }
            })
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while registering',
                icon: 'error',
                timer: 3000
            });
            console.error(error);
        }
        setEmail('')
        setPassword('')
        setName('')
        setTelephone('')
        setRole('')
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const payload = {
              email: email,
              password: password
            };
            console.log('Payload:', payload)
            await axios.post(config.api_path + '/api/v1/auth/login', payload).then(res =>{
                if (res.data.success) {
                    Swal.fire({
                      title: 'Logged In!',
                      text: 'You have been signed in',
                      icon: 'success',
                      timer: 2000
                    });
                    localStorage.setItem(config.token_name, res.data.token);
                    localStorage.setItem('isLoggedIn', 'true');
                    setIsLoggedIn(true);
                  } else {
                    Swal.fire({
                      title: 'Failed to sign in',
                      text: res.data.msg || 'Email or password is incorrect',
                      icon: 'error',
                      timer: 2000
                    });
                  }
            })
          } catch (error) {
            Swal.fire({
              title: 'Error',
              text: 'An error occurred while logging in',
              icon: 'error',
              timer: 2000
            });
            console.error(error);
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div className='col-start-9 col-span-4 flex flex-col justify-center items-center h-full'>
            <h2 className='text-2xl font-semibold mb-5'>{isRegistering ? 'Register' : 'Login'}</h2>
            <div className='w-full bg-white px-5 py-3 border-2 rounded-lg shadow-lg'>
               { isRegistering ? (
                    <>
                        <form className='flex flex-col content-center' onSubmit={handleRegister}>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Name</label>
                                <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" 
                                    id="name" 
                                    value={name}
                                    type="text" 
                                    placeholder="Name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="tel">Telephone</label>
                                <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" 
                                    id="tel" 
                                    type="text" 
                                    placeholder="Telephone Number"
                                    value={telephone}
                                    onChange={e => setTelephone(e.target.value)}
                                />
                            </div>

                            <div className='mb-2'>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                                <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" 
                                    id="email" 
                                    type="email" 
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label> 
                                <input className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-600" 
                                    id="password" 
                                    type="password" 
                                    value={password}
                                    placeholder="Password"
                                    onChange={e => 
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <select className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-600"
                                id="role"
                                type="text"
                                value={role}
                                onChange={e => {
                                    console.log('Selected value:', e.target.value)
                                    setRole(e.target.value)
                                }}
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>

                            <button type='submit' className='bg-blue-600 text-white font-regular w-full rounded py-[3px] hover:cursor-pointer'>
                                Register
                            </button>
                            <button className='text-zinc-500 text-sm mt-2 hover:underline' onClick={handleRegisterButton}>Already have an account?</button>
                        </form>
                    </>
               ) : (
                    <>
                         <form className='flex flex-col content-center' onSubmit={handleLogin}>
                            <div className='mb-2'>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                                <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" 
                                    id="email" 
                                    type="email" 
                                    placeholder="Email Address"
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label> 
                                <input className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-600" 
                                    id="password" 
                                    type="password" 
                                    placeholder="Password"
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button type='submit' className='bg-blue-600 text-white font-regular w-full rounded py-[3px]'>
                                Login
                            </button>
                            <button className='text-zinc-500 text-sm mt-2 hover:underline' onClick={(event) => handleRegisterButton(event)}>Register a new account?</button>
                        </form>
                    </>
               )
               }
            </div>
        </div>
    )
}

export default Login