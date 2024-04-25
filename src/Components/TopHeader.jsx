import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

const TopHeader = () => {
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
                     <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;