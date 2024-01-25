import Image from 'next/image'
import Link from 'next/link'
import UVIC from './UVIC.png'
export default function Navbar() {

     return(
            <nav>
            <Image
            src = {UVIC}
            alt = "UVIC"
            width = {100}
            quality = {100}
            placeholder = "blur"
            />


        </nav>
     )
}