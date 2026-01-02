export const Hero = () => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto">

            <div className="">
                <img src="./hero/herobg.png" alt="" className="-z-50 absolute w-96 h-96" />
            </div>
            <div className="flex flex-col py-4 ">

                <div className="px-4 ">
                    <h1 className="text-red-500 font-semibold pb-3">Best Destinations around the world</h1>
                    <h1 className="text-4xl relative w-full font-bold font-volkhov pb-5 ">Travel, enjoy <br /><img src="./hero/Decore.png" alt="" className="absolute -z-10 w-50 right-8 -mt-2" />
                        and live a new <br />
                        and full life</h1>
                    <h1 className="text-gray-600 text-xs">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.<br />Park gate sell they west hard for the.</h1>
                </div>

                <div className="flex flex-col  items-baseline w-40  gap-6 mt-10 px-4">
                    <div className=" ">
                        <button className="bg-yellow-500 shadow-[0_10px_30px_rgba(240,177,0,0.3)]  rounded-lg p-3  text-xs">Find out more</button>
                    </div>
                    <div className="flex items-center gap-3  relative">
                        <img src="./hero/Play button.png" alt="" className="w-8
                        shadow-[0_10px_30px_rgba(255,0,0,0.3)] rounded-2xl" />
                        <button className="text-xs text-gray-500">Play Demo</button>
                    </div>
                </div>
                <div className="absolute -bottom-5 -right-5 -z-10">
                    <img src="./hero/Image.png" alt="" className="w-80 h-80 " />
                </div>
            </div>
        </div>
    )
}