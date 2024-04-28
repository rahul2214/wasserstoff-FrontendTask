import Link from 'next/link'; // Importing Link component from Next.js
import Roll from '@/components/Roll'; // Importing Roll component
import Image from 'next/image'; // Importing Image component from Next.js
import SecondPageImages from '@/components/SecondPageImage'; // Importing SecondPageImages component

// Home page component
export default function Home() {

    return (
        <div className="container">
            {/* Header section */}
            <header className=" flex flex-row items-center p-0 absolute w-40 h-16 left-20 top-6">
                {/* Logo */}
                <Image src="/Astrix.png" alt="Logo" width={60} height={60} />
                <Image src="/logo.png" alt="Logo" width={163} height={64} />
            </header>
            {/* Main section */}
            <main className="main">
                {/* Text: ASTRIX COLLECTIBLE */}
                <div className="absolute w-96 left-9 top-40 flex items-center font-lexend font-bold text-white text-opacity-20 text-9xl">ASTR
                    <br /> IX
                    <br /><br />COLL <br />ECTI <br />BLE</div>
            </main>
            {/* Displaying SecondPageImages component */}
            <div className="absolute left-14 top-40" style={{ height: '600px', width: '750px' }}>
                <SecondPageImages />
            </div>
            {/* Displaying Roll component */}
            <Roll />
            {/* Text: Explore Your First Collectible */}
            <div className="absolute w-80 h-16 left-2/3 top-14 font-bold text-white text-2xl leading-32"> Explore Your First Collectible</div>
            {/* Collection information */}
            <div className="absolute w-96 h-96 left-2/3 top-0">
                <div className="absolute flex flex-col items-start p-0 gap-8 top-40 w-96 h-376 left-0 top-168">
                    <div className=" flex flex-col items-start p-0 gap-12 w-316 h-302 flex-none order-0 flex-grow-0">
                        {/* Text: Meta Lives */}
                        <div className="absolute w-18 h-9 left-6.16 top-0.56 font-bold text-5xl leading-8 text-white flex-none order-0 flex-grow-0 ">Meta
                            <br /> <br />Lives</div>
                        {/* Text: Live in Astrix */}
                        <div className="absolute w-255 h-32 font-bold text-lg leading-8 top-28 text-white flex-none order-1 flex-grow-0">Live in Astrix</div>
                        {/* Description */}
                        <div className="absolute w-64 h-104 font-lexend font-semibold top-40 text-white text-base leading-6 tracking-tighter flex-none order-2 flex-grow-0">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</div>
                    </div>
                    <div className=" w-96 h-11 flex-none order-1 flex-grow-0">
                        {/* Colored circles */}
                        <div className="absolute w-150 h-40 left-0 top-64 flex flex-row items-center">
                            <Image src="/Ellipse 1.png" alt="first" width={40} height={40} />
                            <Image src="/Ellipse 2.png" alt="first" width={40} height={40} style={{ marginLeft: '-10px' }} />
                            <Image src="/Ellipse 4.png" alt="first" width={40} height={40} style={{ marginLeft: '-10px' }} />
                            <Image src="/Ellipse 4.png" alt="first" width={40} height={40} style={{ marginLeft: '-10px' }} />
                            <Image src="/Ellipse 5.png" alt="first" width={40} height={40} style={{ marginLeft: '-10px' }} />
                        </div>
                        {/* Text: 22k people interested */}
                        <div className="absolute w-212 h-44 left-48 top-80 font-lexend font-medium text-white text-lg leading-44">22k people interested</div>
                        {/* Text: Collectibles */}
                        <div className="relative h-20 top-96 font-lexend font-medium text-white text-base leading-18"> Collectibles</div>
                    </div>
                </div>
                {/* Card section */}
                <div className="absolute w-448 h-225 left-992 top-full">
                    <div className="flex flex-row items-start gap-2 absolute w-164.08 h-56 left-96 top-60">
                        {/* Card */}
                        <div className='CardSmall'>
                            {/* Text: 2024 */}
                            <div className='a2024'><div className='t2024'>2024</div></div>
                            {/* Text: By Pablo */}
                            <div className='ByPablo'>By Pablo</div>
                            {/* Text: Collectible Name */}
                            <div className='CollectibleName'>Collectible Name</div>
                            {/* Image */}
                            <div className='cardImage'>
                                <Image src="/image14.png" alt="third" width={143} height={179} />
                            </div>
                        </div>
                    </div>
                    {/* Add more cards as needed */}
                </div>
            </div>
            {/* Button: Join Waitlist */}
            <button className="flex flex-row justify-center items-center p-2 gap-2 absolute w-48 h-14 right-14 bg-yellow-300 rounded-full" style={{ top: '937px' }}>
                <div className=" w-40 h-8 font-lexend font-bold text-2xl text-gray-700">Join Waitlist</div>
            </button>
            {/* Navigation buttons */}
            <div className='toggle'>
                <div className='rectangle1'>
                    {/* Link to Events page */}
                    <button className='rectangle4' ><Link href="/firstpage">Events</Link></button>
                    {/* Link to Collections page */}
                    <button className='rectangle3'> <Link href="/secondpage">Collections</Link>    </button>
                </div>
            </div>
        </div>
    )
}
