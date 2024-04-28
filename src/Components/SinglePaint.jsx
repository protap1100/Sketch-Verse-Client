import { Link } from "react-router-dom";

const SinglePaint = ({paint}) => {

    const {_id,name,category,description,price,rating,customization,processTime,stockStatus,email,username,image} = paint;

    // if (!paint) {
    //     return (
    //         <div className="flex justify-center items-center my-10">
    //             <span className="text-accent loading text-center loading-spinner loading-lg"></span>
    //         </div>
    //     );
    // }

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} className="h-84 w-84 rounded-xl p-2" alt="" />
            {/* <button onClick={()=> handleDetails(_id)} className="btn bg-btn border-btn text-white">View Details</button> */}
            <Link className="btn bg-btn border-btn text-white" to={`/paintDetails/${_id}`}>View Details</Link>
        </div>
    );
};

export default SinglePaint;