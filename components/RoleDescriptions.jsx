import Head from "next/head";
import Image from "next/image";
import Parallax from "/components/Parallax";

export default function RoleDescriptions() {
    return (
        <main className="repeating-bg">
            <Head>
                <title>MUN Eng Society | Role Descriptions</title>
            </Head>

            {/* Parallax Header */}
            <Parallax image="../res/role_descriptions/roles_header.jpg">
                <div className="flex flex-col items-center pt-10 pb-16 text-center text-white lg:pt-24">
                    <h1 className="font-norwester text-4xl font-bold lg:text-6xl xl:text-7xl">
                        JUNIOR POSITIONS
                    </h1>
                    <p className="mt-6 max-w-4xl px-8 font-maven text-lg lg:text-2xl">
                        Explore the different roles within the Engineering Society. Each
                        position plays an important part in supporting students, teams,
                        and events throughout the year. Applications open in December/January.
                    </p>
                </div>
            </Parallax>

            {/* Divider */}
            <div
                id="paralaxdivider"
                className="h-5 border-t-4 border-black bg-gradient-to-b from-mun-burgundy to-stone-400"
            />

            {/* Role Images */}
            <section className="px-5 py-10 lg:px-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {/* Role 1 */}
                    <div className="flex justify-center">
                        <Image
                            src="/res/role_descriptions/external.jpg"
                            alt="Junior VP External"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Role 2 */}
                    <div className="flex justify-center">
                        <Image
                            src="/res/role_descriptions/internal.jpg"
                            alt="Junior VP Internal"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Role 3 */}
                    <div className="flex justify-center">
                        <Image
                            src="/res/role_descriptions/academic.jpg"
                            alt="Junior VP Academic"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Role 4 */}
                    <div className="flex justify-center">
                        <Image
                            src="/res/role_descriptions/finance.jpg"
                            alt="Junior VP Finance"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Role 5 */}
                    <div className="flex justify-center">
                        <Image
                            src="/res/role_descriptions/advisory.jpg"
                            alt="Junior VP Advisory"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Role 6 */}
                    <div className="flex justify-center">
                        <Image
                            src="/res/role_descriptions/advisory_committee.jpg"
                            alt="Junior Advisory Committee"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                </div>
            </section>

            {/* Bottom Link */}
            <div className="flex justify-center pb-16">
                <button
                    className="rounded-full bg-black px-8 py-4 font-norwester text-xl text-white transition hover:scale-105"
                    onClick={() =>
                        window.open("https://munengineeringsociety.ca/links", "_blank")
                    }
                >
                    Important Links
                </button>
            </div>
        </main>
    );
}
