const disciplines = [
	{ id: "eng-one", name: "Engineering One", icon: "engineering", href: "https://www.mun.ca/engineering/", color: "#ad8ab8" },
	{ id: "mechanical", name: "Mechanical", icon: "build", href: "https://www.mun.ca/engineering/mech/", color: "#c4878d" },
	{ id: "mechatronics", name: "Mechatronics", icon: "precision_manufacturing", href: "https://www.mun.ca/engineering/mech/", color: "#80b092" },
	{ id: "civil", name: "Civil", icon: "construction", href: "https://www.mun.ca/engineering/civil/", color: "#9aa8b0" },
	{ id: "electrical", name: "Electrical", icon: "bolt", href: "https://www.mun.ca/engineering/ece/", color: "#bb727c" },
	{ id: "computer", name: "Computer", icon: "memory", href: "https://www.mun.ca/engineering/ece/", color: "#c28e6e" },
	{ id: "ocean-naval", name: "Ocean & Naval", icon: "directions_boat", href: "https://www.mun.ca/engineering/ona/", color: "#80aabd" },
	{ id: "process", name: "Process", icon: "science", href: "https://www.mun.ca/engineering/process/", color: "#b985a2" },
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
					className="group flex min-h-40 flex-col items-center justify-center gap-3 rounded-2xl border border-white p-5 text-white shadow-sm transition hover:-translate-y-1 hover:brightness-110 hover:shadow-lg"
					style={{ backgroundColor: d.color }}
				>
					<span className="material-icons text-4xl">{d.icon}</span>
					<span className="text-center text-sm font-semibold text-white">{d.name}</span>
				</a>
			))}
		</div>
	);
}
