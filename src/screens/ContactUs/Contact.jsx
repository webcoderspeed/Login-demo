import React, { useState } from 'react'
import { contact } from './Data';
import InfoSection from '../../components/infoSection/InfoSection';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')


    // Email Js Integration
    
    const handleSubmit = (e) => {
      e.preventDefault();

    // Sending Email
          const data = {
            to_email:email,
            message:message,
            from_name:name,
          }

        emailjs.send('service_3yjldis', 'template_iktxu3l', data, 'user_7eHAtNzGYNAUTIGEKnae7')
        .then(response => {
          console.log(response.status, response.text);
          alert('Message Sent!')
        })
        .catch(err => console.log(err))
      }
  

  return (
    <>
     <InfoSection {...contact} />
     <div style={{
       backgroundColor:'#101522',
       display: 'flex',
       justifyContent:'center',
       padding: '5rem',
       lineHeight:'3rem'
     }} >
       <form onSubmit={handleSubmit} className='contact-form'>
        <input className='input' type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
        <input className='input' type="email" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)}/>
        <textarea className='input' placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
        <br />
        <button type='submit' className='btn gray lighten-3 z-depth-0'>Contact Us</button>
     </form>
     </div>
    </>
  )
}

export default Contact
