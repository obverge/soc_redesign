import { useState } from "react";
import Link from "next/link";
import { TeamCard } from "../../components/TeamCard";
import jsonData from "public/json/get_involved.json";
import PageHero from "../../components/PageHero";
import Head from "next/head";

const data = jsonData;

const tabs = [
	{ id: 1, label: "Design Teams", mobileIcon: "emoji_events" },
	{ id: 2, label: "Organizations", mobileIcon: "diversity_3" },
	{ id: 3, label: "Volunteer", mobileIcon: "volunteer_activism" },
];

export default function GetInvolved() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Get Involved</title>
			</Head>
			<PageHero
				label="Get Involved"
				title="Build, Compete, Connect"
				description="Join a design team, student organization, or volunteer — there's a place for every engineer at MUN."
			/>
			<section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
				<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Student involvement</p>
					<h2 className="mt-4 text-xl font-semibold text-slate-950">Find your engineering community</h2>
					<p className="mt-3 text-slate-600">Design teams, student societies, and volunteering opportunities are all here to help you grow and make an impact.</p>
				</div>
			</section>
			<Navigation />
		</>
	);
}

function Groups({ type }) {
	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
			{Object.entries(type).map(([team_name, team_data]) => (
				<TeamCard
					key={team_name}
					name={team_name}
					title={team_data.title}
					logo={team_data.logo}
					text={team_data.text}
					link={team_data.link}
					linkedin={team_data.linkedin}
					instagram={team_data.instagram}
					facebook={team_data.facebook}
					twitter={team_data.twitter}
					discord={team_data.discord}
					contact={team_data.contact}
					date={team_data.date}
					disciplines={team_data.disciplines}
				/>
			))}
		</div>
	);
}

function Navigation() {
	const [currentTab, setCurrentTab] = useState(1);
	const [showPastTeams, setShowPastTeams] = useState(false);

	return (
		<div>
			<nav className="sticky top-[73px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
				<div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setCurrentTab(tab.id)}
							className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
								currentTab === tab.id ? "bg-[#832633] text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
							}`}
						>
							<span className="hidden sm:inline">{tab.label}</span>
							<span className="material-icons sm:hidden">{tab.mobileIcon}</span>
						</button>
					))}
				</div>
			</nav>

			<div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
				<div className="mb-10">
					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Student involvement</p>
						<h3 className="mt-4 text-xl font-semibold text-slate-950">Join a team, society, or volunteer</h3>
						<p className="mt-3 text-slate-600">Use the tabs above to explore competitive teams, student organizations, and volunteer opportunities.</p>
					</div>
				</div>
				{currentTab === 1 ? (
					<div>
						<h2 className="mb-6 text-xl font-semibold text-slate-950">Competitive Design Teams</h2>
						<Groups type={data.current_competitive} />
						<div className="mt-8 flex flex-col items-center gap-4">
							<button
								onClick={() => setShowPastTeams(!showPastTeams)}
								className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
							>
								{showPastTeams ? "Hide Past Teams" : "Show Past Teams"}
							</button>
							{showPastTeams ? (
								<div className="w-full">
									<h3 className="mb-4 text-center text-lg font-semibold text-slate-700">Past Teams</h3>
									<Groups type={data.past_competitive} />
								</div>
							) : null}
						</div>
					</div>
				) : null}

				{currentTab === 2 ? (
					<div>
						<h2 className="mb-6 text-xl font-semibold text-slate-950">Student Organizations</h2>
						<Groups type={data.organization} />
					</div>
				) : null}

				{currentTab === 3 ? (
					<div className="mx-auto max-w-2xl">
						<h2 className="mb-4 text-xl font-semibold text-slate-950">Volunteer Opportunities</h2>
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-slate-950">Student Volunteer Bureau</h3>
							<p className="mt-3 leading-7 text-slate-600">
								Volunteering is a great way to build leadership experience while giving back to your community. It's also recognized by employers when you're applying for work terms.
							</p>
							<p className="mt-3 leading-7 text-slate-600">
								The Student Volunteer Bureau organizes the Volunteer Incentive Program (VIP), which recognizes and rewards student volunteering efforts. Students unlock different tiers based on their involvement.
							</p>
							<a
								href="https://www.mun.ca/volunteer/"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-6 inline-flex rounded-full bg-[#832633] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6a2024]"
							>
								Volunteer Incentive Program
							</a>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
