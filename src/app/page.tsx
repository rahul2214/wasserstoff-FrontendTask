import Image from "next/image"
import Link from "next/link"

// This is the main component for the Home page
export default function Home() {
  return (
    <main className="main">
    <div className="Group1171274884">
      {/* Link to navigate to '/firstpage' */}
      <Link href={'/firstpage'}>
        {/* Header section */}
        <header className="flex flex-row items-center p-0 absolute w-96 h-12 left-24 top-24">
          {/* Logo */}
          <Image src="/AstrixLogo.png" alt="Logo" width={406} height={50} />
        </header>

        {/* Main content */}
        <div className="absolute w-2/3 h-1/2 left-0 top-0">
          {/* Text: 'WE' */}
          <div className="absolute w-28 h-11 left-56 top-72 font-bold text-6xl font-lexend leading-1 text-black">WE</div>
          {/* Image: first */}
          <div className="absolute w-96 h-16 bg-cover bg-center left-80 top-72 ml-2">
            <Image src="/image143.png" alt="first" width={523} height={349} />
          </div>
          {/* Text: 'ORGANIZE THE' */}
          <div className="ORGANIZETHE absolute h-16 top-72 font-bold text-black flex items-center pl-3  font-Lexend  text-6xl"> ORGANIZE THE</div>
          {/* Text: 'CONNECTION' */}
          <div className="absolute h-16 left-56 top-96 font-Lexend text-6xl text-black font-bold" style={{ width: '453px' }}>CONNECTION</div>
          {/* Frame1261154652 */}
          <div className="Frame1261154652">
            <Image src="/image141.png" alt="" width={590} height={819} />
          </div>
          {/* ORGANIZETHE1 */}
          <div className="ORGANIZETHE1"> </div>
          {/* Frame1261154653 */}
          <div className="Frame1261154653">
            <Image src="/image144.png" alt="" width={482} height={601} />
          </div>
          {/* Animation1 */}
          <div className="animation1">
            {/* Text: 'BETWEEN' */}
            <div className="BETWEEN absolute pl-3 w-80 h-20 font-Lexend font-bold text-6xl text-black">BETWEEN</div>
            {/* Frame1261154660 */}
            <div className="Frame1261154660">
              <Image src="/image145.png" alt="" width={286} height={431} />
            </div>
            {/* Text: 'MUSIC' */}
            <div className="absolute pl-3 w-56 h-20 font-Lexend font-bold text-6xl text-black" style={{ left: '1050px', top: '500px' }}>MUSIC</div>
          </div>
          {/* Text: 'ARTIST' */}
          <div className="absolute w-60 h-11 left-56 font-Lexend font-bold text-6xl text-black" style={{ top: '605px' }}>ARTIST</div>
          {/* Frame1261154661 */}
          <div className="Frame1261154661 ">
            <Image src="/image147.png" alt="" width={331} height={363} />
          </div>
          {/* Animation2 */}
          <div className="animation2">
            {/* Text: 'CULTURE' */}
            <div className="CULTURE absolute pl-3 w-72 h-20  font-Lexend font-bold text-6xl text-black">CULTURE</div>
            {/* Frame1261154662 */}
            <div className="Frame1261154662">
              <Image src="/image146.png" alt="" width={564} height={372} />
            </div>
          </div>
          {/* ORGANIZETHE2 */}
          <div className="ORGANIZETHE2 font-Lexend"> </div>
          {/* Frame1261154663 */}
          <div className="Frame1261154663">
            <Image src="/image139.png" alt="" width={414} height={654} />
          </div>
          {/* Animation3 */}
          <div className="animation3">
            {/* Text: 'ART' */}
            <div className="ART absolute w-32 h-20 pl-3 left-457 top-731 font-Lexend font-bold text-6xl text-black">ART</div>
            {/* Frame1261154664 */}
            <div className="Frame1261154664">
              <Image src="/image137.png" alt="" width={288} height={288} />
            </div>
            {/* Text: 'COLLECTIONS' */}
            <div className="COLLECTIONS1 absolute h-20 font-Lexend font-bold text-6xl text-black">& COLLECTIONS</div>
          </div>
        </div>
      </Link>
    </div>
    </main>
  )
}
