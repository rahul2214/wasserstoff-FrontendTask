"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Component for displaying images in a slider
const SecondPageImages = () => {
    // Settings for the slider
    const settings = {
        infinite: true,
        speed: 100,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1.6, // Number of slides visible at a time
        slidesToScroll: 1 // Number of slides to scroll
    };

    return (
        // Slider component with settings
        <Slider {...settings}>
            {/* Slide 1 */}
            <div>
                {/* Image */}
                <Image src="/Empty.png" alt="Slide 2" className="p-3" width={564} height={705} />
            </div>
            {/* Slide 2 */}
            <div>
                {/* Image */}
                <div className='LunarPalace'>
                    Lunar Palace: (ft. Kanye west)
                </div>
                <Image src="/image21.png" alt="Slide 2" className="p-3" width={564} height={705} />
            </div>
            {/* Slide 3 */}
            <div>
                {/* Image */}
                <div className='LunarPalace'>
                    Lunar Palace: (ft. Kanye west)
                </div>
                <Image src="/image13.png" alt="Slide 3" className="p-3" width={564} height={705} />
            </div>
            {/* Slide 4 */}
            <div >
                {/* Image */}
                <div className='LunarPalace'>
                    Lunar Palace: (ft. Kanye west)
                </div>
                <Image src="/image22.png" alt="Slide 1" className="p-3" width={564} height={705} />
            </div>
            {/* Slide 5 */}
            <div >
                {/* Image */}
                <div className='LunarPalace'>
                    Lunar Palace: (ft. Kanye west)
                </div>
                <Image src="/image16.png" alt="Slide 1" className="p-3" width={564} height={705} />
            </div>
            {/* Add more slides as needed */}
        </Slider>
    );
};

export default SecondPageImages;
