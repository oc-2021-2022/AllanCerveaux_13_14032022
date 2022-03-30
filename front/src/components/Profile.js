import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../app/authSlice'

export default function Profile() {
  const [ user, setUser ] = useState(false)
  const { loggedInUser } = useSelector(selectAuth)

  useEffect(() => {
    setUser(loggedInUser)
  }, [loggedInUser])
  
  return (
    <div className='header'>
      <h1>Welcome back <br /> { user?.firstName || '' } { user?.lastName || '' }!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}
