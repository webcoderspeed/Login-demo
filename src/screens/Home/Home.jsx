import React from 'react'
import { HomeOjeOne } from './Data'
import  InfoSection  from '../../components/infoSection/InfoSection';

const Home = () => {
    return (
        <>
            <InfoSection {...HomeOjeOne} />
        </>
    )
}

export default Home