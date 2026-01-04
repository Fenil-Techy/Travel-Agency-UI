export const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden ">

            <div className="">
                <img src="./hero/herobg.png" alt="" className="-z-50 absolute w-full h-full sm:w-full sm:h-full md:w-full lg:w-full lg:h-full lg:object-cover lg:inset-0 xl:w-full xl:h-full xl:object-cover xl:inset-0 " />
            </div>
            <div className="flex flex-col md:pt-20 lg:justify-center lg:pt-10 xl:justify-center xl:pt-20 py-4 max-w-7xl min-h-screen mx-auto ">

                <div className="px-4">
                    <h1 className="text-red-500 font-semibold sm:text-xl md:text-xl lg:text-2xl xl:text-2xl pb-3">Best Destinations around the world</h1>
                    <h1 className="text-4xl relative w-full font-bold font-volkhov pb-5 sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl ">Travel, enjoy <br /><img src="./hero/Decore.png" alt="" className="absolute hidden -z-10 w-50 right-8 -mt-2 sm:left-40 md:left-35 md:w-70 lg:left-50 xl:left-55 xl:w-96" />
                        and live a new <br />
                        and full life</h1>
                    <h1 className="text-gray-600 w-full text-xs sm:text-sm sm:w-70 md:text-sm  md:w-80 lg:text-base lg:w-100  xl:text-xl xl:w-120">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.Park gate sell they west hard for the.</h1>
                </div>

                <div className="flex flex-col lg:flex-row lg:w-96 lg:justify-between lg:items-center xl:flex-row xl:w-96 xl:justify-between xl:items-center  items-baseline w-40  gap-6 mt-10 px-4">
                    <div className=" ">
                        <button className="bg-yellow-500 shadow-[0_10px_30px_rgba(240,177,0,0.3)]  rounded-xl p-3  text-xs lg:text-sm lg:p-3 xl:text-xl xl:p-4 cursor-pointer">Find out more</button>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="./hero/Play button.png" alt="" className="w-8 lg:w-9 xl:w-10
                        shadow-[0_10px_30px_rgba(255,0,0,0.3)] rounded-2xl" />
                        <button className="text-xs text-gray-500  lg:text-sm xl:text-[14px] cursor-pointer">Play Demo</button>
                    </div>
                </div>
                <div className="absolute bottom-30 -right-10 md:top-50 lg:top-40 xl:right-30 xl:top-25 -z-10 ">
                    <img src="./hero/Image.png" alt="" className="w-90 h-90 sm:w-130 sm:h-130 md:w-140 md:h-140 xl:w-160 xl:h-160" />
                </div>
            </div>
        </div>
    )
}