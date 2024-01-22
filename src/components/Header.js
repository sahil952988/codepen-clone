import React from 'react'
import logo from "../Assets/codepen-logo.png"

const Header = () => {
  return (
    <>
      <div className="nav flex justify-between">
        <div className="logo mt-5 flex">
          <img className='w-14 ml-5' src={logo} alt="" />
          <p className='text-white text-3xl mt-5'>  <i class="ri-edit-2-line"></i></p>
        </div>

        <div className="right-items flex space-x-3 mt-5 mr-5" >
          <p className='text-white bg-[#34363e] rounded-[7px] px-5 py-3  h-12 cursor-pointer'><i class="ri-cloudy-line"></i> <span>Save</span></p>
          <p className='text-white bg-[#34363e] rounded-[7px] px-5 py-3 h-12' cursor-pointer><i class="ri-settings-3-line"></i> <span>Settings</span></p>
          <p className='text-white bg-[#34363e] rounded-[7px] px-5 py-3 h-12' cursor-pointer><i class="ri-clapperboard-line"></i> </p>
          <p className='text-white bg-[#00A239] rounded-[7px] px-5 py-3 h-12' cursor-pointer>Sign Up</p>
          <p className='text-white bg-[#34363e] rounded-[7px] px-5 py-3 h-12' cursor-pointer>Log In</p>
        </div>

      </div>
    </>
  )
}
export default Header