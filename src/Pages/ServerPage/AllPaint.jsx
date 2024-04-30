import { Link} from "react-router-dom";
import PaintCard from "../../Components/PaintCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AllPaint = () => {

    // const allPaint = useLoaderData();
    
    const [loading, setLoading] = useState(true);
    const [allPaint, setAllPaint] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/allPaint');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAllPaint(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {}; 
    }, []);
   
    if(loading){
        return <div className="flex justify-center items-center my-40">
           <span className="text-red-900 loading text-center loading-spinner loading-lg"></span>
        </div>
      }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10 text-rose-400">All Paint:{allPaint.length} </h1>
                {/* // allPaint.map(paint => <PaintCard key={paint._id} paint={paint} ></PaintCard>) */}
             <div  className="rounded-lg bg-gray-200 overflow-hidden shadow-md p-4">
             <Helmet>
                <title>All Paint</title>
            </Helmet>
             <div className="overflow-x-auto">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold p-2">ID</td>
                            <td className="font-semibold p-2">Name</td>
                            <td className="font-semibold p-2">Category</td>
                            <td className="font-semibold p-2">Email</td>
                            <td className="font-semibold p-2">Rating</td>
                            <td className="font-semibold p-2">View Details</td>
                        </tr>
                        {allPaint.map(paint => <PaintCard key={paint._id} paint={paint}></PaintCard>)}
                    </tbody>
                </table>
             </div>
            </div>
            <div className="flex my-5 justify-end">
                 <Link to="/addPaint" className="btn border-btn-border  bg-btn text-white">Add Paint </Link>
            </div>
        </div>
    );
};

export default AllPaint;