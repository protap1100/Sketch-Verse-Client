import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvier";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then((res) =>{
            console.log('logout done',res);
        })
        .catch((error=>{
            console.log('failed',error)
        }))
    }

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
                    <NavLink to='/contact'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl mt-3 flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600 mt-3"
                            }>Contact
                    </NavLink> 
                    <NavLink to='/myPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl mt-3 flex  items-center p-2 font-semibold bg-blue-400 border text-lg border-blue-600" : "text-blue-600 rounded-xl flex  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600 mt-3"
                            }>MyPaint 
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
                    <NavLink to='/contact'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 mr-5 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : " mr-5 text-blue-600 rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>Contact
                    </NavLink>
                    <NavLink to='/myPaint'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 rounded-xl flex bg-blue-400  items-center p-2 font-semibold hover:bg-blue-400 border text-lg border-blue-600" : " text-blue-600  rounded-xl flex  items-center p-2  hover:bg-blue-400 border text-lg border-blue-600"
                            }>My Cart
                    </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="w-10 rounded-full tooltip" data-tip={user?.displayName? user.displayName : 'No Username Available'}>
                    {
                        user ? <img className="rounded-full" src={user.photoURL || 'No Photo Url'}/>  : ''
                    }
                </div>
                   {
                        user ?  <Link onClick={handleSignOut} className="ml-5 btn btn-primary border-btn-border  bg-btn" >Logout</Link> :
                        <Link className="ml-5 btn btn-primary border-btn-border  bg-btn" to='/login'>Login</Link>
                    }
                </div>
                </div>
        </div>
    );
};

export default Navbar;