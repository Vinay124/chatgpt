import React from 'react'

const InputCommendComp = ({Inputfocus, submitrequest}) => {

  return (
    <div className='mt-6 '>
        <div className='w-3/5 mx-auto fixed bottom-6 translate-x-32 translate-y-1'>
            <form onSubmit={submitrequest}>
                <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="search" onFocus={Inputfocus} id="search" className="block w-full p-4 h-[58px] text-1xl text-md text-gray-900 border border-gray-300 rounded-3xl bg-white focus:ring-blue-500 focus:outline-none focus:shadow-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message ChatGpt..." required/>
                            <button type="submit" className="outline outline-0 text-white px-[5px] py-[5px] absolute end-5 bottom-3 bg-[#e5e5e5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#000000] font-medium rounded-lg text-sm  dark:bg-[#000000] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-[#b6b8b9]"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default InputCommendComp