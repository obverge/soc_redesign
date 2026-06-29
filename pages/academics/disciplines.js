import Head from "next/head";
import PageHero from "../../components/PageHero";
import AcademicsNav from "../../components/AcademicsNav";

const disciplines = [
	{ name: "Engineering One", icon: "engineering", href: "https://www.mun.ca/engineering/", description: "The common first year for all engineering students. Core courses in math, physics, chemistry, programming, and engineering fundamentals." },
	{ name: "Mechanical", icon: "build", href: "https://www.mun.ca/engineering/mech/", description: "Design, analysis, and manufacturing of mechanical systems — from thermodynamics and fluid mechanics to machine design." },
	{ name: "Mechatronics", icon: "precision_manufacturing", href: "https://www.mun.ca/engineering/mech/", description: "Integration of mechanical, electrical, and computer engineering to create intelligent systems and robotics." },
	{ name: "Civil", icon: "construction", href: "https://www.mun.ca/engineering/civil/", description: "Infrastructure design and construction — structures, transportation, geotechnical, and environmental engineering." },
	{ name: "Electrical", icon: "bolt", href: "https://www.mun.ca/engineering/ece/", description: "Power systems, electronics, signal processing, and communications within the Electrical & Computer Engineering department." },
	{ name: "Computer", icon: "memory", href: "https://www.mun.ca/engineering/ece/", description: "Software development, algorithms, computer architecture, and systems design within the ECE department." },
	{ name: "Ocean & Naval", icon: "directions_boat", href: "https://www.mun.ca/engineering/ona/", description: "Naval architecture, ocean engineering, and offshore systems — unique to Memorial's coastal location." },
	{ name: "Process", icon: "science", href: "https://www.mun.ca/engineering/process/", description: "Chemical and process engineering — design and optimization of industrial processes and chemical systems." },
];

export default function Disciplines() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Disciplines</title>
			</Head>
			<PageHero
				label="Academics"
				title="Engineering Disciplines"
				description="Memorial offers eight engineering programs. Explore each discipline to learn about courses, careers, and faculty resources."
			/>
			<AcademicsNav />
			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{disciplines.map((d) => (
						<a
							key={d.name}
							href={d.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#832633]/30 hover:shadow-md"
						>
							<div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#832633]/10 text-[#832633] transition group-hover:bg-[#832633] group-hover:text-white">
								<span className="material-icons">{d.icon}</span>
							</div>
							<h3 className="font-semibold text-slate-950">{d.name}</h3>
							<p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{d.description}</p>
							<span className="mt-3 text-xs font-semibold text-[#832633]">View faculty page →</span>
						</a>
					))}
				</div>
			</section>
		</>
	);
}
