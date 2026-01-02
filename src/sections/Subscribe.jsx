export const Subscribe=()=>{
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="bg-[#DFD7F9] relative p-10 flex flex-col justify-center items-center gap-10 rounded-lg">
                <img src="./subscribe/arrow.png" alt="" className="absolute w-10 -top-4 -right-2" />
                <div>
                <h1 className="text-center text-lg subheading font-semibold">Subscribe to get information, latest news and other interesting offers about </h1>
                </div>
                <div className="flex gap-2">
                    <input type="email" name="email" id="email" placeholder="Your Email" className="bg-white subheading border-0 outline-none w-40 rounded-lg text-xs p-2" />
                    <button className="px-3 py-2 bg-btn rounded-lg text-xs text-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}