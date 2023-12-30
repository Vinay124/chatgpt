import React from 'react'
import ChatGPTLogo from '../assets/Logo/ChatGPT.svg'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className='bg-[#343541] h-screen'>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center'>
          <div>
            <img src={ChatGPTLogo} className='w-[55px]' alt=''/>
          </div>
          <div>
            <h6 className='mt-4 text-white text-center text-2xl'>Welcome to ChatGpt</h6>
            <h6 className='mt-4 text-white text-center text-2xl'>Log in with your OpenAI account to continue</h6>
          <div className='py-5 mt-3 text-center'>
            <Link to="/Login">
            <button className='px-[20px] py-[14px] mx-2 rounded-md text-md text-white text-md bg-[#0FA47F]'>Log in</button>
            </Link>
            <Link to="/Signup">
            <button className='px-[20px] py-[14px] mx-2 rounded-md text-md text-white text-md bg-[#0FA47F]'>Sign up</button></Link>
          </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Welcome