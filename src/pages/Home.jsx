import React from 'react'
import Population from '../components/Population'
import Crypto from '../components/Crypto'

const Home = () => {
    return (
        <div className='h-screen flex-1'>
            <div className='p-8'>
                <Population />
            </div>
            <div className='app-container-left p-8'>
                <Crypto />
            </div>
        </div>
    )
}

export default Home