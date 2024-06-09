import React from 'react'
import phone_logo from '../assets/phone.svg'
import gmail_logo from '../assets/gmail.svg'

const Footer = (props) => {
  return (
    <div className='bg-[rgb(29,28,32)] text-white py-12 md:py-20 flex flex-col md:flex-row gap-20 justify-center items-center min-h-40'>
      <div className="font-bold text-2xl text-blue-500">AIIMS<br></br>Bhopal</div>
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
