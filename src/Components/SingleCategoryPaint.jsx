import Aos from "aos";
import { useEffect } from "react";

const SingleCategoryPaint = ({paint}) => {

    const {subcategory_name,category_name,item_name,image,price,rating} = paint;

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true 
        });
    }, []);


    return (
        <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-2xl font-bold ">{item_name}</h1>
            <img src={image} className="h-96 w-96 rounded-xl p-2" alt="" />
            <p>Subcategory name:{subcategory_name}</p>
            <p>Rating:{rating}</p>
            <p className="my-2">Category:{category_name}</p>
            <p className="my-2">Price:{price}</p>
        </div>
    );
};

export default SingleCategoryPaint;