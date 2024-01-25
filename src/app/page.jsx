import Image from 'next/image'
import Link from 'next/link'
import linkedin from './linkedin.png'

export default function Home() {
  return (
    <main className="flex flex-col justify-start mt-2 relative">
      <div className="self-start">
        <h2 className="ml-[-10rem] mt-[-1rem]">Computer Science and Geography</h2>
      </div>

      <div className="flex flex-row ml-auto mt-[-2rem]">
        <Link href="/about">
          <button className="btn-primary mr-2">About Me</button>
        </Link>
        <Link href="/projects">
          <button className="btn-primary">Projects</button>
        </Link>
        <Link href="/Braden_Carmichael_Resume.pdf">
          <button className="btn-primary ml-2">Resume</button>
        </Link>
      </div>

      <h1 className="text-center mt-32">Braden Carmichael</h1>



      <div className="flex justify-center mt-96">
        <a href="https://www.linkedin.com/in/braden-carmichael-051988242/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="LinkedIn" width={75} height={75} />
        </a>
      </div>
    </main>
  )
}

