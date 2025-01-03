import { FilterGenre } from "./FilterGenre";

export function Header(){
    return(
        <>
          <div className="w-[100%] h-[59px] flex items-center justify-center">
            <div className="w-[100%] h-[36px] flex items-center justify-between px-7 lg:px-10">
                <div className="flex gap-1 items-center">
                    <img className="w-[16.67px] h-[16.67px]" src="vector.png" alt="vector"></img>
                    <p className="text-base font-bold text-indigo-700">Movie Z</p>
                </div>
                <FilterGenre/>
                <div className="flex gap-1">
                    <img className="w-[36px] h-[36px]" src="/search.png" alt="search"></img>
                    <img className="w-[36px] h-[36px]" src="modes.png" alt="modes"></img>
                </div>
            </div>
          </div>
        </>
    );
};