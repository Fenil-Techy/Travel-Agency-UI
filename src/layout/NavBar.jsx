import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const NavBar=()=>{

    const[isOpen,setIsOpen]=useState(false)


    return(
        <nav className="flex p-4 max-w-7xl ">

        <div className="flex w-full justify-between items-center">
            <div>
                <img src="../hero/Logo.png" alt="Logo" className="w-20 md:w-full" />
            </div>
            <button onClick={()=>setIsOpen(!isOpen)} className="text-2xl">
                <CiMenuBurger />
            </button>
            
            <div className={`${isOpen?"translate-x-0":"translate-x-full"} fixed top-0 right-0 transform transition-transform h-full w-64 z-50 bg-white shadow-lg  md:flex md:gap-20`}>
                <div className="flex  h-full pl-7 ">
                <ul className="flex w-full flex-col text-left gap-5 text-lg">
                     <button onClick={()=>setIsOpen(!isOpen)} className="self-end text-2xl px-7 py-3">✕</button>
                    <li className="">Destinations</li>
                    <li className="">Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
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