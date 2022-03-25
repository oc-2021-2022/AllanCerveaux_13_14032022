import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../app/authSlice'
import Field from './Field'


export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = ({preventDefault, target}) => {
    preventDefault()
    const credentials = {
      email: '',
      password: ''
    }
    const data = new FormData(target)
    data.forEach((value, name) => credentials[name] = value)
    dispatch(loginUser(credentials))
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
    >
      <Field type={'email'} id={'email'} name={'email'} label={'email'} value={'tony@stark.com'}/>
      <Field type={'password'} id={'password'} name={'password'} label={'password'} value={'password123'}/>
      <Field type={'submit'} id={'signIn'} value={'Sign In'} />
    </form>
  )
}


