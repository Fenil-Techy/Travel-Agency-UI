export const Destinations=()=>{
    return(
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="subheading text-xs font-semibold">Top Selling</h1>
                <h1 className="font-volkhov text-2xl font-bold">Top Destinations</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 gap-10">
                <div className="flex flex-col justify-center items-center max-w-7xl  shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl pb-2 pl-0.5">
                    <img src="./destinations/rome.png" alt="" className="w-60 h-full" />
                    <div className="flex w-full p-3 justify-between">
                    <h1 className="text-xs subheading">Rome, Italy</h1>
                    <h1 className="text-xs subheading">$5,42k</h1>
                    </div>
                    <div className="flex w-full subheading py-2 px-3 gap-2">
                        <img src="./destinations/Navigation.png" alt="" className="w-3"/>
                        <h1 className="text-[10px]">10 Days Trip</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center max-w-7xl  shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl pb-2 px-0.5">
                    <img src="./destinations/london.jpg" alt="" className="w-60 h-full" />
                    <div className="flex w-full p-3 justify-between">
                    <h1 className="text-xs subheading">London, UK</h1>
                    <h1 className="text-xs subheading">$4,2k</h1>
                    </div>
                    <div className="flex w-full subheading py-2 px-3 gap-2">
                        <img src="./destinations/Navigation.png" alt="" className="w-3"/>
                        <h1 className="text-[10px]">12 Days Trip</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center max-w-7xl  shadow-[0_8px_15px_rgba(0,0,0,0.1)] rounded-2xl pb-2 pl-0.5">
                    <img src="./destinations/europe.png" alt="" className="w-60 h-full" />
                    <div className="flex w-full p-3 justify-between">
                    <h1 className="text-xs subheading">Full Europe</h1>
                    <h1 className="text-xs subheading">$15k</h1>
                    </div>
                    <div className="flex w-full subheading py-2 px-3 gap-2">
                        <img src="./destinations/Navigation.png" alt="" className="w-3"/>
                        <h1 className="text-[10px]">28 Days Trip</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}