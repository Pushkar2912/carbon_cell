import React, { useEffect } from 'react'
import { getCrypto } from '../api/crypto'
import { useDispatch, useSelector } from 'react-redux'
import { setCrypto } from '../slice/crypto';
import Card from './Card';
import { FaEuroSign } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";
import { PiCurrencyGbpBold } from "react-icons/pi";

const Crypto = () => {

    const dispatch = useDispatch();
    const crypto = useSelector((state) => (state.crypto.crypto.bpi))
    console.log({crypto});
    useEffect(() => {
     getCrypto().then(({data}) => {
        dispatch(setCrypto(data))
     })
    },[])

   

  return (
    <div className='flex flex-col gap-6 w-[100vw]'>
        <div className='text-white text-xl'>
            Bitcoin
        </div>
        <div className='flex gap-4'>
          <Card name={crypto?.EUR?.description} code={crypto?.EUR?.code} rate={crypto?.EUR?.rate} symbol={crypto?.EUR?.symbol} icon={<FaEuroSign />} />
          <Card name={crypto?.USD?.description} code={crypto?.USD?.code} rate={crypto?.USD?.rate} symbol={crypto?.USD?.symbol} icon={<IoLogoUsd />} />
          <Card name={crypto?.GBP?.description} code={crypto?.GBP?.code} rate={crypto?.GBP?.rate} symbol={crypto?.GBP?.symbol} icon={<PiCurrencyGbpBold />} />
        </div>
        
    </div>
  )
}

export default Crypto