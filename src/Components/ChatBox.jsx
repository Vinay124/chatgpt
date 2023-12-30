import React, { useState } from 'react'

const ChatBox = () => {

   
  return (
    <div className='w-9/12 mx-auto my-3 '>
        <div className="grid grid-cols-2 grid-row-3 gap-6 items-center justify-center mx-10">
            <div className='px-3 py-3 border border-[#e5e5e5] rounded-2xl flex justify-between items-center cursor-pointer	'>
                <div>
                    <span className='font-[500] text-md'>Make up a story</span>
                    <p className='text-gray-400 text-sm mt-1'>about Shaky, a tooth-brushing shark superh...</p>
                </div>
                <div className='bg-gray-50  p-[1px] rounded-md shadow-md'>
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-[#b6b8b9]"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <div className='px-3 py-3 border border-[#e5e5e5] rounded-2xl flex justify-between items-center cursor-pointer	'>
                <div>
                    <span className='font-[500] text-md'>Write a text Message</span>
                    <p className='text-gray-400 text-sm mt-1'>asking a friend to be my pluse-one at wedding </p>
                </div>
                <div className='bg-gray-50  p-[1px] rounded-md shadow-md'>
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-[#b6b8b9]"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <div className='px-3 py-3 border border-[#e5e5e5] rounded-2xl flex justify-between items-center cursor-pointer	'>
                <div>
                    <span className='font-[500] text-md'>Come up with concepts</span>
                    <p className='text-gray-400 text-sm mt-1'>for a retro-style arcade game</p>
                </div>
                <div className='bg-gray-50  p-[1px] rounded-md shadow-md'>
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-[#b6b8b9]"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <div className='px-3 py-3 border border-[#e5e5e5] rounded-2xl flex justify-between items-center cursor-pointer	'>
                <div>
                    <span className='font-[500] text-md'>Recommend a dish</span>
                    <p className='text-gray-400 text-sm mt-1'>to bring to a potluck</p>
                </div>
                <div className='bg-gray-50  p-[1px] rounded-md shadow-md'>
                    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" className="text-[#b6b8b9]"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatBox