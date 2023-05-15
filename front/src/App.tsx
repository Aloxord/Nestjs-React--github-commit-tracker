import { useState, useEffect } from 'react'
import './App.css'
import { getCommits } from './api'

function App() {

   const [commits, setCommits] = useState([]); 
  
  useEffect(()=>{
    getCommits()
      .then(({ data }) => {
        setCommits(data.commitsList);
      })
  },[]);

  return (
    <div className='mx-auto h-full bg-gray-200 rounded-xl shadow border p-8 overflow-hidden'>
      <h1>GithubCommitTracker</h1>
      <ul className='h-3/5 p-6 m-6 mx-auto bg-white rounded-xl shadow-lg grid grid-cols-1 bg-gray-600 overflow-auto'>
        {
          commits
            .map(({author, message, url}) => (
              <li className='font-medium text-sky-500 dark:text-sky-400 m-4'>
                <a href={url}>Author: {author} <br /> Message: {message}</a>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default App
