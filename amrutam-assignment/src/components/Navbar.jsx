import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [Ham, showHam] = useState(false)
    return (
        <nav className={`bg-creme flex justify-between xsm:py-4 ${Ham && "overflow-hidden"}`}>

            <div className="xsm:w-[100%] xsm:py-4 sm:justify-between w-[100%] flex justify-between items-center m-3">
                <ul onClick={() => {
                    showHam(true)
                }} className="xsm:absolute xl:hidden relative left-0 m-4 p-2 flex flex-col gap-1 *:rounded-full md:hidden">
                    <li className="w-7 h-[3px] bg-primary-color"></li>
                    <li className="w-7 h-[3px] bg-primary-color"></li>
                    <li className="w-7 h-[3px] bg-primary-color"></li>
                </ul>

                {Ham && <div className="absolute z-50 h-screen w-full bg-creme top-0 left-0">
                    <button onClick={() => {
                        showHam(false)
                    }} className="flex absolute top-5 items-center hover:bg-primary-color justify-center">
                        <ul className="space-y-[3px] m-3 mx-5 py-3 *:rounded-full *:hover:bg-white">
                            <li className="w-7 h-[3px]  bg-primary-color rotate-45"></li>
                            <li className="w-7 h-[3px] -translate-y-[5px] bg-primary-color -rotate-45"></li>
                        </ul>
                    </button>

                    <ul className="space-y-6 flex flex-col items-start justify-center mx-auto fixed top-[30%] left-[30%]">
                        <li className="font-DINProMedium text-2xl"><Link to={""}>Home</Link></li>
                        <li className="font-DINProBold text-2xl text-primary-color"><Link to={""}>Find Doctors</Link></li>
                        <li className="font-DINProMedium text-2xl"><Link to={""}>About Us</Link></li>
                        <li><button className="btn-secondary"><Link to={'/login'}>Login</Link></button></li>
                        {/* Assuming btn-primary is a valid Tailwind CSS class */}
                        <li><button className="btn-primary"><Link to={'/sign-up'}>Sign-up</Link></button></li>
                    </ul>
                </div>}
                <img src={Logo} draggable={false} className="select-none cursor-pointer w-[259px] h-[49px] xsm:h-[40px] xsm:w-[200px] xsm:hidden" alt="amrutam logo" />

                <ul className="flex lg:gap-[40px] md:gap-[20px] min-lg:gap-10 xl:-translate-x-16 xsm:hidden max-md:hidden">
                    <li className="*:nav-list"><Link to={'/'}>Home</Link></li>
                    <li className="*:nav-list *:text-primary-color *:font-DINProBold "><Link to={'/'}>Find Doctors</Link></li>
                    <li className="*:nav-list"><Link to={'/'}>About Us</Link></li>
                </ul>

                <ul className="flex gap-[10px] items-center xsm:hidden">
                    <li><button className="btn-secondary max-md:hidden"><Link to={'/login'}>Login</Link></button></li>
                    {/* Assuming btn-primary is a valid Tailwind CSS class */}
                    <li><button className="btn-primary"><Link to={'/sign-up'}>Sign-up</Link></button></li>
                </ul>
            </div>

        </nav>

    )
}

export default Navbar