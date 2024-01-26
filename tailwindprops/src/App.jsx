import { useState } from 'react'
import './App.css'
import Card from '../component/card'

function App() {
  return (
    <>
    <h1 className='text-2xl bg-green-500 p-3 rounded-md'>
      This is my card page</h1>
    <Card 
    username='Shishir' 
    role='Developer' 
    imagesrc='../images/myImage.png'
    description= 'Mera joota hai japani, yeh patloon englishtani, sir pe laal topi roosi fir bhi dil hai hindustani, La la, lalla laa laa!'
    />
    <Card />
    <Card />
    </>
  )
}

export default App
