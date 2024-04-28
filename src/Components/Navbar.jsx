import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvier";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);
    
    // console.log(user.photoURL)
    console.log(user)

    const handleSignOut = () =>{
        logOut()
        .then((res) =>{
            console.log('logout done',res);
        })
        .catch((error=>{
            console.log('failed',error)
        }))
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    // console.log(user.photoURL)
    // const navLink = <>
    //         </>

    return (
        <div>
            <div className="navbar font-Poppins bg-green-200 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to='/'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "mr-5 text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600"
                        } >Home
                    </NavLink>
                    <NavLink to='/allPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl mt-3 flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600 mt-3"
                            }>All Paint 
                    </NavLink>
                    <NavLink to='/addPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl mt-3 flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600 mt-3"
                            }>Add Paint
                    </NavLink>
                    <NavLink to='/myPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl mt-3 flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600 mt-3"
                            }>MyPaint
                    </NavLink> 
                    <NavLink to='/contact'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl mt-3 flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600 mt-3"
                            }>Contact
                    </NavLink>  

                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Sketch Verse</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <NavLink to='/'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 mr-5 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : "mr-5 text-blue-600 rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>Home
                    </NavLink>
                    <NavLink to='/allPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 mr-5 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : "mr-5 text-blue-600 rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>All Paint 
                    </NavLink>
                    <NavLink to='/addPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 mr-5 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : " mr-5 text-blue-600 rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>Add Paint
                    </NavLink>
                    <NavLink to='/myPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 mr-5 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : " mr-5 text-blue-600 rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>MyPaint 
                    </NavLink>
                    <NavLink to='/contact'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : " text-blue-600  rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>Contact
                    </NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                <div className="w-10 rounded-full tooltip" data-tip={user?.displayName? user.displayName : 'No Username Available'}>
                    {
                        user ? <img className="rounded-full" src={user.photoURL || 'No Photo Url'}/>  : ''
                    }
                </div>
                <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                        >
                            {<FaAlignJustify></FaAlignJustify>}
                        </button>
                        {isOpen && (
                            <div className="absolute mt-1  bg-white shadow-md rounded-md">
                                <div className="py-1">
                                    {user ? (
                                        <>
                                            <Link
                                                to="/updateProfile"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                onClick={toggleDropdown}
                                            >
                                                Profile
                                            </Link>
                                            <button
                                                onClick={handleSignOut}
                                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </>
                                            ) : (
                                        <Link
                                            to="/login"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
        </div>
                </div>
                </div>
        </div>
    );
};

export default Navbar;