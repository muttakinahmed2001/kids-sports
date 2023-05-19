import { Link } from "react-router-dom";
import logo from '../../../src/assets/hop-removebg-preview.png'

const Navbar = () => {
    return (
        <div className="navbar bg-rose-500 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                All toys

                            </a>

                        </li>
                        <li><a>My Toys</a></li>
                        <li><a>Add a toys</a></li>
                        <li><a>blogs</a></li>
                    </ul>
                   
                </div>
                 <img className="mr-24 ml-10" src={logo} alt="" />
                
                  <span className="text-2xl font-bold text-rose-900 mr-2">Kids</span>   <span className="text-2xl font-bold text-blue-900">Sports</span>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold  text-indigo-700">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <a>
                            All toys

                        </a>

                    </li>
                    <li><a>My Toys</a></li>
                    <li><a>Add a toy </a></li>
                    <li><a>Blogs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
             <Link className="mr-2"><button className="btn btn-info ">Login</button></Link> 
             <Link className="mr-2"><button className="btn btn-info ">Log Out</button></Link>   
             <h3 className="mr-2">User Profile</h3>
            </div>
        </div>
    );
};

export default Navbar;