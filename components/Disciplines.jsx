const disciplines = [
	{ id: "eng-one", name: "Engineering One", icon: "engineering", href: "https://www.mun.ca/engineering/" },
	{ id: "mechanical", name: "Mechanical", icon: "build", href: "https://www.mun.ca/engineering/mech/" },
	{ id: "mechatronics", name: "Mechatronics", icon: "precision_manufacturing", href: "https://www.mun.ca/engineering/mech/" },
	{ id: "civil", name: "Civil", icon: "construction", href: "https://www.mun.ca/engineering/civil/" },
	{ id: "electrical", name: "Electrical", icon: "bolt", href: "https://www.mun.ca/engineering/ece/" },
	{ id: "computer", name: "Computer", icon: "memory", href: "https://www.mun.ca/engineering/ece/" },
	{ id: "ocean-naval", name: "Ocean & Naval", icon: "directions_boat", href: "https://www.mun.ca/engineering/ona/" },
	{ id: "process", name: "Process", icon: "science", href: "https://www.mun.ca/engineering/process/" },
];

export default function Disciplines() {
	return (
		<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{disciplines.map((d) => (
				<a
					key={d.id}
					href={d.href}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#832633]/30 hover:shadow-md"
				>
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#832633]/10 text-[#832633] transition group-hover:bg-[#832633] group-hover:text-white">
						<span className="material-icons text-2xl">{d.icon}</span>
					</div>
					<span className="text-center text-sm font-semibold text-slate-950">{d.name}</span>
				</a>
			))}
		</div>
	);
}
