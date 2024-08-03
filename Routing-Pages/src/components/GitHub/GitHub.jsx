import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub followers : {data.followers}
      <img src={data.avatar_url} widht={150} alt="Profile pic" />
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/Shishir420-GIT')
  return response.json()
}