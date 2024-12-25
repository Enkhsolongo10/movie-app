export function Navigation(){
    return(
        <>
          <div className="w-[100%] h-[59px] flex items-center justify-center">
            <div className="w-[100%] h-[36px] flex items-center justify-center">
                <div className="flex gap-1 items-center">
                    <img className="w-[16.67px] h-[16.67px]" src="vector.png" alt="vector"></img>
                    <p className="text-base font-bold text-indigo-700">Movie Z</p>
                </div>
                <div className="flex gap-1">
                    <button className="w-auto h-[36px] border border-[#E4E4E7] rounded-lg">Genre</button>
                    <input className="pl-2 w-auto h-[36px]  border border-[#E4E4E7] rounded-lg" type="text" placeholder="Search..."></input>
                </div>
                <div>
                    <img className="w-[36px] h-[36px]" src="modes.png" alt="modes"></img>
                </div>
            </div>
          </div>
        </>
    )
}