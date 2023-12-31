import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUser } from "react-icons/fa6";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);


    const Navlinks = <>
        <li> <NavLink  to={"/"}>Home</NavLink> </li>
        <li> <NavLink  to={"/mycart"}>My Cart</NavLink> </li>
        <li> <NavLink  to={"/addproduct"}>Add Product</NavLink> </li>
        <li> <NavLink  to={"/contactus"}>Contact Us</NavLink> </li>
       
    </>
    return (
       
           <div>

        <div className="navbar p-4   shadow-lg bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {Navlinks}
                </ul>
                </div>
               <Link to={'/'}> <a className="btn btn-ghost normal-case font-bold lg:text-3xl">Brand Shop</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            {/* avater section  */}
            <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                               <div className="flex  justify-center items-center">
                               <FaUser></FaUser>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                               </div>
                            </Link>
                    }
            </div>
            </div>
            
           
            </div>

        
    )
};

export default Navbar;