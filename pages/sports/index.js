import { useState } from "react";
import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import sportsData from "public/json/sports.json";
import Link from "next/link";

const soccerGallery = [
	"/res/sports/mun-soccer-world-cup-final-2026-1.jpg",
	"/res/sports/mun-soccer-world-cup-final-2026-2.png",
];

export default function Sports() {
	const [activeImage, setActiveImage] = useState(0);
	const sections = sportsData.sections || [];
	const categories = sportsData.categories || ["Soccer", "Hockey", "Softball"];
	const activeImageUrl = soccerGallery[activeImage] || soccerGallery[0];

	return (
		<>
			<Head>
				<title>MUN Engineering Society | Sports</title>
			</Head>

			<PageHeroWithImage
				label="Sports"
				title="Student sport, competition, and club culture at MUN"
				description="From internal tournaments to club athletics, Engineering Society supports student competition, team culture, and memorable campus rivalries."
				imageSrc="/res/pageheaders/sports.jpg"
				imageAlt="Engineering sports background"
			>
				<div className="mt-8 flex flex-wrap gap-3">
					<Link href="/getinvolved" className="rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
						Join a team
					</Link>
					<Link href="/aboutus" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
						Meet the team
					</Link>
				</div>
			</PageHeroWithImage>

			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
				<div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
						<div>
							<div className="mb-4 flex items-center justify-between">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#832633]">Latest result</p>
									<h2 className="mt-2 text-2xl font-semibold text-slate-950">2026 Engineering World Cup Final</h2>
								</div>
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() => setActiveImage((activeImage - 1 + soccerGallery.length) % soccerGallery.length)}
										className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:bg-slate-50"
										aria-label="Previous soccer image"
									>
										&#8249;
									</button>
									<button
										type="button"
										onClick={() => setActiveImage((activeImage + 1) % soccerGallery.length)}
										className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:bg-slate-50"
										aria-label="Next soccer image"
									>
										&#8250;
									</button>
								</div>
							</div>

							<div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50">
								<img
									src={activeImageUrl}
									alt="MUN Engineering Society soccer final action"
									className="h-[420px] w-full object-cover"
								/>
							</div>

							<div className="mt-4 flex gap-2">
								{soccerGallery.map((image, index) => (
									<button
										key={image}
										type="button"
										onClick={() => setActiveImage(index)}
										className={`h-2.5 rounded-full transition-all ${index === activeImage ? "w-10 bg-[#832633]" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
										aria-label={`View soccer image ${index + 1}`}
									/>
								))}
							</div>
						</div>

						<div className="flex flex-col justify-between">
							<div className="rounded-[28px] bg-slate-50 p-6 ring-1 ring-slate-200">
								<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Final score</p>
								<h3 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Japan 2 – 1 Colombia</h3>
								<p className="mt-4 text-slate-600">
									Japan defeated Colombia in the 2026 MUN Engineering Society World Cup tournament final, capping a competitive campus-wide series.
								</p>
							</div>

						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
				{sections.length === 0 ? (
					<div className="space-y-6">
						<div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Sports archive</p>
							<h2 className="mt-4 text-2xl font-semibold text-slate-950">{sportsData.emptyState?.title || "No official results uploaded yet"}</h2>
							<p className="mt-4 max-w-3xl text-slate-600">{sportsData.emptyState?.description || "Results and championship records will be added when they are ready."}</p>
							<p className="mt-4 text-sm text-slate-500">{sportsData.emptyState?.note || "Check back later for updated standings and finals."}</p>
						</div>

						<div className="grid gap-6 md:grid-cols-3">
							{categories.map((category) => (
								<div key={category} className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-6 text-center shadow-sm">
									<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#832633]/10 text-xl font-bold text-[#832633]">
										{category.charAt(0)}
									</div>
									<h3 className="mt-4 text-lg font-semibold text-slate-950">{category}</h3>
									<p className="mt-2 text-sm text-slate-600">Results will be added here when official records are uploaded.</p>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="grid gap-6 lg:grid-cols-3">
						{sections.map((section) => (
							<div key={section.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
								<div className="mb-4 flex items-center gap-3">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#832633]/10 text-[#832633] text-xl font-bold">
										{section.category?.[0] || "?"}
									</div>
									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">{section.category}</p>
										<h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
									</div>
								</div>
								<p className="mb-6 text-sm text-slate-600">{section.description}</p>
								<div className="space-y-4">
									{section.entries?.map((entry) => (
										<div key={`${section.title}-${entry.year}-${entry.event}`} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
											<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
												<div>
													<p className="text-sm font-semibold text-slate-900">{entry.year} · {entry.event}</p>
													<h3 className="mt-1 text-lg font-semibold text-slate-950">{entry.winner}</h3>
												</div>
												<div className="rounded-full bg-[#832633]/10 px-4 py-2 text-sm font-semibold text-[#832633]">
													{entry.result}
												</div>
											</div>
											<p className="mt-3 text-sm text-slate-600">{entry.notes}</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				)}
			</section>
		</>
	);
}
