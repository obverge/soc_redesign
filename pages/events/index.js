import fs from "fs";
import path from "path";
import { useState } from "react";
import Head from "next/head";
import jsonData from "public/json/events.json";
import EventCalendar from "../../components/EventCalendar";
import EventDetailModal from "../../components/EventDetailModal";
import PageHeroWithImage from "../../components/PageHeroWithImage";

const data = jsonData;

const organizerLogos = {
	enactus: "/res/team_logos/enactus.png",
	edge: "/res/team_logos/eastern_edge.png",
	baja: "/res/team_logos/baja.png",
	paradigm: "/res/team_logos/paradigm.png",
	concrete: "/res/team_logos/concrete.png",
	chemecar: "/res/team_logos/chemecar.png",
	iceberg: "/res/team_logos/icebergasv.png",
	robosub: "/res/team_logos/robosub.png",
	phoenix: "/res/team_logos/phoenix.png",
	fsae: "/res/team_logos/fsae.png",
	force: "/res/team_logos/force_seven.png",
	engsoca: "/res/logos/society-a.png",
	engsocb: "/res/logos/society-b.png",
};

export default function Events({ eventGalleryImages = [] }) {
	const [view, setView] = useState("calendar");
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [selectedLogo, setSelectedLogo] = useState(null);

	const isEventUpcoming = (event) => {
		if (!event.endDate && !event.startDate) return false;
		const eventDate = new Date(event.endDate || event.startDate + "T23:59:59");
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return eventDate >= today;
	};

	const upcomingEvents = data.filter(isEventUpcoming);

	const openEvent = (event, logo) => {
		setSelectedEvent(event);
		setSelectedLogo(logo);
	};

	const closeModal = () => {
		setSelectedEvent(null);
		setSelectedLogo(null);
	};

	return (
		<>
			<Head>
				<title>MUN Eng Society | Events</title>
			</Head>

<PageHeroWithImage
			label="Events"
			title="What's Happening"
			description="Socials, tournaments, and society events. Events are tagged with Society A or Society B logos to show who's organizing."
			imageSrc="/res/pageheaders/events.JPG"
			imageAlt="Events"
		>
			<div className="mt-6 flex gap-2">
				<button
					onClick={() => setView("calendar")}
					className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
						view === "calendar" ? "bg-[#832633] text-white" : "border border-slate-300 text-slate-700 hover:bg-slate-50"
					}`}
				>
					Calendar
				</button>
				<button
					onClick={() => setView("list")}
					className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
						view === "list" ? "bg-[#832633] text-white" : "border border-slate-300 text-slate-700 hover:bg-slate-50"
					}`}
				>
					List
				</button>
			</div>
		</PageHeroWithImage>

			<div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
				{data.length === 0 ? (
					<div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
						<p className="text-lg font-semibold text-slate-950">No events right now</p>
						<p className="mt-2 text-slate-600">Check back soon for upcoming events.</p>
					</div>
				) : view === "calendar" ? (
					<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
						<EventCalendar events={data} organizerLogos={organizerLogos} onEventClick={openEvent} selectedEvent={selectedEvent} defaultDate={new Date()} />
						<EventDetailSidebar event={selectedEvent} organizerLogo={selectedLogo} />
					</div>
			) : upcomingEvents.length === 0 ? (
				<div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
					<p className="text-lg font-semibold text-slate-950">No upcoming events</p>
					<p className="mt-2 text-slate-600">Check back soon for future events.</p>
				</div>
			) : (
				<div className="grid gap-4">
					{upcomingEvents.map((event, i) => (
							<button
								key={i}
								onClick={() => openEvent(event, organizerLogos[event.organizer])}
								className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
							>
								{organizerLogos[event.organizer] ? (
									<img src={organizerLogos[event.organizer]} alt="" className="h-10 w-10 shrink-0 rounded-full object-contain" />
								) : null}
								<div className="flex-1">
									<p className="text-sm font-semibold text-[#832633]">{event.date}</p>
									<h3 className="mt-0.5 text-lg font-semibold text-slate-950">{event.name}</h3>
									{event.location ? <p className="mt-1 text-sm text-slate-600">{event.location}</p> : null}
									{event.description ? <p className="mt-2 line-clamp-2 text-sm text-slate-600">{event.description}</p> : null}
								</div>
								<span className="material-icons shrink-0 text-slate-400">chevron_right</span>
							</button>
						))}
					</div>
				)}
			</div>

			<section className="border-t border-slate-200 bg-slate-50">
				<div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
					<div className="mb-8">
						<h2 className="text-2xl font-semibold text-slate-950">Moments from past events</h2>
						<p className="mt-2 text-slate-600">A look at the community, competition, and celebration that define MUN engineering.</p>
					</div>

					{eventGalleryImages.length > 0 ? (
						<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{eventGalleryImages.map((image) => (
								<div key={image} className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
									<img
										src={image}
										alt="Event moment"
										className="h-48 w-full object-cover hover:scale-105 transition-transform"
									/>
								</div>
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
							<p className="text-sm text-slate-600">No event photos available yet. Check back soon!</p>
						</div>
					)}
				</div>
			</section>
		</>
	);
}

function EventDetailSidebar({ event, organizerLogo }) {
	if (!event) {
		return (
			<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
				<div className="flex h-full flex-col justify-center gap-4">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Event details</p>
					<h2 className="text-2xl font-semibold text-slate-950">Select an event from the calendar</h2>
					<p className="text-slate-600">Click any event date to preview the schedule, location, and registration details here.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<div className="mb-6 flex items-center gap-4">
				{organizerLogo ? (
					<img src={organizerLogo} alt="Organizer logo" className="h-12 w-12 rounded-full object-contain" />
				) : null}
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Event preview</p>
					<h2 className="text-xl font-semibold text-slate-950">{event.name}</h2>
				</div>
			</div>

			<p className="text-sm text-slate-500">
				{event.date}
				{event.location ? ` · ${event.location}` : ""}
			</p>
			{event.description ? <p className="mt-4 text-slate-700 leading-7">{event.description}</p> : null}

			{Array.isArray(event.details) && event.details.length > 0 ? (
				<div className="mt-6 space-y-3">
					<h3 className="text-sm font-semibold text-slate-900">What to know</h3>
					<ul className="list-disc space-y-2 pl-5 text-slate-700">
						{event.details.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			) : null}

			<div className="mt-6 grid gap-3">
				{event.registerLink ? (
					<a
						href={event.registerLink}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex w-full items-center justify-center rounded-full bg-[#832633] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]"
					>
						Register
					</a>
				) : null}
				{event.contactEmail ? (
					<a
						href={`mailto:${event.contactEmail}`}
						className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
					>
						Contact
					</a>
				) : null}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const eventsImagePath = path.join(process.cwd(), "public", "res", "events");
	let eventGalleryImages = [];

	try {
		const files = fs.readdirSync(eventsImagePath);
		eventGalleryImages = files
			.filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
			.sort()
			.map((file) => `/res/events/${file}`);
	} catch (error) {
		eventGalleryImages = [];
	}

	return {
		props: {
			eventGalleryImages,
		},
		revalidate: 3600,
	};
}
