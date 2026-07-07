import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import ConferenceStoryCard from "../../components/ConferenceStoryCard";
import ConferenceStoryModal from "../../components/ConferenceStoryModal";
import conferenceStories from "public/json/conference-stories.json";

export default function Conferences() {
    const [activeStory, setActiveStory] = useState(null);

    return (
        <>
            <Head>
                <title>MUN Eng Society | Conferences</title>
            </Head>
            <PageHeroWithImage
                label="Conferences"
                title="Student Conferences & Events"
                description="Find upcoming student conferences, application deadlines, travel support, and how to get involved."
                imageSrc="/res/pageheaders/conferences.JPG"
            />
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-950">Conference support for students</h2>
                            <p className="mt-4 text-slate-600">
                                Explore deadlines, travel policies, funding opportunities, and student-hosted events. We help teams and individuals apply, prepare, and represent Memorial engineering at regional and national conferences.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-3xl bg-slate-50 p-6">
                                <h3 className="font-semibold text-slate-950">Apply with confidence</h3>
                                <p className="mt-3 text-slate-600">Learn how to find open conference calls for papers, posters, and design competitions with step-by-step guidance.</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-6">
                                <h3 className="font-semibold text-slate-950">Travel & funding</h3>
                                <p className="mt-3 text-slate-600">See how the society supports conference travel, lodging, and registration for student presenters and team members.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
                            Contact us about conferences
                        </Link>
                        <Link href="/https://forms.gle/T65mWuAnsjDyN64K6" className="inline-flex rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
                            Self Sources Conference Funding Form
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-slate-950">Past conferences & what we learned</h2>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Browse recent conference experiences, key sessions attended, and the lessons our students brought back to campus.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {conferenceStories.map((story) => (
                        <ConferenceStoryCard
                            key={story.slug}
                            {...story}
                            onOpen={() => setActiveStory(story)}
                        />
                    ))}
                </div>
            </section>

            <ConferenceStoryModal story={activeStory} onClose={() => setActiveStory(null)} />
        </>
    );
}
