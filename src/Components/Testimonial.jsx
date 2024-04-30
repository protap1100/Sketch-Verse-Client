import { useEffect } from "react";
import { useState } from "react";
import Review from "../Components/Review";
import 'animate.css'


const Testimonial = () => {

    const [reviewData,setReviewData]  = useState([]);
    const [review, setReview] = useState(6);

    useEffect(()=>{
        fetch('TestMonial.json')
        .then(res=> res.json())
        .then(data=>setReviewData(data));
    },[])

    // const allReviews = reviewData.estate_reviews;
    // console.log(reviewData)


    return (
        <div className="mt-20">
            <h1 className="text-center font-bold text-3xl my-5">Our Client s Review and Their Feedback</h1>
            <p className="lg:px-40 lg-3 text-center" > Meet our delighted clients! Discover their success stories and experiences with us. Join our community of happy customers and experience exceptional service firsthand</p>
            <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    reviewData.slice(0,review).map(data=> <Review key={data.estate_id} data={data}></Review>)
                }
            </div>
           <div className={`my-5 text-center ${review === reviewData.length && 'hidden'}`}>
                 <button onClick={() => {setReview(reviewData.length)}} className="btn  bg-btn text-white border-btn-border">See All Reviews</button>
           </div>
        </div>
    );
};

export default Testimonial;