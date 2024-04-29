import EventPage from '@/components/EventPage'; // Importing EventPage component
import Link from 'next/link'; // Importing Link component from Next.js
import FirstPageImages from '@/components/FirstPageImage'; // Importing FirstPageImages component
import Image from 'next/image'; // Importing Image component from Next.js
import Roll from '@/components/Roll'; // Importing Roll component

// Home page component
export default function FirstPage() {

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
                    <FirstPageImages />
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
            <Roll />
            {/* Displaying EventPage component */}
            <EventPage />
        </div>
        </main>
    )
}
