import React from 'react';
import Image from 'next/image';

// EventPage component
const EventPage = () => {


    return (
        <main className="main">
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
                        <Image src="/icons.png" alt="location" width={27} height={27} />
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
                <button className="flex flex-row justify-center items-center p-2 gap-2 absolute w-48 h-14 right-14  bg-yellow-300 rounded-full" style={{ top: '937px' }}>
                    <div className=" w-40 h-8 font-lexend font-bold text-2xl text-gray-700">Join Waitlist</div>
                </button>
            </div>
        </div>
        </main>
    );
};

export default EventPage;
