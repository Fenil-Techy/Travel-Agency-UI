export const Services = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="subheading text-xs md:text-lg font-semibold">CATEGORY</h1>
                <h1 className="font-volkhov text-2xl md:text-5xl font-bold">We Offer Best Services</h1>
            </div>
            <div className="flex flex-col md:flex-row md:gap-20 md:mt-20 justify-center items-center mt-10 gap-10">
                <div className="flex flex-col justify-center items-center w-60 md:h-80 px-4 py-8 shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl">
                    <img src="./services/Group 48.png" alt="" className="w-20" />
                    <h1 className="font-semibold text-lg mt-4">Calculated Weather</h1>
                    <h1 className="text-center text-sm subheading mt-2">Built Wicket longer admire do barton vanity itself do in it.</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-60 md:h-80 p-2  px-4 py-6 shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl">
                    <img src="./services/Group 51.png" alt="" className="w-30 " />
                    <h1 className="font-semibold text-lg ">Best Flights</h1>
                    <h1 className="text-center text-sm subheading mt-2">Engrossed listening. Park gate sell they west hard for the.</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-60 p-2 md:h-80  px-4 py-8 shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl">
                    <img src="./services/Group 50.png" alt="" className="w-18" />
                    <h1 className="font-semibold text-lg mt-4">Local Events</h1>
                    <h1 className="text-center text-sm subheading mt-2">Barton vanity itself do in it. Preferd to men it engrossed listening. </h1>
                </div>
                <div className="flex flex-col justify-center items-center w-60 p-2 md:h-80 px-4 py-8 shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl">
                    <img src="./services/Group 49.png" alt="" className="w-20" />
                    <h1 className="font-semibold text-lg mt-4">Customization</h1>
                    <h1 className="text-center text-sm subheading mt-2">We deliver outsourced aviation services for military customers</h1>
                </div>
            </div>
        </div>
    )
}