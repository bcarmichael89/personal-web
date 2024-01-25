import Link from 'next/link'
import Image from 'next/image'
import Portrait from './Me.JPG'

export default function about() {
    return (
        <main className="flex flex-col items-start relative min-h-screen">
    <div id="about-page" className="h-auto"></div>

    <div className="absolute ml-[-14rem] mt-[-2rem]">
        <Link href="/">
            <button className="btn-primary">Home</button>
        </Link>
    </div>
            <h2 className="absolute left-1/2 top 1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">About me</h2>



            <div className="relative mt-20 mx-auto text-center">
                <Image
                    src={Portrait}
                    alt="Portrait"
                    width={300}
                    height={300}
                    quality={100}
                    className="mx-auto"
                />
                <div className="mt-7">
                <p style={{ lineHeight: '2' }}>
                        My name is Braden Carmichael and I am currently a student at the University of Victoria pursuing a combined degree in Geography and Computer Science.
                        I am currently in my third year of studies and loving my degree and all that it has to offer. I have a passion for learning and love piecing together
                        the puzzle that is programming. Alongside that, I love learning about the world around me using tools such as GIS and remote sensing. I am currently
                        looking for a co-op position for the summer of 2024 to gain valuable experience. I was raised in Colorado but moved to Canada in 2021 to attend University, having
                        citizenship for both these countries making this very easy.
                    </p>
                </div>
            </div>
            

            </main>
        
    )
}
