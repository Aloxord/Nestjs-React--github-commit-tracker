import { useState, useEffect } from 'react'
import './App.css'
import { getCommits } from './api'

function App() {
  
  useEffect(()=>{
    getCommits()
      .then(data => {
        console.log(data);
      })
  },[]);

  return (
    <>
      
    </>
  )
}

export default App
