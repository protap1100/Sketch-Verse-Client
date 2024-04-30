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
                        <h2 className="text-xl text-gray-800 font-medium mb-3">{name}</h2>
                        <p className="text-gray-600 text-sm">{category}</p>
                    </div>
                    <p className="text-gray-700 text-base">{description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-gray-700 font-bold text-xl">${price}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600">Customization: {customization}</p>
                        <p className="text-gray-600">Process Time: {processTime}</p>
                        <p className="text-gray-600">Stock Status: {stockStatus}</p>
                    </div>
                    <div className="flex items-center">
                            <p className="text-gray-600 text-xl ml-1">Rating :{rating}</p>
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
