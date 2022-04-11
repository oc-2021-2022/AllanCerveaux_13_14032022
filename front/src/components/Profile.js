import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuth, updateUser } from '../app/authSlice'
import Field from './Field'

export default function Profile() {
  const {currentUser} = useSelector(selectAuth)
  const [edit, setEdit] = useState(false)
  const startEdit = () => setEdit(!edit)

  return (
    <div className='header'>
      <h1>Welcome back</h1>
      {
        !edit ? (
          <>
            <h2>{currentUser?.firstName || ''} {currentUser?.lastName || ''}!</h2>
            <button className="edit-button" onClick={startEdit}>Edit Name</button>
          </>
        ) : (
            <ProfileForm
              user={{
                firstName: currentUser?.firstName,
                lastName: currentUser?.lastName
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
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Field type={'text'} id={'firstName'} name={'firstName'} value={profile.firstName} handleChange={handleStateChange}/>
        <Field type={'text'} id={'lastName'} name={'lastName'} value={profile.lastName} handleChange={handleStateChange} />
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Field type={'submit'} id={'submit'} value='Envoyer' />
        <Field type={'submit'} id={'submit'} value='Annuler' onClick={updateEdit} />
      </div>
    </form>
  )
}
