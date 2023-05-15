import { useState, useEffect } from 'react'
import './App.css'
import { getCommits } from './api'

function App() {

   const [commits, setCommits] = useState([]); 
  
  useEffect(()=>{
    getCommits()
      .then(({ data }) => {
        const { commitsList } = data;

        setCommits(commitsList);
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

      <div className='h-auto  p-2 mx-auto bg-white rounded-xl shadow-lg grid grid-cols-2 bg-gray-600'>
          <div className='center'>
            <h3 className='text-lg'>Methods worked in Backend:</h3>
            <ol className='m-4'>
            <li className='m-2'>getCommits()</li>
            <li className='m-2'>requestCommits()</li>
            <li className='m-2'>mapCommits()</li>
            </ol>
          </div>
          <div>
            <h3 className='text-lg'>Technologies used:</h3>
            <ol className='m-4 grid grid-cols-2'>
              <li className='m-2'>Nestjs</li>
              <li className='m-2'>Axios</li>
              <li className='m-2'>Octokit</li>
              <li className='m-2'>React</li>
              <li className='m-2'>TailwindCss</li>
              <li className='m-2'>Vite</li>
            </ol>
          </div>
      </div>
    </div>
  )
}

export default App
