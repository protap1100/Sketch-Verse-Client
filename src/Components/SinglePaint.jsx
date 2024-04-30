import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SinglePaint = ({paint}) => {

    const {_id,name,category,description,price,rating,customization,processTime,stockStatus,email,username,image} = paint;

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true 
        });
    }, []);


    return (
        <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-2xl font-bold ">{name}</h1>
            <img src={image} className="h-96 w-96 rounded-xl p-2" alt="" />
            <p className="my-2">Category:{category}</p>
            <p className="my-2">Price:{price}</p>
            <Link className="btn bg-btn border-btn text-white" to={`/paintDetails/${_id}`}>View Details</Link>
        </div>
    );
};

export default SinglePaint;