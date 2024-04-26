import { Link, useLoaderData } from "react-router-dom";
import PaintCard from "../../Components/PaintCard";

const AllPaint = () => {

    const allPaint = useLoaderData();
   
    return (
        <div>
            <h1>All Paint:{allPaint.length} </h1>
            {
                allPaint.map(paint => <PaintCard key={paint._id} ></PaintCard>)
            }
            <Link to="/addPaint" className="btn border-btn-border  bg-btn text-white">Add Paint </Link>
        </div>
    );
};

export default AllPaint;