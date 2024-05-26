import React from 'react'
import phone_logo from '../assets/phone.svg'
import gmail_logo from '../assets/gmail.svg'

const Footer = (props) => {
  return (
    <div className='bg-[rgb(24,24,24)] text-white py-12 md:py-20 flex flex-col md:flex-row gap-20 justify-center items-center min-h-40'>
      <div className="text-orange-500 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">AIIMS<br></br>Bhopal</div>
      <div>
        <div className='text-xl my-2 flex justify-center'>CONTACT</div><br></br>

        <div className='flex gap-3 justify-center items-center'>
          <span className='invert'><img src={phone_logo}></img></span>
          <big>Phone: </big>{props.contact}<br></br>
        </div>

        <div className='flex gap-3 justify-center items-center'>
          <span className='invert'><img src={gmail_logo}></img></span>
          <big>Email: </big>{props.gmail}<br></br>
        </div>
      </div>
    </div>
  )
}

export default Footer
