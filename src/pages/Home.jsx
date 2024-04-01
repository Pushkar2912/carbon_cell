import React from 'react'
import Population from '../components/Population'
import Crypto from '../components/Crypto'

const Home = () => {
    return (
        <div className='h-screen'>
            <div className='p-8'>
                <Population />
            </div>
            <div className='app-container-left flex-1 p-8'>
                <Crypto />
            </div>
        </div>
    )
}

export default Home