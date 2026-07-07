import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import sportsData from "public/json/sports.json";
import Link from "next/link";

export default function Sports() {
	return (
		<>
			<Head>
				<title>MUN Engineering Society | Sports</title>
			</Head>

			<PageHeroWithImage
				label="Sports Archive"
				title="Engineering sports rivalry history"
				description="Browse past winners, key matches, and championship moments from soccer, hockey, softball, and more."
				imageSrc="/res/backgrounds/cubes.png"
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
				<div className="grid gap-6 lg:grid-cols-3">
					{sportsData.sections.map((section) => (
						<div key={section.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
							<div className="mb-4 flex items-center gap-3">
								<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#832633]/10 text-[#832633] text-xl font-bold">
									{section.category[0]}
								</div>
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">{section.category}</p>
									<h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
								</div>
							</div>
							<p className="mb-6 text-sm text-slate-600">{section.description}</p>
							<div className="space-y-4">
								{section.entries.map((entry) => (
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
										<div className="mt-4 grid gap-3 sm:grid-cols-2">
											<div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 text-center text-sm text-slate-500">
												<span className="block text-xl font-semibold">+ Add Photo</span>
												<span>Winning team photo</span>
											</div>
										</div>
									</div>
							))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
