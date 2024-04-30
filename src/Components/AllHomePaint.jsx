import { useLoaderData } from 'react-router-dom';
import SinglePaint from './SinglePaint';

const AllHomePaint = () => {

    const allData = useLoaderData();

    // if(!allData){
    //     return <div className="flex justify-center items-center my-40">
    //     <span className="text-accent loading text-center loading-spinner loading-lg"></span>
    //  </div>
    // }

    return (
        <div>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center '>Explore Creativity Through Painting and Drawing</h1>
                <p className='text-center lg:px-20 mt-2 px-2'>Discover the joy of self-expression through painting and drawing with our diverse tools and vibrant color palette options</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
                {
                    allData.slice(0,6).map((data) => <SinglePaint key={data._id} paint={data} ></SinglePaint> )
                }
            </div>
        </div>
    );
};

export default AllHomePaint;