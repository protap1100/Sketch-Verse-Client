import { useLoaderData } from "react-router-dom";
import SingleCategoryPaint from "../../Components/SingleCategoryPaint";
import { Helmet } from "react-helmet";

const CategoryPaint = () => {

    const Category = useLoaderData();

    return (
        <div>
            <div className='my-10'>
            <Helmet>
                <title>Category Paint</title>
            </Helmet>
                <h1 className='text-3xl font-bold text-center '>Explore Creativity Through Painting and Drawing</h1>
                <p className='text-center lg:px-20 mt-2 px-2'>Discover the joy of self-expression through painting and drawing with our diverse tools and vibrant color palette options</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
                {
                    Category.map((data) => <SingleCategoryPaint key={data._id} paint={data} ></SingleCategoryPaint> )
                }
            </div>
        </div>
    );
};

export default CategoryPaint;