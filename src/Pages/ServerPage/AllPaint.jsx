import { Link, useLoaderData } from "react-router-dom";
import PaintCard from "../../Components/PaintCard";

const AllPaint = () => {

    const allPaint = useLoaderData();
   
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10 text-rose-400">All Paint:{allPaint.length} </h1>
                {/* // allPaint.map(paint => <PaintCard key={paint._id} paint={paint} ></PaintCard>) */}
             <div  className="rounded-lg overflow-hidden shadow-md p-4">
             <div className="overflow-x-auto">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold p-2">ID</td>
                            <td className="font-semibold p-2">Name</td>
                            <td className="font-semibold p-2">Category</td>
                            <td className="font-semibold p-2">Email</td>
                            <td className="font-semibold p-2">Rating</td>
                            <td className="font-semibold p-2">Update</td>
                            <td className="font-semibold p-2">Delete</td>
                        </tr>
                        {allPaint.map(paint => <PaintCard key={paint._id} paint={paint}></PaintCard>)}
                    </tbody>
                </table>
             </div>
            <Link to="/addPaint" className="btn border-btn-border  bg-btn text-white">Add Paint </Link>
            </div>
        </div>
    );
};

export default AllPaint;