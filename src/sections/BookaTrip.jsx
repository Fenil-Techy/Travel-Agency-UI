export const BookaTrip = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col justify-center  gap-3">
                <h1 className="subheading text-xs lg:text-lg xl:text-xl font-semibold">Fast and easy</h1>
                <h1 className="font-volkhov text-2xl lg:text-4xl xl:text-5xl font-bold">Book Your Next Trip<br />In 3 Easy Steps</h1>
            </div>
            <div className="-mt-10 lg:-mt-20 lg:flex lg:justify-between xl:-mt-30 xl:flex  xl:justify-between">
                <div className="hidden lg:flex xl:flex flex-col justify-center gap-10">
                    <div className="flex justify-center items-center gap-5">
                        <div>
                            <img src="./bookatrip/list1.png" alt="" className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold dubheading text-sm lg:text-lg xl:text-xl">Choose Destination</h1>
                            <h1 className="subheading text-xs xl:text-base xl:w-90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div>
                            <img src="./bookatrip/list2.png" alt="" className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-sm lg:text-lg xl:text-xl">Make Payment</h1>
                            <h1 className="subheading text-xs xl:text-base xl:w-90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div>
                            <img src="./bookatrip/list3.png" alt="" className="w-20" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-sm lg:text-lg xl:text-xl">Reach Airport At Selected Date</h1>
                            <h1 className="subheading text-xs xl:text-base xl:w-90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!</h1>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-center md:items-center xl:">
                <img src="./bookatrip/bookatrip.png" alt="" className="w-150 xl:pb-20" />
                </div>
            </div>
            <div className="lg:hidden xl:hidden flex flex-col gap-10">
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <img src="./bookatrip/list1.png" alt="" className="w-20" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-sm">Choose Destination</h1>
                        <h1 className="subheading text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <img src="./bookatrip/list2.png" alt="" className="w-20" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-sm">Make Payment</h1>
                        <h1 className="subheading text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <img src="./bookatrip/list3.png" alt="" className="w-20" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-sm">Reach Airport At Selected Date</h1>
                        <h1 className="subheading text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}