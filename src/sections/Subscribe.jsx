export const Subscribe=()=>{
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="bg-[#dfd7f955] relative p-10 lg:h-96 xl:h-96 flex flex-col justify-center items-center gap-10 rounded-xl">
                <img src="./subscribe/arrow.png" alt="" className="absolute w-10 lg:w-15 xl:w-15 -top-4 -right-2" />
                <div>
                <h1 className="text-center text-xl lg:text-3xl xl:text-3xl subheading font-semibold xl:leading-12 ">Subscribe to get information, latest news and other<br className="hidden xl:flex" />interesting offers about Jadoo</h1>
                </div>
                <div className="flex gap-2">
                    <input type="email" name="email" id="email" placeholder="Your Email" className="bg-white text-black border-0 outline-none w-40 lg:w-96 lg:p-4 lg:text-base xl:w-96 xl:p-4 xl:text-base rounded-xl text-xs p-2 " />
                    <button className="px-3 py-2 bg-btn lg:px-8 lg:py-3 lg:text-sm xl:px-8 xl:py-3 xl:text-sm rounded-xl text-xs text-white cursor-pointer">Subscribe</button>
                </div>
            </div>
        </div>
    )
}