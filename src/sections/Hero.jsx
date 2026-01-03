export const Hero = () => {
    return (
        <div className="md:relativemd:min-h-screen md:overflow-hidden ">

            <div className="">
                <img src="./hero/herobg.png" alt="" className="-z-50 absolute w-96 h-96 md:w-full md:h-full md:object-cover md:inset-0 " />
            </div>
            <div className="flex flex-col md:justify-center md:pt-20 py-4 max-w-7xl min-h-screen mx-auto ">

                <div className="px-4">
                    <h1 className="text-red-500 font-semibold md:text-2xl pb-3">Best Destinations around the world</h1>
                    <h1 className="text-4xl relative w-full font-bold font-volkhov pb-5 md:text-7xl ">Travel, enjoy <br /><img src="./hero/Decore.png" alt="" className="absolute -z-10 w-50 right-8 -mt-2 md:left-55 md:w-96" />
                        and live a new <br />
                        and full life</h1>
                    <h1 className="text-gray-600 text-xs md:text-lg md:w-120">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.<br />Park gate sell they west hard for the.</h1>
                </div>

                <div className="flex flex-col md:flex-row md:w-96 md:justify-between md:items-center  items-baseline w-40  gap-6 mt-10 px-4">
                    <div className=" ">
                        <button className="bg-yellow-500 shadow-[0_10px_30px_rgba(240,177,0,0.3)]  rounded-lg p-3  text-xs md:text-md md:p-4">Find out more</button>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="./hero/Play button.png" alt="" className="w-8 md:w-10
                        shadow-[0_10px_30px_rgba(255,0,0,0.3)] rounded-2xl" />
                        <button className="text-xs text-gray-500 md:text-[14px]">Play Demo</button>
                    </div>
                </div>
                <div className="absolute -bottom-3 right-0 md:right-30 md:-bottom-6 -z-10 ">
                    <img src="./hero/Image.png" alt="" className="w-80 h-80 md:w-170 md:h-full" />
                </div>
            </div>
        </div>
    )
}