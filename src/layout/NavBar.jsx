import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (

        <nav className="sticky top-0 z-40 flex p-4 md:border-none md:absolute md:bg-transparent max-w-7xl mx-auto bg-white border-b border-gray-400 md:top-12 md:left-1/2 md:-translate-x-1/2 md:w-full md:p-0">

            <div className="flex w-full justify-between items-center ">
                <div>
                    <img src="../hero/Logo.png" alt="Logo" className="w-20 md:w-25" />
                </div>
                <div className="hidden md:flex h-full pl-7">
                        <ul className="flex w-full flex-col md:flex md:flex-row md:gap-14 md:text-lg text-left md:items-center md:justify-center md:font-medium gap-5 text-lg">
                            <li><a href="#destinations" onClick={() => setIsOpen(!isOpen)}>Destinations</a></li>
                            <li><a href="#services" onClick={() => setIsOpen(!isOpen)}>Hotels</a></li>
                            <li><a href="#bookatrip" onClick={() => setIsOpen(!isOpen)}>Flights</a></li>
                            <li><a href="#bookatrip" onClick={() => setIsOpen(!isOpen)}>Bookings</a></li>
                            <li className="pl-10">Login</li>
                            <li>Sign up</li>
                            <li>Language</li>
                        </ul>
                    </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl md:hidden">
                    <CiMenuBurger />
                </button>

                <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 transform transition-transform h-full w-64 z-50 bg-white shadow-lg md:hidden`}>
                    <div className="flex h-full pl-7 ">
                        <ul className="flex w-full flex-col text-left gap-5 text-lg">
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