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

			<section className="relative isolate min-h-[620px] overflow-hidden bg-[#281d1b] sm:min-h-[680px]">
				<Image
					src="/res/location/engineering_building.jpeg"
					alt="The S.J. Carew Building at Memorial University"
					fill
					priority
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,16,15,0.9)_0%,rgba(25,16,15,0.7)_38%,rgba(25,16,15,0.18)_78%,rgba(25,16,15,0.05)_100%)]" />
				<div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-14 sm:min-h-[680px] sm:px-8 sm:pb-20">
					<div className="max-w-2xl text-white">
						<div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6aeb1]">
							<span className="h-px w-10 bg-[#d6aeb1]" />
							Memorial University
						</div>
						<h1 className="max-w-xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Your engineering community.</h1>
						<p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
							Built in the Carew Building, carried by students, and made warmer by the people who show up for one another.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link href="/events" className="rounded-full bg-[#6f2934] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#6f2934]">
								See what’s happening
							</Link>
							<Link href="/aboutus" className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
								Meet the society
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="border-b border-[#d7aaa4] bg-[#f8e8e5]">
				<div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_2fr] md:items-center">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">More than a degree</p>
						<h2 className="mt-2 text-2xl font-semibold text-[#4a1d24] sm:text-3xl">The people make the place.</h2>
					</div>
					<div>
						<p className="max-w-3xl text-base leading-7 text-[#6b4a4e]">
							From hallway hellos and late-night project work to Charity Ball, sports, conferences, and the traditions in between, the Engineering Society is where Memorial engineers find their people.
						</p>
						<div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-5 sm:gap-4">
							<div>
								<p className="text-2xl font-semibold text-[#832633]">1200+</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4a4e]">Students</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-[#832633]">20+</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4a4e]">Groups</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-[#832633]">7</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4a4e]">Disciplines</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-[#832633]">2</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4a4e]">Societies</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-[#832633]">1</p>
								<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4a4e]">Community</p>
							</div>
						</div>
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
						<QuickLinkCard href="/academics" title="Academics" description="Co-op guides, discipline overviews, capstone projects, and campus resources." icon="school" imageSrc="/res/pageheaders/academics.jpg" />
					<QuickLinkCard href="/events" title="Events" description="Socials, tournaments, and society events — see what's coming up." icon="event" imageSrc="/res/pageheaders/events.JPG" />
					<QuickLinkCard href="/sports" title="Sports" description="See championship winners, rivalry history, and team highlights from past seasons." icon="sports_soccer" imageSrc="/res/pageheaders/sports.jpg" />
					<QuickLinkCard href="/getinvolved" title="Get Involved" description="Design teams, student organizations, and volunteer opportunities." icon="groups" imageSrc="/res/pageheaders/getinvolved.jpeg" />
						<QuickLinkCard href="/conferences" title="Conferences" description="Find student conferences, application deadlines, and travel resources." icon="public" imageSrc="/res/pageheaders/conferences.JPG" />
						<QuickLinkCard href="/sponsorship" title="Sponsorship" description="Partner with the society for Charity Ball, orientation, and student events." icon="volunteer_activism" imageSrc="/res/pageheaders/sponsorship.jpg" />
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
