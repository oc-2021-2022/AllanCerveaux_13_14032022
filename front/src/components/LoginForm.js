import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../app/authSlice'
import Field from './Field'


export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const {from = { pathname: '/' }} = location
  
  const [credentials, setCredentials] = useState({
    email: 'tony@stark.com',
    password: 'password123',
    rememberMe: false
  })
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    await dispatch(loginUser(credentials))
    
    // navigate(from, { replace: true })
  }

  const handleStateChange = (event) => {
    const { type, name, value, checked } = event.target

    setCredentials({ ...credentials, [name]: type === 'checkbox' ? checked : value })
  } 

  return (
    <form onSubmit={handleSubmit}>
      <Field type={'email'} id={'email'} name={'email'} label={'Email'} value={credentials.email} handleChange={handleStateChange}/>
      <Field type={'password'} id={'password'} name={'password'} label={'Password'} value={credentials.password} handleChange={handleStateChange}/>
      <Field type={'checkbox'} id={'remember-me'} label={'Remember me'} name={'rememberMe'} value={credentials.rememberMe} handleChange={handleStateChange}/>
      <Field type={'submit'} id={'signIn'} value={'Sign In'} />
    </form>
  )
}


