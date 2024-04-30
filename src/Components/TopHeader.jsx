import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { useEffect, useState } from "react";

const TopHeader = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute('data-theme',localTheme);
    },[theme]);

    const handleThemeToggle = (e) =>{
            if(e.target.checked){
                setTheme('dark');
            }else{
                setTheme('light');
            }
    }


    return (
        <div>
            <div className="bg-gray-800 py-4 ">
                <div className="flex px-5 justify-between items-center">
                    <div>
                    <Link to='/' > <img className='rounded-xl lg:h-16 lg:w-60 h-8 w-32 ' src={logo} alt="" /></Link>
                    </div>
                    <div>
                    {/* {
                        user ? <Link to='' className="text-white btn bg-btn border-btn-border">Buy Now</Link> : <Link to='/login' className="btn bg-btn border-btn-border text-white">Login</Link>
                    }   */}
                     <label  className="ml-4 cursor-pointer grid place-items-center font-bold text-xl">
                        <input onChange={handleThemeToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;