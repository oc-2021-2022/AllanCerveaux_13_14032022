import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../app/authSlice'
import { AuthenticationContext } from '../providers/Authentication'
import Field from './Field'

export default function Profile() {
  const [user] = useContext(AuthenticationContext)
  const [edit, setEdit] = useState(false)
  const startEdit = () => setEdit(!edit)
  
  return (
    <div className='header'>
      <h1>Welcome back</h1>
      {
        !edit ? (
          <>
            <h2>{user?.firstName || ''} {user?.lastName || ''}!</h2>
            <button className="edit-button" onClick={startEdit}>Edit Name</button>
          </>
        ) : (
            <ProfileForm
              user={{
                firstName: user?.firstName,
                lastName: user?.lastName
              }}
              updateEdit={startEdit}
            />
        )
      }
    </div>
  )
}


function ProfileForm({user, updateEdit}) {
  const [profile, setProfile] = useState({ ...user })
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    await dispatch(updateUser(profile))
    updateEdit()
  }

  const handleStateChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setProfile({...profile, [name]: value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <Field type={'text'} id={'firstName'} name={'firstName'} value={profile.firstName} handleChange={handleStateChange}/>
      <Field type={'text'} id={'lastName'} name={'lastName'} value={profile.lastName} handleChange={handleStateChange} />
      <Field type={'submit'} id={'submit'} value={'Envoyer'}/>
    </form>
  )
}
