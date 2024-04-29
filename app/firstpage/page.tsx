"use client"
import React from 'react';
import Link from 'next/link'; // Importing Link component from Next.js
import Image from 'next/image'; // Importing Image component from Next.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Home page component
export default function FirstPage() {
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
        <main className="main">
        <div className="container">
            {/* Header section */}
            <header className=" flex flex-row items-center p-0 absolute w-40 h-16 left-20 top-6">
                {/* Logo */}
                <Image src="/Astrix.png" alt="Logo" width={60} height={60} />
                <Image src="/logo.png" alt="Logo" width={163} height={64} />
            </header>
            {/* Main section */}
            
                {/* Text: ASTRIX EVENTS */}
                <div className="absolute w-96 text-9xl left-9 top-40 flex items-center font-lexend font-bold text-white text-opacity-20" >
                    ASTR
                    <br />IX
                    <br />
                    <br />
                    EVE
                    <br />NTS
                </div>
                {/* Displaying FirstPageImages component */}
                <div className="absolute left-14 top-56" style={{ height: '600px', width: '750px' }}>
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
                </div>
        
            {/* Navigation buttons */}
            <div className="toggle">
                <div className="rectangle1">
                    {/* Link to Events page */}
                    <button className="rectangle2" ><Link href="/firstpage">Events</Link></button>
                    {/* Link to Collections page */}
                    <button className="rectangle12"> <Link href="/secondpage">Collections</Link>    </button>
                </div>
            </div>
            {/* Displaying Roll component */}
                <div className='Roll'>
                    {/* Rectangle container */}
                    <div className='Rectangle'>
                        {/* Text content */}
                        <div className='text'>
                            {/* Event details */}
                            Event: Oasis Bus tour, JLN Stadium, Delhi
                            {/* Star icon */}
                            <Image src="/star.png" alt="Star" width={38} height={38} className=" w-10 h-10" />
                            {/* Collection Live details */}
                            Collection Live: Meta Lives, live on Astrix
                        </div>
                    </div>
                </div>
            {/* Displaying EventPage component */}
                <div className="flex flex-col items-center justify-center h-screen">
                    {/* Title: Explore Your First Event */}
                    <h1 className="absolute w-72 h-16 top-14 font-lexend font-bold text-white text-2xl" style={{ left: '958px' }}>Explore Your First Event</h1>
                    <div className="p-20 max-w-96">
                        {/* Event Name */}
                        <h1 className="absolute w-80 h-20 top-48 font-lexend font-bold text-white text-5xl" style={{ left: '958px' }}>Event Name</h1>
                        {/* Venue and Date */}
                        <div className="flex flex-row items-start gap-7 absolute w-96 h-7 left-964 top-72" style={{ left: '962px' }} >
                            <div className="flex flex-row items-end gap-3 w-28 h-7">
                                {/* Location icon */}
                                <Image src="/Icons.png" alt="location" width={27} height={27} />
                                {/* Venue */}
                                <div className="flex-none order-1 flex-grow-0 w-16 h-7 font-medium text-white text-lg leading-28">Venue</div>
                            </div>
                            <div className='Frame1261154682'>
                                {/* Clock icon */}
                                <Image src="/clock.png" alt="clock" width={27} height={27} />
                                {/* Date and time */}
                                <div className="flex-none order-1 flex-grow-0 w-52 h-7 font-medium text-white text-lg leading-28">04/3/2024 @19:00</div>
                            </div>
                        </div>
                        {/* Event Description */}
                        <div className="absolute w-80 h-28 left-964 top-80 font-medium text-white text-base leading-24 tracking-wide" style={{ left: '958px' }} >
                            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
                        </div>
                        {/* Artist Lineup */}
                        <div className="absolute w-40 h-8 font-semibold text-white text-xl leading-32" style={{ top: '470px', left: '964px' }}>
                            Artist Lineup:</div>
                        {/* Images of artists */}
                        <div className='Frame1261154686'>
                            <Image src="/image157.png" alt="first" width={145} height={150} />
                        </div>
                        <div className='Frame1261154685'>
                            <Image src="/image159.png" alt="third" width={145} height={145} />
                        </div>
                        <div className='Frame1261154684'>
                            <Image src="/image158.png" alt="second" width={192} height={198} />
                        </div>
                        {/* QR code */}
                        <Image style={{ top: '884px', left: '949px' }} className="absolute w-28 h-28 left-949 top-884 rounded-md" src="/qr.png" alt="QR" width={105} height={105} />

                        {/* Button: Join Waitlist */}
                        <button className="flex flex-row justify-center items-center p-2 gap-2 absolute w-48 h-14 right-14  bg-yellow-300 rounded-full" style={{ top: '937px',left:'1200px' }}>
                            <div className=" w-40 h-8 font-lexend font-bold text-2xl text-gray-700">Join Waitlist</div>
                        </button>
                    </div>
                </div>
        </div>
        </main>
    )
}
