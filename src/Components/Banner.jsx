import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import  SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css'; 
import { useState } from 'react';
import image1 from '../assets/images/banner-img/image1.jpg';
import image2 from '../assets/images/banner-img/image2.jpeg';
import image3 from '../assets/images/banner-img/image3.jpg';
import image4 from '../assets/images/banner-img/image4.jpeg';
import 'animate.css';
SwiperCore.use([Navigation]);
const Banner = () => {
    const [swiper, setSwiper] = useState(null);
    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    return (
  <div className="relative my-5">
    <div className='my-10'>
        <h1 className='font-bold text-3xl text-center' >Welcome to Brushstrokes Gallery</h1>
        <p className='px-5 md:px-40 lg:px-60 text-center my-5'>Explore our collection of exquisite paintings, featuring stunning artworks that bring color and life to any space. Find your perfect masterpiece today!</p>
    </div>
    <Swiper
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        onSwiper={setSwiper}
    >
        <SwiperSlide>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                        <h1 className='font-bold text-3xl text-gray-800'>Art That Inspires</h1>
                        <p className='text-gray-600 mt-5'>Discover paintings that redefine spaces with color, emotion, and creativity. Let our artworks inspire and elevate your surroundings.</p>
                    </div>
                </div>
                <img className='h-[600px] rounded-xl w-full object-cover' src={image1} alt="Artwork 1" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                        <h1 className='font-bold text-3xl text-gray-800'>Artistry Redefined</h1>
                        <p className='text-gray-600 mt-5'>Explore our collection of handcrafted paintings, each a unique expression of skill and imagination. Find the perfect piece to complement your style.</p>
                    </div>
                </div>
                <img className='h-[600px] rounded-xl w-full object-cover' src={image2} alt="Artwork 2" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                        <h1 className='font-bold text-3xl text-gray-800'>Creative Masterpieces</h1>
                        <p className='text-gray-600 mt-5'>Experience the beauty of original paintings, crafted by talented artists. Each piece tells a story and adds sophistication to your home or office.</p>
                    </div>
                </div>
                <img className='h-[600px] rounded-xl w-full object-cover' src={image3} alt="Artwork 3" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                        <h1 className='font-bold text-3xl text-gray-800'>Your Perfect Painting Awaits!</h1>
                        <p className='text-gray-600 mt-5'>Discover the painting that speaks to you - a masterpiece that adds personality and charm to your living or working space. Browse our collection today.</p>
                    </div>
                </div>
                <img className='h-[600px] rounded-xl w-full object-cover' src={image4} alt="Artwork 4" />
            </div>
        </SwiperSlide>
    </Swiper>
    <div className="absolute inset-0 flex items-center justify-between">
        <div className="swiper-button-prev" onClick={goPrev}>
            &lt;
        </div>
        <div className="swiper-button-next" onClick={goNext}>
            &gt;
        </div>
    </div>
</div>

    );
};

export default Banner;
