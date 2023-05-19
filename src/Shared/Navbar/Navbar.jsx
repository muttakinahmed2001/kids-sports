import { Link } from "react-router-dom";
import logo from '../../../src/assets/hop-removebg-preview.png'

const Navbar = () => {
    const navItems = <>
        <li className="hover:text-[#a7a705]" >
            <Link to='/'>Home</Link> </li>
        <li className="hover:text-[#a7a705]" >
            <Link>All Toys</Link> </li>

        <li className="hover:text-[#a7a705]"       >  <Link>My Toys</Link>
        </li>
        <li className="hover:text-[#a7a705]"       ><Link>Add a Toy</Link></li>
        <li className="hover:text-[#a7a705]"       ><Link>Blogs</Link> </li>
    </>
    return (
        <div className="navbar bg-base-100 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold   bg-base-100  rounded-box w-52">
                        {navItems}
                    </ul>

                </div>
                <img className="mr-2   " src={logo} alt="" />

                <span className="text-2xl font-bold text-[red] ">Kids</span>   <span className="text-2xl font-bold text-[#6e6edc]">Sports</span>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1    text-[#5858c6] text-xl">

                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'> <button className="btn btn-outline btn-warning">Login</button></Link>
               
            </div>
        </div>
    );
};

export default Navbar;