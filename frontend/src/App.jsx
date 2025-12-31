import React from 'react'
import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import {motion} from "framer-motion"
import MessageBubble from './Message'
import axios from "axios"

 //className="prose prose-invert"
/*  .prose h1, .prose h2 {
  display: flex;
  gap: 0.5rem;
}
 */

const App = () => {
  const [inputMess,setInputMess]=useState("")
  const [message,setMessage]=useState([])

  const inputHandeler=async()=>{
if(!inputMess) return // if its empty return nothing

const userMess={
  id:crypto.randomUUID(),
  role:"user",
  text:inputMess
}
const updateMessage=[...message,userMess]
setMessage(updateMessage)
const { data } = await axios.post(
  "http://localhost:8000/api/send",
  {
    userId: "jai",
    content: updateMessage[updateMessage.length - 1].text
  }
);

console.log(data)
const AimMess={
  id:crypto.randomUUID(),
  role:"ai",
  text:String(data.reply)
}


setMessage((prev)=>[
...prev,AimMess
])



      setInputMess("")
    }
  return (
    
    <div className='bg-gradient-to-tr from-[#CD3E65] to-[#3D2546] min-h-screen flex justify-center items-center'>
  
  {/*    chatsection */}
     <div className='bg-white rounded-lg h-[500px] w-[450px] overflow-hidden flex flex-col'>

{/*      chat header */}
      <div className='bg-[#972182] text-center py-3 text-white '>
        <h1 className='font-semibold'>LTM-AI-AGENT</h1>
      </div>

     {/*  chat body */}
      <div className='flex-1 overflow-y-auto space-y-4 mt-2 px-2'>
       {
        message.map((msg)=>(
           <div key={msg.id}>
         <MessageBubble  role={msg.role} text={msg.text} />
            </div>
        ))
       }

        </div>


    {/*   chatinput-scetion */}
    <div className='flex gap-2 p-3'>
      <input type="text"
      value={inputMess}
      onChange={(e)=>setInputMess(e.target.value)}
       placeholder='type message ...' 
      className='bg-[#972182] text-center px-2 text-white w-full py-3 rounded-3xl outline-none focus:ring-2 focus:ring-white' />
      <button onClick={inputHandeler}
      className='text-white bg-[#972182] py-3 rounded-3xl px-3 text-3xl'>➤</button>
    </div>

     </div>
    </div>
  )
}

export default App
