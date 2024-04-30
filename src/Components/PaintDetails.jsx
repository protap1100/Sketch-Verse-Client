import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PaintDetails = () => {
    const paintDetails = useLoaderData();

    // Destructure the paintDetails object
    const { name, category, description, price, rating, customization, processTime, stockStatus, image } = paintDetails;

    return (
        <div className="container mx-auto my-10">
            <div className="md:flex shadow-lg mx-6 md:mx-auto max-w-lg md:max-w-2xl">
                <div className="w-full md:w-1/2">
                    <img className="h-full w-full md:object-cover object-center" src={image} alt={name} />
                </div>
                <div className="w-full md:w-1/2 px-4 py-4 bg-white">
                    <div className="flex justify-between">
                        <h2 className="text-xl text-gray-800 font-medium mb-3">Name:{name}</h2>
                    </div>
                    <p className="text-orange-600 text-xl ">Category: <span className="text-green-500">{category}</span></p>
                    <p className="text-orange-600 text-base">Description:{description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-gray-700 font-bold text-xl">Price:{price}</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-orange-600">Customization: <span className="font-light text-green-500">{customization}</span></p>
                        <p className=" text-orange-600">Process Time: <span  className="font-light text-green-500">{processTime}</span> </p>
                        <p className=" text-orange-600">Stock Status: <span  className="font-light text-green-500">{stockStatus}</span></p>
                    </div>
                    <div className="flex items-center">
                            <p className="text-orange-600 text-xl ml-1">Rating :{rating}</p>
                            <div className="rating">
                               <FaStar></FaStar>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaintDetails;
