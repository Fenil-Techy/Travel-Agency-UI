export const Testimonial=()=>{
    return(
         <div className="max-w-7xl lg:flex xl:flex mx-auto px-4">
            <div className="flex flex-col justify-center lg:justify-normal lg:w-120 xl:justify-normal xl:w-120 gap-3">
                <h1 className="subheading text-xs lg:text-lg xl:text-xl font-semibold">Testimonials</h1>
                <h1 className="font-volkhov text-2xl lg:text-4xl xl:text-5xl font-bold">What People Says<br />About Us.</h1>
                <div className="hidden lg:flex xl:flex gap-5  w-50 mt-20">
                <h1 className="lg:text-6xl xl:text-7xl font-bold">.</h1>
                <h1 className="lg:text-6xl xl:text-7xl text-gray-300 font-bold">.</h1>
                <h1 className="lg:text-6xl xl:text-7xl text-gray-300 font-bold">.</h1>
                </div>
            </div>
            <div className="flex justify-center xl:justify-end items-center xl:mt-0 mt-10 xl:w-200">
                <img src="./testimonials/testimonial.png" alt="" className="w-full lg:w-150 xl:w-180"/>
            </div>
        </div>
    )
}