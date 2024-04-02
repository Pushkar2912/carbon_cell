import React from 'react'
import Population from '../components/Population'
import Crypto from '../components/Crypto'

const Home = () => {
    return (
        <div className='h-screen overflow-auto flex-1'>
            <div className='text-white text-3xl p-8 mt-16 md:mt-0'>
                Hello, <span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-transparent bg-clip-text'>Brooklyn Simmons</span>
                <div className='font-medium'>
                    <p className='text-[24px]'>Welcome to <span className='text-green-600'>spot trading!</span></p>
                </div>
            </div>
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