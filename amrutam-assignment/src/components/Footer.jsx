import { Link } from 'react-router-dom'
import Pinterest from "../assets/pinterest.svg"

const Footer = () => {
    return (
        <footer className="w-full p-10 px-32 max-md:p-5 max-md:py-7 max-md:gap-10 bg-[#3A643B2E] flex flex-wrap justify-between">
            <div className="space-y-3 [&>p]:lowercase [&>p]:font-DINProLight [&>p]:font-[600] [&>p]:text-black">
                <h5>Get in touch</h5>
                <p className=""><Link to={"mailTo:support@amrutam.co.in"}>support@amrutam.co.in</Link></p>
                <p className="text-black w-[70%]">Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                <p className="text-black"><Link to={"tel: +91 9713171999"}>+91 9713171999</Link></p>


                <ul className="flex flex-wrap gap-2">
                    <li className="bg-primary-color rounded-full p-2"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 13 22" fill="none">
                        <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></li>
                    <li className="bg-primary-color rounded-full p-2"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22" fill="none">
                        <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.9997 10.3703C15.1231 11.2025 14.981 12.0525 14.5935 12.7993C14.206 13.5461 13.5929 14.1517 12.8413 14.53C12.0898 14.9082 11.2382 15.0399 10.4075 14.9062C9.57683 14.7726 8.80947 14.3804 8.21455 13.7855C7.61962 13.1905 7.22744 12.4232 7.09377 11.5925C6.96011 10.7619 7.09177 9.9102 7.47003 9.15868C7.84829 8.40716 8.45389 7.79404 9.20069 7.40654C9.94749 7.01904 10.7975 6.87689 11.6297 7.0003C12.4786 7.12619 13.2646 7.52176 13.8714 8.12861C14.4782 8.73545 14.8738 9.52138 14.9997 10.3703Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 5.5H16.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></li>
                    <li className="bg-primary-color rounded-full p-2"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 17" fill="none">
                        <path d="M22.5406 3.42C22.4218 2.94541 22.1799 2.51057 21.8392 2.15941C21.4986 1.80824 21.0713 1.55318 20.6006 1.42C18.8806 1 12.0006 1 12.0006 1C12.0006 1 5.12057 1 3.40057 1.46C2.92982 1.59318 2.50255 1.84824 2.16192 2.19941C1.82129 2.55057 1.57936 2.98541 1.46057 3.46C1.14579 5.20556 0.991808 6.97631 1.00057 8.75C0.989351 10.537 1.14334 12.3213 1.46057 14.08C1.59153 14.5398 1.83888 14.9581 2.17872 15.2945C2.51855 15.6308 2.93939 15.8738 3.40057 16C5.12057 16.46 12.0006 16.46 12.0006 16.46C12.0006 16.46 18.8806 16.46 20.6006 16C21.0713 15.8668 21.4986 15.6118 21.8392 15.2606C22.1799 14.9094 22.4218 14.4746 22.5406 14C22.8529 12.2676 23.0069 10.5103 23.0006 8.75C23.0118 6.96295 22.8578 5.1787 22.5406 3.42Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.75 12.0205L15.5 8.75047L9.75 5.48047V12.0205Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></li>
                    <li className="bg-primary-color rounded-full p-2"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 20" fill="none">
                        <path d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></li>
                    <li className="bg-primary-color rounded-full p-2"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 21" fill="none">
                        <path d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 8H1V20H5V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></li>
                    <li className="flex items-center justify-center bg-primary-color rounded-full py-2 px-3"><img className="scale-125 -translate-x-[2px]" src={Pinterest} alt="" /></li>
                </ul>
            </div>

            <div className="space-y-3">
                <h5>Information</h5>
                <ul className="[&>li]:font-DINProLight [&>li]:font-[600] [&>li]:text-[#474747] space-y-2">
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/terms-and-conditions"}>Terms and Conditions</Link></li>
                    <li><Link to={""}>Privacy Policy</Link></li>
                    <li><Link to={""}>Privacy Policy for Mobile Apps</Link></li>
                    <li><Link to={""}>Shipping and Returns Policy</Link></li>
                    <li><Link to={""}>International Delivery</Link></li>
                    <li><Link to={""}>For Businesses, Hotels and Resorts</Link></li>
                </ul>
            </div>

            <div className="space-y-3 my-2">
                <h5>Subscribe to our Newsletter and join Amrutam Family today!</h5>

                <form className="flex rounded-full " action="submit" method="POST">
                    <input className="rounded-s-full max-sm:w-[80%] focus:outline-none border-r-0 border px-4 border-primary-color p-2 bg-transparent text-base font-DINProLight text-black" type="text" placeholder="Your Email Address" />
                    <input className="rounded-e-full  cursor-pointer px-4 p-2 text-[18px] bg-black text-white font-DINProBold" type="submit" value={"Subscribe"} />
                </form>
            </div>
        </footer>
    )
}

export default Footer