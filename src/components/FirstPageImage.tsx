"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// FirstPageImages component
const FirstPageImages = () => {
    // Slider settings
    const settings = {
        infinite: true, // Infinite loop
        speed: 100, // Transition speed
        autoplay: true, // Autoplay
        centerMode: true, // Center mode
        slidesToShow: 1.6, // Number of slides visible at a time
        slidesToScroll: 1 // Number of slides to scroll
        // Add more settings as needed
    };

    return (
        <Slider {...settings}>
            {/* Slide 1 */}
            <div>
                <Image src="/Empty.png" alt="Slide" width={564} height={705} className=" p-3" />
            </div>
            {/* Slide 2 */}
            <div>
                <Image src="/image12.png" alt="Slide 1" width={564} height={705} className=" p-3" />
            </div>
            {/* Slide 3 */}
            <div>
                <Image src="/image13.png" alt="Slide 2" className="p-3" width={564} height={705} />
            </div>
            {/* Slide 4 */}
            <div >
                <Image src="/image15.png" alt="Slide 3" className="p-3" width={564} height={705} />
            </div>
            {/* Slide 5 */}
            <div >
                <Image src="/image16.png" alt="Slide 4" className="p-3" width={564} height={705} />
            </div>
        </Slider>
    );
};

export default FirstPageImages;
