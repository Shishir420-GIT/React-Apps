import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className=' bg-orange-500 text-black'>
        User: {userId}
    </div>
  )
}

export default User