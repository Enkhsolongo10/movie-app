export function Footer(){
    return(
        <>
           <div className=" bg-indigo-700 w-[100%] h-[280px] text-[#FAFAFA] text-sm flex md:flex justify-center items-center">
                <div className="w-[80%] h-[200px] gap-20 lg:flex lg:justify-between md:flex md:justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                            <img className="w-[16.67px] h-[16.67px]" src="vector1.png" alt="vector"></img>
                            <p className="text-base font-bold">Movie Z</p>
                        </div>
                        <p className="mb-9 lg:mb-0">2024 Movie Z. All Rights Reserved.</p> 
                    </div>
                    <div className="flex gap-20 ">
                        <div className="flex flex-col gap-3">
                            <p>Contact information</p>
                            <div className="-mt-2">
                                <p>Email:</p>
                                <p>support@movieZ.com</p>
                            </div>
                            <div>
                                <p>Phone:</p>
                                <p>+976 (11) 123-4567</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="mb-4">Follow us:</p>
                            <div className="lg:flex md:flex gap-3">
                                <p>Facebook</p>
                                <p>Instagram</p>
                                <p>Twitter</p>
                                <p>Youtube</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}; 