import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import AcademicsNav from "../../components/AcademicsNav";

const resources = [
	{
		title: "Cahill Engineering One Student Success Centre",
		description: "Free tutoring and study support for Engineering One courses. Upper-year students help with problem sets, midterm prep, and study strategies. Don't wait until the night before your exam.",
	},
	{
		title: "Math Help Centres",
		description: "For Engineering One, Naval, or extra math courses — get help on assignments and understand course material.",
	},
	{
		title: "Chemistry Help Centre / Resource Room",
		description: "Located in the Chemistry-Physics building, rooms C 2022 and C 2012. Available for Engineering One and Process students.",
	},
	{
		title: "The Writing Centre",
		description: "Useful throughout your entire degree — not just for English courses. They help with reports, term papers, and work term reports (including by distance).",
	},
	{
		title: "The Physics Help Centre",
		description: "Staffed by professors, assistants, and physics majors for first-year physics students. Schedules posted each semester.",
	},
	{
		title: "MUNSU Resource Centres",
		description: "Peer support and information for minority communities on campus:",
		list: [
			"Aboriginal Resource Centre (ARC)",
			"Disability Information and Support Centre (DISC)",
			"International Students' Centre (ISC)",
			"Lesbian, Bisexual, Gay and Transgender (LBGT-MUN)",
			"Student Parents' Resource Centre (SPRC)",
			"Students Older Than Average (SOTA)",
			"Women's Resource Centre (WRC)",
		],
	},
	{
		title: "Walk-Safe / Drive-Safe",
		description: "WalkSafe offers accompaniment when walking on campus after dark (call 864-6464). SafeDrive provides free rides home from campus, 7pm–12am Sunday–Thursday, from the clocktower.",
	},
	{
		title: "Counselling Centre",
		description: "Personal counselling, psychiatric services, and group counselling. Help with study strategies and managing university-level academic work.",
	},
	{
		title: "Scholarships and Awards",
		description: "Student Affairs and Services administers scholarships, out-of-province financial aid, and emergency financial aid.",
	},
];

export default function Support() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Engineering One & Support</title>
			</Head>
			<PageHeroWithImage
				label="Academics"
				title="Engineering One & Academic Support"
				description="Campus resources to help you succeed — from the Success Centre to counselling and scholarships."
			/>
			<AcademicsNav />
			<section className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
				<div className="space-y-4">
					{resources.map((resource) => (
						<div key={resource.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-slate-950">{resource.title}</h3>
							<p className="mt-2 text-sm leading-7 text-slate-600">{resource.description}</p>
							{resource.list ? (
								<ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
									{resource.list.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							) : null}
						</div>
					))}
				</div>
			</section>
		</>
	);
}
