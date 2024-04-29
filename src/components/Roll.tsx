"use client"
import React from 'react';
import Image from 'next/image';

// Roll component
const Roll = () => {
    return (
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
    );
};

export default Roll;
