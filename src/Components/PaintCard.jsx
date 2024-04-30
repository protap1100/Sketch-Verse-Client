import { Link } from "react-router-dom";

const PaintCard = ({ paint }) => {
    const { _id, name, category, email, rating } = paint;

    return (
        <tr>
            <td className="p-2">{_id}</td>
            <td className="p-2">{name}</td>
            <td className="p-2">{category}</td>
            <td className="p-2">{email}</td>
            <td className="p-2">{rating}</td>
            <td><Link to={`paintDetails/${_id}`}></Link></td>
        </tr>
    );
};

export default PaintCard;
