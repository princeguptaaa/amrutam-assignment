import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-creme flex justify-center">
            <div className="w-[90%] container flex justify-between items-center m-3">
                <img src={Logo} draggable={false} className="select-none cursor-pointer" width={259} height={49} alt="amrutam logo" />

                <ul className="flex gap-[40px] -translate-x-16">
                    <li className="*:nav-list"><Link to={'/'}>Home</Link></li>
                    <li className="*:nav-list *:text-primary-color *:font-DINProBold "><Link to={'/'}>Find Doctors</Link></li>
                    <li className="*:nav-list"><Link to={'/'}>About Us</Link></li>
                </ul>

                <ul className="flex gap-[10px] items-center">
                    <li><button className="btn-secondary"><Link to={'/login'}>Login</Link></button></li>
                    {/* Assuming btn-primary is a valid Tailwind CSS class */}
                    <li><button className="btn-primary"><Link to={'/sign-up'}>Sign-up</Link></button></li>
                </ul>
            </div>

        </nav>

    )
}

export default Navbar