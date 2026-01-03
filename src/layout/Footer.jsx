import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-2 p-4 justify-center border-t items-center gap-10">
                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="./hero/Logo.png" alt="" className="w-20 h-full" />
                    <h1 className="text-xs text-center subheading">Book your trip in minute, get full control for much longer.</h1>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col text-sm gap-2 subheading">
                        <h1 className="text-md pb-1 font-bold text-black">Company</h1>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col text-sm gap-2 subheading">
                        <h1 className="text-md pb-1 font-bold text-black">Explore More</h1>
                        <li>Airlines fees</li>
                        <li>Flight</li>
                        <li>Low Fare Tips</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col text-sm gap-2 subheading">
                        <h1 className="text-md pb-1 font-bold text-black">Contact</h1>
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 py-5">
                <div className="flex gap-2 justify-center items-center ">
                    <TiSocialFacebook className="text-4xl rounded-4xl shadow-2xl shadow-amber-800 "/>
                    <IoLogoInstagram className="text-4xl rounded-4xl shadow-2xl shadow-amber-800 "/>
                    <FaXTwitter className="text-4xl rounded-4xl shadow-2xl shadow-amber-800 "/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 py-3">
                    <h1 className="subheading text-lg">
                    Discover our app
                    </h1>
                    <div className="flex gap-2">
                        <img src="./Google Play.png" alt="" className="" />
                        <img src="./Play Store.png" alt="" />
                    </div>

                    <h1 className="subheading text-xs mt-5">All rights reserved@Jadoo.co</h1>
                </div>

            </div>
        </div>
    )

}