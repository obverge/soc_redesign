import Head from "next/head";
import Link from "next/link";
import PageHeroWithImage from "../../components/PageHeroWithImage";

const opportunities = [
	{
		label: "Events",
		title: "Build community",
		description: "Join socials, fundraisers, athletics, and student-led events that help make engineering more than just classes.",
	},
	{
		label: "Teams",
		title: "Get hands-on",
		description: "Work with design teams, competitions, and project groups that turn classroom learning into real engineering experience.",
	},
	{
		label: "Leadership",
		title: "Lead with impact",
		description: "Take on a role with the Engineering Society and help shape the student experience for future classes.",
	},
];

const leadershipRoles = [
	"President",
	"VP Academic",
	"VP Internal",
	"VP External",
	"VP Finance",
	"Director of Communications",
	"Director of Outreach",
	"Director of Social Events",
	"Director of Sports",
	"Director of Co-op",
	"Director of Sponsorship",
	"Director of International Representation",
];

export default function JoinSociety() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Join the Society</title>
			</Head>

			<PageHeroWithImage
				label="Join the Society"
				title="Get involved in engineering life at MUN"
				description="Whether you want to attend events, join a club, volunteer, or lead your peers, there’s a place for you in the Engineering Society."
				imageSrc="/res/pageheaders/getinvolved.jpeg"
				imageAlt="Engineering students getting involved"
			>
				<div className="mt-8 flex flex-wrap gap-3">
					<Link href="/getinvolved" className="rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
						Explore opportunities
					</Link>
					<Link href="/aboutus" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
						Meet the teams
					</Link>
				</div>
			</PageHeroWithImage>

			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="grid gap-6 lg:grid-cols-3">
					{opportunities.map((item) => (
						<div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">{item.label}</p>
							<h2 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h2>
							<p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="border-t border-slate-200 bg-slate-50">
				<div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
					<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Why students join</p>
							<h2 className="mt-4 text-2xl font-semibold text-slate-950">The society exists to make engineering more connected.</h2>
							<p className="mt-4 text-slate-600">
								From orientation and mentorship to design teams and fundraisers, Engineering Society helps students build friendships, find community, and grow into stronger leaders. It is a place to get involved early and stay connected throughout your degree.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="mb-8">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Leadership</p>
					<h2 className="mt-3 text-2xl font-semibold text-slate-950">Roles that help shape the student experience</h2>
				</div>
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{leadershipRoles.map((role) => (
						<div key={role} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
							{role}
						</div>
					))}
				</div>

				<div className="mt-10 flex flex-wrap gap-4">
					<Link href="/aboutus" className="rounded-full bg-[#832633] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
						Meet the executive team
					</Link>
					<Link href="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
						Ask a question
					</Link>
				</div>
			</section>
		</>
	);
}
