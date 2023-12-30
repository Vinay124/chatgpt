import React, { useState } from 'react'
import Logo from '.././assets/Logo/ChatGptBlack.svg'
import ChatBox from './ChatBox'

const WelcomeContent = () => {

  const [isHide, setIsHide] = useState(true);

  const handlefocus = () => {
      setIsHide(false);
  };


  return (
    (isHide ? 
      <>
       <div className='flex items-center justify-center h-64'>
      <div>
      <div className=' flex justify-center'>
          <img src={Logo} className='w-[48px]'/>
      </div>
      <div className='mt-4'>
          <h2 className='font-[600] text-2xl'>How can I help you today?</h2>
      </div>
      </div>
  </div>

  <ChatBox/>
    </>
  : null)

  )
}

export default WelcomeContent