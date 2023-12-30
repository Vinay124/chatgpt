import React, { useState } from 'react'
import ChatGptLogo from '../assets/Logo/ChatGptBlack.svg'
import { FiEdit } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { BiCustomize } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const userInfo = localStorage.getItem('UserInformation');
  const response = JSON.parse(userInfo);

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
 
  const openPopup = () => {
    setOpen(!open)
  };

// Logout functionlity
  const Logout = () => {
    localStorage.clear()
    navigate('/Login')
  }

  return (
    <div className="bg-gray-800 h-screen w-1/6 text-white p-4 flex justify-between flex-col">
      {/* NewChat */}
      <div className='flex justify-between items-center hover:bg-[#202123] p-[10px] rounded-md '>
        <div className='flex '>
          <img src={ChatGptLogo} alt='' className='bg-white rounded-2xl p-[3px] w-[30px] h-[30px]'/>
          <span className='mx-4 '>New Chat</span>
        </div>
        <div>
          <FiEdit/>
        </div>
      </div>
      {/* Messages */}
      <div></div>

      {/* User info */}
      <div className='flex items-center relative  hover:bg-[#202123] p-[12px] rounded-[16px] cursor-pointer shaow-md' onClick={openPopup}>
        <div>
        <img src={response.picture} className='w-[40px] rounded-3xl' alt=''/>
        </div>
        <div className='ms-4'>
          <h6 className='text-sm'>{response.name}</h6>
          <h6 className='text-sm'>{response.email}</h6>
        </div>
      </div>

    {open && (
      <div className='absolute bottom-[90px] left-[38px] bg-[#202123] rounded-md'>
        <div  className='flex items-center hover:bg-[#343541] p-5 cursor-pointer'>
          <BiCustomize size={20}/>
          <h6 className='mx-4'>Custome instruction</h6>
        </div>

        <div className='flex items-center hover:bg-[#343541] p-5 cursor-pointer'>
          <IoIosSettings size={20}/>
          <h6 className='mx-4'>Settings</h6>
        </div>

        <div className='flex items-center hover:bg-[#343541] p-5 cursor-pointer' onClick={Logout}>
          <RxExit size={20}/>
          <h6 className='mx-4'>Logout</h6>
        </div>
      </div>
    )}
      

    </div>
  )
}

export default Sidebar