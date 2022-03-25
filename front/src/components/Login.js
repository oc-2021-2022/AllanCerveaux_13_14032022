import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../app/authSlice'
import Field from './Field'


export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const {from = { pathname: '/' }} = location
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    await dispatch(loginUser(credentials))
    
    navigate(from, { replace: true })
  }

  const handleStateChange = (event) => {
    const { name, value } = event.target
    setCredentials({...credentials, [name]: value})
  } 

  return (
    <form onSubmit={handleSubmit}>
      <Field type={'email'} id={'email'} name={'email'} label={'email'} value={'tony@stark.com'} handleChange={handleStateChange}/>
      <Field type={'password'} id={'password'} name={'password'} label={'password'} value={'password123'} handleChange={handleStateChange}/>
      <Field type={'submit'} id={'signIn'} value={'Sign In'} />
    </form>
  )
}


