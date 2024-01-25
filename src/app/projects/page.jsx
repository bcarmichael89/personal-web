import Image from 'next/image'
import MAP from './map-logo.png'
import art from './python-art.png'
import Link from 'next/link'
import plane from './airplane.png'

export default function projects() {
    return (
        <><div id="project-page" className="cover-screen">
      </div><main className="flex flex-col justify-start relative">

        <div className="absolute ml-[-14rem] mt-[-2rem]">
          <Link href="/">
            <button className="btn-primary">Home</button>
          </Link>

          </div>
          <h1 className="text-center">Projects</h1>

          <div className = "absolute left-3 top-16 ml-3 mt-16 w-56 h-56 border-blue-500 border-2 bg-blue-500 bg-opacity-100 rounded-lg flex flex-col items-center justify-center p-5">
            <Link href='/projects/mapping'>
              <div>
            <Image
            src = {MAP}
            alt = "MAP"
            width = {200}
            height = {200}
            quality = {100}
            placeholder = "blur"
            objectfit = "cover"
            />
            <p className="text-lg mt-[-1rem] text-black text-center">Mapping Projects</p>
            </div>
            </Link>
        </div>

        <div className = "absolute left-3 bottom-[-37rem] ml-3 w-56 h-56 rounded-lg flex flex-col items-center">
        <a href="https://github.com/bcarmichael89/Python-Art" target="_blank" rel="noopener noreferrer">
            <Image
            src = {art}
            alt = "art"
            width = {200}
            height = {100}
            quality = {100}
            placeholder = "blur"
            objectFit="fill"
            />
            <p className="text-lg mt-[-2rem] text-black text-center">Python Art</p>
            </a>
            </div>


            <div className = "absolute left-40 bottom-[-37rem] ml-40 w-56 h-56 rounded-lg border-red-500 border-2 bg-red-500 bg-opacity-100 rounded-lg flex flex-col items-center p-5">
        <a href="https://github.com/bcarmichael89/Airline-Data.python" target="_blank" rel="noopener noreferrer" className="mt-10">
            <Image
            src = {plane}
            alt = "plane"
            width = {300}
            height = {300}
            quality = {100}
            placeholder = "blur"
            objectFit="cover"
            />
            <p className="text-lg mt-[-1rem] text-black text-center">Python Airline Data</p>
            </a>
            </div>


            <div className = "absolute left-40 top-16 ml-40 mt-16 w-56 h-56 rounded-lg border-green-500 border-2 bg-green-500 bg-opacity-100 rounded-lg flex flex-col items-center p-5">
        <a href="https://github.com/bcarmichael89/Airline-Data-pt2.C" target="_blank" rel="noopener noreferrer" className="mt-10">
            <Image
            src = {plane}
            alt = "plane"
            width = {300}
            height = {300}
            quality = {100}
            placeholder = "blur"
            objectFit="cover"
            />
            <p className="text-lg mt-[-1] text-black text-center">C Airline Data</p>
            </a>
            </div>

      </main></>
    );
  }
