import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const ButtonList = ['All', 'Gaming', 'Songs', 'Live', 'Valentine',
'India', 'Criket','Playing','Happy','Mobile'];
  return (
    <div className='flex'>
    {ButtonList.map((item)=> <Button name={item}/>)}    
    </div>
  )
}

export default ButtonList