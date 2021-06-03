import React from 'react'
import InfoSection from '../../components/infoSection/InfoSection';
import { about } from './Data';


const About = () => {
  return (
    <>
     <InfoSection {...about }/>  
    </>
  )
}

export default About
