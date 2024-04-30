import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PaintCard = ({ paint }) => {

    const { _id, name, category, email, rating } = paint;
    
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true 
        });
    }, []);

    return (
        <tr className="animate__animated animate__fadeInLeft">
            <td className="p-2 ">{_id}</td>
            <td className="p-2">{name}</td>
            <td className="p-2">{category}</td>
            <td className="p-2">{email}</td>
            <td className="p-2">{rating}</td>
            <td><Link to={`/paintDetails/${_id}`} className="btn text-white bg-btn border-btn">View Details</Link></td>
        </tr>
    );
};

export default PaintCard;
