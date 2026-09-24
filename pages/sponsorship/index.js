import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import SponsorShowcase from "../../components/SponsorShowcase";

export default function Sponsorship({ sponsorLogos }) {
    return (
        <>
            <Head>
                <title>MUN Eng Society | Sponsorship</title>
            </Head>
            <PageHeroWithImage
                label="Sponsorship"
                title="Support Engineers & Events"
                description="Partner with the society to sponsor student events, design teams, and academic programs."
                imageSrc="/res/pageheaders/sponsorship.jpg"
            />
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-950">Partner with MUN engineering students</h2>
                            <p className="mt-4 text-slate-600">
                                Sponsorship helps fund Charity Ball, design competitions, conference travel, and student leadership programs. Learn how your organization can support Memorial engineering through donations, mentorship, and in-kind contributions.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                                <h3 className="font-semibold text-slate-950">Event sponsorship</h3>
                                <p className="mt-3 text-slate-600">Support society events, student-led competitions, and community outreach through financial or resource sponsorship.</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                                <h3 className="font-semibold text-slate-950">Student development</h3>
                                <p className="mt-3 text-slate-600">Help students gain real-world experience with project funding, industry mentorship, and academic partnership opportunities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 space-y-8">
                        <div>
                            <Link href="/contact" className="inline-flex rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
                                Discuss sponsorship opportunities
                            </Link>
                        </div>
                        <SponsorShowcase sponsors={sponsorLogos} />
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const logosPath = path.join(process.cwd(), "public", "res", "sponsor_logos");
    let sponsorLogos = [];

    try {
        sponsorLogos = fs.readdirSync(logosPath)
            .filter((file) => /\.(png|jpe?g|webp|svg|gif)$/i.test(file))
            .sort()
            .map((file) => `/res/sponsor_logos/${file}`);
    } catch (error) {
        sponsorLogos = [];
    }

    return {
        props: {
            sponsorLogos,
        },
    };
}
