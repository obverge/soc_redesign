import Head from "next/head";
import { GoldBackground } from "../../components/GoldBackground";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
        <main className="overflow-hidden">
			<Head>
				<title> MUN Eng Society | Charity Ball</title>
			</Head>
            <div className="min-h-screen w-full bg-gradient-to-b from-charity-ball-dark-blue from-20% to-charity-ball-light-blue flex flex-col items-center relative">
                <GoldBackground/>
                <div className="w-full h-full min-h-fit items-center flex flex-col text-center md:pt-40 pt-32">
                  <div className="[text-shadow:_2px_3px_4px_rgb(20_30_60_/_1)] w-2/3 z-10 flex flex-col justify-center items-center text-charity-ball-gold mt-10">
                    <div className="font-kapakana md:text-8xl text-6xl">
                      <h1>18th Annual Winter</h1>
                      <h2>Charity Ball</h2>
                    </div>
                    <div className="pt-10 lg:text-4xl text-3xl font-maven_bold">
                      <h2>Memorial University of Newfoundland</h2>
                      <h2>Engineering Society ‘A’ in support of</h2>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-slate-100 font-maven text-justify text-xl [text-shadow:_2px_2px_5px_rgb(100_100_100_/_0.6)]">
                    <div className="relative z-10 grid md:grid-cols-2 grid-cols-1 gap-10 md:w-2/3 w-4/5 mt-10 mb-10 place-items-center">
                      <div className="xl:w-1/2 flex items-center flex-col order-1 md:order-none border-solid">
                        <Link href="https://iriskirbyhouse.ca/">
                          <Image src="../res/charityball/2025/iris_kirby_house.png"  alt="ALS NL Logo" width={500} height={500}/>
                        </Link>
                      </div>
                      <div className="xl:w-2/5 w-3/4 justify-center order-3 md:order-none">
                        <Link href="https://iriskirbyhouse.ca/">
                          <Image src="../res/charityball/2025/ALS_NL logo without bg.png" href="https://walktoendals.ca/" alt="ALS NL Logo" width={500} height={500}/>
                        </Link>
                      </div>

                      <p className="md:col-span-1 order-2 md:order-none sm:text-white">The Iris Kirby House has been operating for over 40 years to provide shelter and a safe haven for women and children experiencing intimate partner violence. They provide 24- hour distress lines for women experiencing physical, psychological, emotional, sexual and/or financial abuse, offering non-judgmental support and housing.</p>
                      <p className="md:col-span-1 order-4 md:order-none">The ALS Society of Newfoundland and Labrador is a registered charity committed to providing support to ALS clients, their families, and their caregivers, while helping to find the cause of and a cure for ALS. They have worked tirelessly to increase public awareness of the personal and social impacts of this disease, and to raise funding that goes toward patient services and research.</p>
                      
                    </div>
                  </div>   
                  <div className="relative z-10 flex flex-row w-1/2 justify-center mt-10 mb-10 [text-shadow:_0_2px_2px_rgb(40_60_120_/_0.7)]  lg:text-4xl text-3xl font-maven_bold text-charity-ball-gold">
                    <h3>February 6th 2026 at the Bella Vista</h3>
                  </div>
                </div>
            </div>
        </main>
        )
}
