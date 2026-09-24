import Head from "next/head";
import { GoldBackground } from "../../components/GoldBackground";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-[#914653] text-white min-h-screen">
            <Head>
                <title>MUN Eng Society | Charity Ball</title>
            </Head>
            <div className="relative overflow-hidden">
                <div className="min-h-screen w-full bg-gradient-to-b from-charity-ball-dark-blue from-20% to-charity-ball-light-blue flex flex-col items-center">
                    <GoldBackground />
                    <div className="relative z-10 flex w-full flex-col items-center text-center pt-32 md:pt-40">
                        <div className="max-w-3xl text-charity-ball-gold [text-shadow:_2px_3px_4px_rgb(20_30_60_/_1)]">
                            <div className="font-kapakana text-6xl md:text-8xl">
                                <h1>18th Annual Winter</h1>
                                <h2>Charity Ball</h2>
                            </div>
                            <div className="mt-10 text-3xl lg:text-4xl font-maven_bold">
                                <h2>Memorial University of Newfoundland</h2>
                                <h2>Engineering Society ‘A’ in support of</h2>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-center px-4 w-full">
                            <div className="max-w-5xl rounded-[32px] bg-white/90 p-8 text-left text-slate-900 shadow-2xl backdrop-blur-xl">
                                <div className="grid gap-10 md:grid-cols-2">
                                    <div className="flex items-center justify-center">
                                        <Link href="https://iriskirbyhouse.ca/" target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Image src="../res/charityball/2025/iris_kirby_house.png" alt="Iris Kirby House logo" width={500} height={500} className="h-full w-full object-contain" />
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Link href="https://walktoendals.ca/" target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Image src="../res/charityball/2025/ALS_NL logo without bg.png" alt="ALS NL logo" width={500} height={500} className="h-full w-full object-contain" />
                                        </Link>
                                    </div>
                                    <div className="md:col-span-2 space-y-4 text-slate-700">
                                        <p>The Iris Kirby House has been operating for over 40 years to provide shelter and a safe haven for women and children experiencing intimate partner violence. They provide 24-hour distress lines for women experiencing physical, psychological, emotional, sexual and/or financial abuse, offering non-judgmental support and housing.</p>
                                        <p>The ALS Society of Newfoundland and Labrador is a registered charity committed to providing support to ALS clients, their families, and their caregivers, while helping to find the cause of and a cure for ALS. They have worked tirelessly to increase public awareness of the personal and social impacts of this disease, and to raise funding that goes toward patient services and research.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 text-center text-charity-ball-gold text-3xl lg:text-4xl font-maven_bold">
                            <h3>February 6th 2026 at the Bella Vista</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
