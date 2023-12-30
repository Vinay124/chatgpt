import React, {useEffect, useState} from 'react'
import ChatGptBlack from '../assets/Logo/ChatGptBlack.svg'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { IoLogoMicrosoft } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [user, setUser] = useState();
    const [profile, setProfile] = useState();

    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (response) => {
            setUser(response)
            localStorage.setItem('JWTTOKEN', response.access_token)
        },
        onError: (error) => console.log('Login Failed', error),
        
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if(user) {
                    const getResponse = await axios.get(
                        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json',
                        },
                      }
                    );
                    if(getResponse.verified_email !== true) {
                        setProfile(getResponse.data)
                        localStorage.setItem('UserInformation', JSON.stringify(getResponse.data));
                        navigate('/MainUi')
                    } else {
                        console.log("fetch error")
                    }
                }
            } catch (error) {
                console.log('Error fatching user Profile', error)
            }
        };

        fetchProfile();
    },[user]);

  return (
    <section className='bg-[#ffffff] '>
        <div className='flex justify-center items-center mt-3'>
            <img src={ChatGptBlack} className='w-[30px] mt-5 py-3' alt=''/>
        </div>
          
        <div className='flex flex-col h-[800px] justify-center items-center'>
            <div>
                <h1 className='font-bold text-3xl'>Welcome back</h1>
            </div>
            <div className='mt-5'>
                <form>
                    <div className='relative w-full min-w-[250px] mt-3 h-[45px]'>
                    <input
                    className="peer w-full  border-[#c2c8d0] h-[52px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-t-transprant border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-[5px] border-blue-gray-200 focus:border-none"
                    placeholder=" " />
                    <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-transprant peer-focus:before:border-t-0 before:border-l-transprant peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email address
                    </label>
                    </div>
                    <div>
                        <button className='bg-[#10a37f] px-[30px] py-[13px] rounded text-md w-full mt-5 text-white'>Continue</button>
                    </div>
                </form>
                <div className='mt-3'>
                <h6 className='font-md font-normal text-center text-sm'>Don't have an account? 
                    <Link to="/Signup" className='text-[#10a37f] text-md mx-2'>Sign up</Link></h6>
                </div>

                <div className='flex justify-center bg-[#c2c8d0] relative h-[1px] rounded-xl  mt-[30px]'>
                    <span className='px-2 py-1 text-center absolute font-semibold text-gray-500 bottom-[-18px] bg-white  mb-1'>OR</span>
                </div>

                <div className='mt-5 py-3'>
                <Link>
                <button className='py-2.5 px-5 mb-3 text-sm  w-full font-medium text-[#2d333a] focus:outline-none rounded-md border border-[#c2c8d0]  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:bg-[#d9ebf3]  dark:text-[#2d333a] dark:border-[#c2c8d0] dark:hover:text-black dark:hover:bg-[#f2f2f2] flex items-center' onClick={login}><FcGoogle size={30} className='mr-5'/>  Continue with Google</button></Link>
                    <button className='py-2.5 px-5 mb-3 text-sm  w-full font-medium text-[#2d333a] focus:outline-none rounded-md border border-[#c2c8d0]  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:bg-[#d9ebf3]  dark:text-[#2d333a] dark:border-[#c2c8d0] dark:hover:text-black dark:hover:bg-[#f2f2f2] flex items-center'><IoLogoMicrosoft size={30} className='text-black mr-5'/>  Continue with Microsoft Account</button>
                    <button className='py-2.5 px-5 mb-3 text-sm  w-full font-medium text-[#2d333a] focus:outline-none rounded-md border border-[#c2c8d0]  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:bg-[#d9ebf3]  dark:text-[#2d333a] dark:border-[#c2c8d0] dark:hover:text-black dark:hover:bg-[#f2f2f2] flex items-center'><IoLogoApple size={30} className='text-black mr-5'/>  Continue with Apple</button>
                </div>

            </div>
        </div>
        
        <div className='text-center flex justify-center '>
            <div>
                <Link className='text-[#10a37f]'>Terms of use</Link>
            </div>
            <div className='mx-5'>|</div>
            <div>
                <Link className='text-[#10a37f]'>Privacy policy</Link>
            </div>
        </div>
    </section>
  )
}

export default Login