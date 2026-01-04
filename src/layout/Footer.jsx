import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto lg:py-5 xl:py-5 py-5">
            <div className="lg:flex justify-center items-center  xl:flex">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:p-0  lg:gap-0 lg:max-w-3xl lg:border-none xl:grid-cols-4 xl:p-0 xl:gap-0 xl:max-w-5xl p-4 justify-center border-t xl:border-none items-center gap-10 cursor-default">
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="./hero/Logo.png" alt="" className="w-20 lg:w-25 xl:w-30 h-full" />
                    <h1 className="text-xs text-center xl:text-sm subheading">Book your trip in minute, get full control for much longer.</h1>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col text-sm gap-2 subheading">
                        <h1 className="text-xl pb-1 font-bold lg:text-lg xl:text-xl text-black">Company</h1>
                        <li className="xl:text-base ">About</li>
                        <li className="xl:text-base ">Careers</li>
                        <li className="xl:text-base ">Mobile</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col text-sm gap-2 subheading">
                        <h1 className="text-xl pb-1 font-bold lg:text-lg xl:text-xl text-black">Explore More</h1>
                        <li className="xl:text-base ">Airlines fees</li>
                        <li className="xl:text-base ">Flight</li>
                        <li className="xl:text-base ">Low Fare Tips</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col text-sm gap-2 subheading">
                        <h1 className="text-xl pb-1 font-bold lg:text-lg xl:text-xl text-black">Contact</h1>
                        <li className="xl:text-base ">Help/FAQ</li>
                        <li className="xl:text-base ">Press</li>
                        <li className="xl:text-base ">Affiliates</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center   items-center gap-2 ">
                <div className="flex gap-2 justify-center items-center ">
                    <TiSocialFacebook className="text-4xl rounded-4xl shadow-2xl shadow-amber-800 "/>
                    <IoLogoInstagram className="text-4xl rounded-4xl shadow-2xl shadow-amber-800 "/>
                    <FaXTwitter className="text-4xl rounded-4xl shadow-2xl shadow-amber-800 "/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 py-3">
                    <h1 className="subheading text-xl">
                    Discover our app
                    </h1>
                    <div className="flex gap-2">
                        <img src="./Google Play.png" alt="" className="" />
                        <img src="./Play Store.png" alt="" />
                    </div>

                </div>

            </div>
            </div>
            <h1 className="subheading text-xs mt-8 text-center  xl:text-sm">All rights reserved@Jadoo.co</h1>
        </div>
    )

}