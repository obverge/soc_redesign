import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Disciplines from "/components/Disciplines";
import QuickLinkCard from "/components/QuickLinkCard";
import eventsData from "public/json/events.json";

export default function Home() {
	const upcomingEvents = eventsData.slice(0, 3);

	return (
		<>
			<Head>
				<title>MUN Engineering Society</title>
			</Head>

			<section className="border-b border-slate-200 bg-white">
				<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Memorial University</p>
					<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
						Your Engineering Community
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
						Representing, advocating, and creating resources for all engineering students at Memorial University.
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<Link href="/events" className="rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
							View Events
						</Link>
						<Link href="/aboutus" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
							Meet the Team
						</Link>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="grid gap-4 md:grid-cols-3">
					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Student hub</p>
						<h2 className="mt-4 text-xl font-semibold text-slate-950">Everything engineering students need in one place</h2>
						<p className="mt-3 text-slate-600">Events, teams, conferences, sponsors, and contact pathways — all built for Memorial engineering students.</p>
					</div>
					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Industry partners</p>
						<h2 className="mt-4 text-xl font-semibold text-slate-950">Connect companies with student teams</h2>
						<p className="mt-3 text-slate-600">Sponsor events, host student presentations, or recruit talented MUN engineers for internships and co-op.</p>
					</div>
					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Conferences</p>
						<h2 className="mt-4 text-xl font-semibold text-slate-950">Attend and apply to top events</h2>
						<p className="mt-3 text-slate-600">See what students have attended, what’s open now, and how to find new engineering conference opportunities.</p>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-slate-950">Disciplines</h2>
					<p className="mt-2 text-slate-600">Explore programs across Memorial's Faculty of Engineering.</p>
				</div>
				<Disciplines />
			</section>

			<section className="border-t border-slate-200 bg-slate-50">
				<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
					<h2 className="mb-8 text-2xl font-semibold text-slate-950">Explore</h2>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<QuickLinkCard href="/academics" title="Academics" description="Co-op guides, discipline overviews, capstone projects, and campus resources." icon="school" />
					<QuickLinkCard href="/events" title="Events" description="Socials, tournaments, and society events — see what's coming up." icon="event" />
					<QuickLinkCard href="/sports" title="Sports" description="See championship winners, rivalry history, and team highlights from past seasons." icon="sports_soccer" />
					<QuickLinkCard href="/getinvolved" title="Get Involved" description="Design teams, student organizations, and volunteer opportunities." icon="groups" />
						<QuickLinkCard href="/conferences" title="Conferences" description="Find student conferences, application deadlines, and travel resources." icon="public" />
						<QuickLinkCard href="/sponsorship" title="Sponsorship" description="Partner with the society for Charity Ball, orientation, and student events." icon="volunteer_activism" />
						<QuickLinkCard href="/contact" title="Contact" description="Reach society leadership, sponsors, or partners for academic and event support." icon="mail" />
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
				<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<div className="grid gap-6 lg:grid-cols-3">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Sponsor & recruit</p>
							<h3 className="mt-4 text-xl font-semibold text-slate-950">Host a presentation</h3>
							<p className="mt-3 text-slate-600">Companies can connect with engineering students through info sessions, recruitment workshops, and guest talks.</p>
						</div>
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Conferences</p>
							<h3 className="mt-4 text-xl font-semibold text-slate-950">Discover applications and travel opportunities</h3>
							<p className="mt-3 text-slate-600">Track conferences attended by students, open application windows, and self-sourced engineering events.</p>
						</div>
						<div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Let’s collaborate</p>
								<h3 className="mt-4 text-xl font-semibold text-slate-950">Sponsor an event or hackathon</h3>
								<p className="mt-3 text-slate-600">Build deeper partnerships with design teams, corporate recruitment, and student-run competitions.</p>
							</div>
							<Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#832633] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</section>

			{upcomingEvents.length > 0 ? (
				<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
					<div className="mb-8 flex items-end justify-between">
						<div>
							<h2 className="text-2xl font-semibold text-slate-950">Upcoming Events</h2>
							<p className="mt-2 text-slate-600">Don't miss what's happening this month.</p>
						</div>
						<Link href="/events" className="hidden text-sm font-semibold text-[#832633] hover:underline sm:block">
							View all →
						</Link>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{upcomingEvents.map((event, i) => (
							<Link
								key={i}
								href="/events"
								className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
							>
								<p className="text-sm font-semibold text-[#832633]">{event.date}</p>
								<h3 className="mt-1 text-lg font-semibold text-slate-950">{event.name}</h3>
								{event.location ? <p className="mt-1 text-sm text-slate-600">{event.location}</p> : null}
							</Link>
						))}
					</div>
				</section>
			) : null}

		</>
	);
}
