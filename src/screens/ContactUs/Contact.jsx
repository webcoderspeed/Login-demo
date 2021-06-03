import React from 'react'
import { contact } from './Data';
import InfoSection from '../../components/infoSection/InfoSection';

const Contact = () => {
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
       <form style={{
       width: '30rem'
     }}>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <textarea placeholder="Message" />
        <button type='submit' className='blue-grey lighten-2'>Contact Us</button>
     </form>
     </div>
    </>
  )
}

export default Contact
