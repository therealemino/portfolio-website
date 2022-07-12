import React, {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast, Bounce, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Socials from './Socials'

export default function Footer(props) {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [info,setInfo] = useState("")

  function sendEmail(e) {
    const data = {
      name,
      email,
      info
    }
    console.log(data)
    axios.post("/api/email/send", data)
      .then(res => {
        // console.log(res)
        setName("")
        setEmail("")
        setInfo("")
        toast('🦄 Email Sent!')
      })
      .catch(err => {
        console.log(err.response)
        toast(`❌ Oops! An erroroccoured when sending email. \n Error: ${err.response.data}`)
      })

    e.preventdefault
  }  

  return (
    <footer ref={props.contactRefProp} className="bg-footer bg-right bg-cover bg-fixed md:bg-footer-md text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div id='contact' className="flex flex-col items-center justify-center">
          <div className="text-center font-semibold font-nunito text-4xl pt-2 ">Get in Touch</div>
          <div>
            <form name="EmailForm" className="w-5/6 md:w-96 mx-auto">
              <input type="text" onChange={ (e) => setName(e.target.value) } placeholder="Name" value={name} className="bg-transparent py-4 text-left w-full px-3 focus:outline-none text-white"/><hr className="mb-3"/>
              <input type="email" onChange={ (e) => setEmail(e.target.value) } placeholder="Email" value={email} className="bg-transparent py-4 text-left w-full px-3 focus:outline-none text-white"/><hr className="mb-3 w-full"/>
              <textarea name="info" id="" cols="30" rows="10" placeholder="Message" onChange={ (e) => setInfo(e.target.value) } value={info} className="bg-black py-4 text-left w-full px-3 text-white bg-opacity-60 rounded-md focus:outline-none"></textarea>
              <button type='button' onClick={ sendEmail }  className="block text-3xl mx-auto p-8 hover:text-4xl duration-300 m-2"><span className="fa fa-paper-plane"></span></button>
            </form>
            <hr/>
          </div>
          <div className="text-center">
            <a href="mailto: ejeiokekeemmanuel@gmail.com" target="_blank" rel="noreferrer" className="text-md md:text-xl bg-black bg-opacity-60 p-6 m-2 rounded-xl block"><span className="fa fa-envelope pr-2"></span> ejeiokekeemmanuel@gmail.com</a>
            <a href="https://api.whatsapp.com/send?phone=2349032234467" target="_blank" rel="noreferrer" className="text-md md:text-xl bg-black bg-opacity-60 p-6 m-2 rounded-xl block"><span className="fa fa-whatsapp pr-3"></span> 09032234467</a>
          </div>
          <Socials />
        </div>
      </div>
      <div>
        {/* <button onClick={ notifyEmailSent }>Notify!</button> */}
        <ToastContainer />
      </div>          
    </footer>
  )
}
