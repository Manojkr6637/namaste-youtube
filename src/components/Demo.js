import React, { useState } from 'react'

const Demo = () => {
  const [text, setText]=useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = () =>{
    console.log('Caculate Prime number of '+text)
  }
  return (
    <div
      className='m-4 p-2 h-96 border border-black'
    >
      <div>
        <input type='text' className='p-2 m-2 border border-black' 
        value={text}
        onChange={(e) =>{setText(e.target.value)}}

        />
      </div>      
    </div>
  )
}

export default Demo