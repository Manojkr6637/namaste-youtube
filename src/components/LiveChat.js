import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomMessage, getRandomName } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessage=useSelector((store)=>store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("== setInterval");
      dispatch(addMessage({
        name: getRandomName(),
        message: getRandomMessage()
      }))
    }, 2000);
     return () => { clearInterval(i)}
  }, []);
  return (
    <>
    <div className='ml-2 w-full h-[350px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {chatMessage.map((item, index)=>(
        <ChatMessage name={item.name} message={item.message}/>) )    }
      
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Manoj",
        message:liveMessage,
      }))
    }}>
         <input type='text' className='w-80' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
         <button className='px-2 mx-2 bg-green-600 text-white' >Send</button>
     </form>
     </>
  )
}

export default LiveChat