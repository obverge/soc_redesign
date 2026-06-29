import { useState } from "react";
import { MemberCard } from "../../components/MemberCard";
import pastMembers from "public/json/societymembers.json";
import currentMembers from "public/json/current_society.json";
import PageHero from "../../components/PageHero";
import Head from "next/head";

const past = pastMembers;
const current = currentMembers;

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | About Us</title>
			</Head>
			<PageHero
				label="About Us"
				title="Two Societies, One Community"
				description="The Memorial University Engineering Society represents all undergraduate engineering students through Society A and Society B — two parallel student governments working together for you."
			/>

			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="grid gap-6 lg:grid-cols-2">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-4 flex items-center gap-4">
							<img src="/res/logos/society-a.png" alt="Society A" className="h-14 w-auto" />
							<div>
								<h3 className="text-lg font-semibold text-slate-950">Society A</h3>
								<p className="text-sm text-slate-500">{current.socA.years}</p>
							</div>
						</div>
						<p className="text-sm leading-7 text-slate-600">
						</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-4 flex items-center gap-4">
							<img src="/res/logos/society-b.png" alt="Society B" className="h-14 w-auto" />
							<div>
								<h3 className="text-lg font-semibold text-slate-950">Society B</h3>
								<p className="text-sm text-slate-500">{current.socB.years}</p>
							</div>
						</div>
						<p className="text-sm leading-7 text-slate-600">
						</p>
					</div>
				</div>
			</section>

			<section className="border-t border-slate-200 bg-slate-50">
				<div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
					<div className="grid gap-3 sm:grid-cols-4 items-center justify-center">
						<a href="/res/documents/Engineering Society Constitution.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-[#832633] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6a2024] text-center">
							Constitution
						</a>
						<a href="/res/documents/Society Executive Position Descriptions 2023.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 text-center">
							Executive Roles
						</a>
						<a href="/res/members/group/org_chart_soc_2028.jpg" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 text-center">
							Society A Org Chart
						</a>
						<a href="/res/members/group/org_chart_soc_2029.PNG" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 text-center">
							Society B Org Chart
						</a>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
				<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
					<h2 className="mb-8 text-2xl font-semibold text-slate-950">Current Executives</h2>
					<div className="grid gap-8 lg:grid-cols-2">
						<CurrentSociety society={current.socA} />
						<CurrentSociety society={current.socB} />
					</div>
				</section>

				<section className="border-t border-slate-200 bg-slate-50 py-12">
					<div className="mx-auto max-w-7xl px-5 sm:px-8">
						<ShowPastSociety />
					</div>
				</section>
			</section>
		</>
	);
}

function ShowPastSociety() {
	const [showPast, setShowPast] = useState(false);
	return (
		<div className="flex flex-col items-center gap-6">
			<button
				onClick={() => setShowPast(!showPast)}
				className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
			>
				{showPast ? "Hide Past Societies" : "Show Past Societies"}
			</button>
			{showPast ? (
				<div className="w-full space-y-6">
					<div className="grid gap-6 lg:grid-cols-2">
						<PastSocietyData societies={past.societyA} />
						<PastSocietyData societies={past.societyB} />
					</div>
					<PastSocietyData societies={past.society} />
				</div>
			) : null}
		</div>
	);
}

function PastSocietyData({ societies }) {
	return (
		<div className="space-y-4">
			{Object.entries(societies).map(([society, societyData]) => {
				if (societyData.title === "25th Society A" || societyData.title === "25th Society B") return null;
				return (
					<div key={society} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<h2 className="text-lg font-semibold text-slate-950">{societyData.title}</h2>
						<p className="text-sm text-slate-500">{societyData.years}</p>
						<div className="mt-3 space-y-1.5 text-sm text-slate-600">
							{Object.entries(societyData).map(([position, name]) => {
								if (position === "title" || position === "years" || position === "members") return null;
								return (
									<p key={position}>
										<span className="font-medium text-slate-800">{position}</span>: {name}
									</p>
								);
							})}
							{societyData.members ? (
								<div className="pt-2">
									<p className="font-medium text-slate-800">Members</p>
									{societyData.members.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
							) : null}
						</div>
					</div>
				);
			})}
		</div>
	);
}

function CurrentSociety({ society }) {
	const which = society.title.includes("A");
	return (
		<div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
			<div className="flex items-center gap-4 border-b border-slate-100 pb-4">
				<img src={which ? "/res/logos/society-a.png" : "/res/logos/society-b.png"} className="h-12 w-auto" alt={society.title} />
				<div>
					<h3 className="font-semibold text-slate-950">{society.title}</h3>
					<p className="text-sm text-slate-500">{society.years}</p>
				</div>
			</div>
			<div className="space-y-4">
				{Object.entries(society).map(([position, info]) => {
					if (position === "title" || position === "years") return null;
					return (
						<MemberCard
							key={position}
							title={position}
							name={info.name}
							program={info.program}
							about={info.about}
							photo={info.photo}
							link={info.link}
							contact={info.contact}
							linkedin={info.linkedin}
							instagram={info.instagram}
						/>
					);
				})}
			</div>
		</div>
	);
}
