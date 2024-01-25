import Link from 'next/link'
import Image from 'next/image'
import Kelowna from './FishKelowna.png'
import VictoriaBus from './VictoriaBusDesert.png'
import Victorialand from './MapOfVictoria.png'

export default function mapping() {
    return (
        <main>
            <div className="absolute ml-[-14rem] mt-[-2rem]">
                <Link href="/projects">
                    <button className="btn-primary">Back</button>
                </Link>
            </div>
            <h2 className="text-center">Mapping</h2>


            <div className="flex mt-10 justify-center items-center text-center">
                <div className='mr-32 flex-shrink-0'>
                <Image
                    src={Kelowna}
                    alt="Kelowna"
                    width={250}
                    height={250}
                    quality={100}
                   />
                   <p className="max-w-xs mx-auto ml-[-2rem] mt-3">Each individual fish habitat and the overlying protected areas of Kelowna.  Made by arcGIS pro</p>
                </div>
                
                <div className="flex-shrink-0">
                <Image
                    src={Victorialand}
                    alt="VictoriaLand"
                    width={430}
                    height={430}
                    quality={100}
                    />
                    <p className="max-w-xs mx-auto mt-3">Victoria catorgized by land types</p>
                    </div>


                    <div className="ml-32 flex-shrink-0">
                <Image
                    src={VictoriaBus}
                    alt="VictoriaBus"
                    width={250}
                    height={250}
                    quality={100}
                    />
                    <p className="max-w-xs mx-auto ml-[-2rem] mt-3">Illustration of the most severe bus drought area in the Greater Victoria.  Made by arcGIS </p>
                    </div>



                </div>
        </main>
        
    )
}