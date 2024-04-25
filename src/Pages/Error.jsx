import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-red-500 font-bold mb-5">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
            <div className="flex items-center gap-4">
                <Link to="/" className="btn bg-btn text-white">
                    Go to Home
                </Link>
                <Link to="/contact" className="btn bg-red-500 text-white">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default Error;
