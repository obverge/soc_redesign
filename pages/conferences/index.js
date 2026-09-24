import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import ConferenceStoryCard from "../../components/ConferenceStoryCard";
import ConferenceStoryModal from "../../components/ConferenceStoryModal";
import conferenceStories from "public/json/conference-stories.json";

export default function Conferences() {
    const [activeStory, setActiveStory] = useState(null);
    const stories = Array.isArray(conferenceStories.stories) ? conferenceStories.stories : [];
    const categories = conferenceStories.categories || ["Leadership", "Student Presentations", "Competition"];

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
            <section className="mx-auto max-w-7xl px-5 py-12 text-white sm:px-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-950">Conference support for students</h2>
                            <p className="mt-4 text-slate-600">
                                Explore deadlines, travel policies, funding opportunities, and student-hosted events. We help teams and individuals apply, prepare, and represent Memorial engineering at regional and national conferences.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                                <h3 className="font-semibold text-slate-950">Apply with confidence</h3>
                                <p className="mt-3 text-slate-600">Learn how to find open conference calls for papers, posters, and design competitions with step-by-step guidance.</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                                <h3 className="font-semibold text-slate-950">Travel & funding</h3>
                                <p className="mt-3 text-slate-600">See how the society supports conference travel, lodging, and registration for student presenters and team members.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
                            Contact us about conferences
                        </Link>
                        <a
                            href="https://forms.gle/T65mWuAnsjDyN64K6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]"
                        >
                            Self Sources Conference Funding Form
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-16 text-white sm:px-8">
                {stories.length === 0 ? (
                    <div className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-white">Past conferences & what we learned</h2>
                            <p className="mt-3 max-w-2xl text-white/75">
                                Browse recent conference experiences, key sessions attended, and the lessons our students brought back to campus.
                            </p>
                        </div>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Conference archive</p>
                            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{conferenceStories.emptyState?.title || "No conference stories uploaded yet"}</h2>
                            <p className="mt-4 max-w-3xl text-slate-600">{conferenceStories.emptyState?.description || "Conference recaps and travel notes will be added when official stories are ready."}</p>
                            <p className="mt-4 text-sm text-slate-500">{conferenceStories.emptyState?.note || "Check back later for updated student conference highlights."}</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {categories.map((category) => (
                                <div key={category} className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#832633]/10 text-xl font-bold text-[#832633]">
                                        {category.charAt(0)}
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{category}</h3>
                                    <p className="mt-2 text-sm text-slate-600">Conference recaps will be added here once official entries are uploaded.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-white">Past conferences & what we learned</h2>
                            <p className="mt-3 max-w-2xl text-white/75">
                                Browse recent conference experiences, key sessions attended, and the lessons our students brought back to campus.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {stories.map((story) => (
                                <ConferenceStoryCard
                                    key={story.slug}
                                    {...story}
                                    onOpen={() => setActiveStory(story)}
                                />
                            ))}
                        </div>
                    </>
                )}
            </section>

            <ConferenceStoryModal story={activeStory} onClose={() => setActiveStory(null)} />
        </>
    );
}
