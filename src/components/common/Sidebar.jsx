import React, { useState } from 'react'
import Element from '../Element'
import { FiHome } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { LuArrowDownUp } from "react-icons/lu";
import { FaCodepen } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaFireFlameCurved } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { PATHS } from '../../utils/paths';
import { RxAvatar } from "react-icons/rx";

const Sidebar = () => {
    const [showHam, setShowHam] = useState(false)

    const handleSideShow = () => {
        setShowHam(!showHam)
    }
    return (
        <div className={`bg-gray-900 hidden md:flex flex-col min-h-screen p-3 justify-between`}>
            {showHam ? (
                <>
                    <div className='flex flex-col gap-8 h-full'>
                        <div className='mt-6 flex flex-col gap-6'>
                            <div className='text-green-400 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <FaFireFlameCurved size={40} />
                                    <div>
                                        <p className='text-xl font-semibold'>Carbon</p>
                                        <p className='text-xl'>Cell</p>
                                    </div>
                                </div>
                                <GiHamburgerMenu size={30} className='text-white' onClick={handleSideShow} />
                            </div>
                            <div className='flex items-center bg-gray-800 p-2 rounded-md cursor-pointer gap-2'>
                                <IoSearch className='text-white' size={25} />
                                <input className=' bg-gray-800 outline-none cursor cursor-pointer text-white' type="text" placeholder='Search' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Element title={"Home"} icon={<FiHome />} color={"text-white"} path={PATHS.HOME} />
                            <Element title={"Organization"} icon={<CgOrganisation />} color={"text-white"} path={PATHS.ORGANIZATION} />
                            <Element title={"Assets"} icon={<FaCodepen />} color={"text-white"} path={PATHS.ASSETS} />
                            {/* <Element title={"Trade"} icon={<LuArrowDownUp />} color={"text-white"} />
                    <Element title={"History"} icon={<GiSandsOfTime />} color={"text-white"} />
                    <Element title={"Wallet"} icon={<CiWallet />} color={"text-white"} /> */}
                        </div>
                    </div>
                    <div className='flex flex-col gap-8' >
                        <div className='flex flex-col gap-4'>
                            <Element title={"Notification"} icon={<MdNotificationsNone />} color={"text-gray-500"} path={PATHS.NOTIFICATION} />
                            <Element title={"Support"} icon={<AiOutlineQuestionCircle />} color={"text-gray-500"} path={PATHS.SUPPORT} />
                            <Element title={"Settings"} icon={<IoSettingsOutline />} color={"text-gray-500"} path={PATHS.SETTINGS} />
                        </div>
                        <div className='mb-4 bg-gray-800 p-3 rounded-md'>
                            <div className='flex gap-2 items-center'>
                                    <RxAvatar className='text-white' size={35} />
                                <div>
                                    <p className='text-gray-100'>Brooklyn Simmons</p>
                                    <p className='text-gray-500 text-sm'>brooklyn@simmons.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <GiHamburgerMenu size={30} className='text-white' onClick={handleSideShow} />
            )}
        </div>
    )
}

export default Sidebar