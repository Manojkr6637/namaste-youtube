import React from 'react'

const Sidebar = () => {
  return (
    <div className='shadow-lg  p-5 w-48'>
       <ul>
        <li>Home</li>
        <li>Sports</li>
        <li>Live</li>
        <li>Premium</li>
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
     </div>
  )
}

export default Sidebar