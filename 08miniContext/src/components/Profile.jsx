import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext) // get the current logged in
  
  if(user == null) return <h1>not loggedin</h1>
  
  return (
    <div>
        <h1>Profile: {user.username}</h1>
    </div>
  )
}

export default Profile