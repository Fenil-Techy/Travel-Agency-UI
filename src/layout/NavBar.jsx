import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (

        <nav className="sticky top-0 z-40 flex p-4 lg:border-none lg:absolute lg:bg-transparent lg:top-12 lg:left-1/2 lg:-translate-x-1/2 lg:w-230 lg:p-0 xl:border-none xl:absolute xl:bg-transparent max-w-7xl mx-auto bg-white border-b border-gray-400 xl:top-12 xl:left-1/2 xl:-translate-x-1/2 xl:w-full xl:p-0 cursor-pointer">

            <div className="flex w-full justify-between items-center  lg:gap-20">
                <div>
                    <img src="../hero/Logo.png" alt="Logo" className="w-20 lg:w-25 xl:w-25" />
                </div>
                <div className="hidden lg:flex xl:flex h-full pl-7">
                        <ul className="flex w-full flex-col lg:flex lg:flex-row lg:gap-8 lg:text-base lg:items-center lg:justify-center lg:font-medium xl:flex xl:flex-row xl:gap-14 xl:text-xl text-left xl:items-center xl:justify-center xl:font-medium gap-5 text-xl">
                            <li><a href="#destinations" onClick={() => setIsOpen(!isOpen)}>Destinations</a></li>
                            <li><a href="#services" onClick={() => setIsOpen(!isOpen)}>Hotels</a></li>
                            <li><a href="#bookatrip" onClick={() => setIsOpen(!isOpen)}>Flights</a></li>
                            <li><a href="#bookatrip" onClick={() => setIsOpen(!isOpen)}>Bookings</a></li>
                            <li className="xl:pl-10">Login</li>
                            <li className=" lg:px-5 lg:py-1 lg:border lg:rounded-xl   xl:px-5 xl:py-1 xl:border xl:rounded-xl">Sign up</li>
                            <li className="lg:flex lg:justify-center lg:items-center  xl:flex xl:justify-center xl:items-center">EN <RiArrowDropDownLine className="lg:text-4xl xl:text-4xl" /></li>
                        </ul>
                    </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl lg:hidden xl:hidden">
                    <CiMenuBurger />
                </button>

                <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 transform transition-transform h-full w-64 z-50 bg-white shadow-xl lg:hidden xl:hidden`}>
                    <div className="flex h-full pl-7 ">
                        <ul className="flex w-full flex-col text-left gap-5 text-xl">
                            <button onClick={() => setIsOpen(!isOpen)} className="self-end text-2xl px-7 py-3 ">✕</button>
                            <li><a href="#destinations" onClick={() => setIsOpen(!isOpen)}>Destinations</a></li>
                            <li><a href="#services" onClick={() => setIsOpen(!isOpen)}>Hotels</a></li>
                            <li><a href="#bookatrip" onClick={() => setIsOpen(!isOpen)}>Flights</a></li>
                            <li><a href="#bookatrip" onClick={() => setIsOpen(!isOpen)}>Bookings</a></li>
                            <li>Login</li>
                            <li>Sign up</li>
                            <li>Language</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    
    )

}