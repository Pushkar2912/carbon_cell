import React from 'react'

const Card = ({ name, code, rate, symbol, icon }) => {
    return (
        <div className='bg-gray-900 p-3 h-[150px] max-w-[400px] w-full rounded-md flex flex-col gap-8'>
            <div className=''>
                <div className='flex items-center gap-2'>
                    <div className='text-white bg-blue-500 p-2 rounded-[25px]'>
                        {icon}
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-white'>
                            {name}
                        </div>
                        <div className='text-gray-400 text-sm'>
                            {code}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white flex gap-1 items-center'>
                <div className='text-xl'>
                    {rate}
                </div>
                <div>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Card