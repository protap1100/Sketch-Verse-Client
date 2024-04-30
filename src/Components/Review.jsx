import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import 'animate.css';

const Review = ({ data }) => {
    const { name, location, rating, description, image_url } = data;

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true 
        });
    }, []);

    return (
        <div className="animate__animated animate__fadeInLeft">
            <div className="mt-5 shadow-xl flex flex-col justify-center items-center gap-3 border rounded-xl p-5 border-btn-border animate__animated animate__fadeIn">
                <img className="w-40 h-40 rounded-xl animate__animated animate__bounceIn" src={image_url} alt="Profile Image" />
                <div className="px-5 flex-grow animate__animated animate__fadeInUp">
                    <h1 className="text-center font-bold animate__animated animate__fadeInDown">Name: {name}</h1>
                    <h2 className="text-center font-bold animate__animated animate__fadeInDown">Location: {location}</h2>
                    <h1 className="text-center font-bold animate__animated animate__fadeInDown">Rating: <span>{rating}</span></h1>
                    <h2 className="text-center font-bold animate__animated animate__fadeInDown">Review:</h2>
                    <p className="text-center animate__animated animate__fadeIn">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
