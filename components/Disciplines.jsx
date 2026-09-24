const disciplines = [
	{ id: "eng-one", name: "Engineering One", icon: "engineering", href: "https://www.mun.ca/engineering/", color: "#d9c9df", outline: "#705878" },
	{ id: "mechanical", name: "Mechanical", icon: "build", href: "https://www.mun.ca/engineering/mech/", color: "#e4c2c5", outline: "#8d5058" },
	{ id: "mechatronics", name: "Mechatronics", icon: "precision_manufacturing", href: "https://www.mun.ca/engineering/mech/", color: "#c9ddd1", outline: "#527565" },
	{ id: "civil", name: "Civil", icon: "construction", href: "https://www.mun.ca/engineering/civil/", color: "#cbd4d8", outline: "#697178" },
	{ id: "electrical", name: "Electrical", icon: "bolt", href: "https://www.mun.ca/engineering/ece/", color: "#e1c0c4", outline: "#71343d" },
	{ id: "computer", name: "Computer", icon: "memory", href: "https://www.mun.ca/engineering/ece/", color: "#e4cbbb", outline: "#9b6a52" },
	{ id: "ocean-naval", name: "Ocean & Naval", icon: "directions_boat", href: "https://www.mun.ca/engineering/ona/", color: "#c8dce4", outline: "#557587" },
	{ id: "process", name: "Process", icon: "science", href: "https://www.mun.ca/engineering/process/", color: "#ddc7d4", outline: "#855c70" },
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
					className="group flex min-h-40 flex-col items-center justify-center gap-3 rounded-2xl border-2 p-5 shadow-sm transition hover:-translate-y-1 hover:brightness-105 hover:shadow-lg"
					style={{ backgroundColor: d.color, borderColor: d.outline, color: d.outline }}
				>
					<span className="material-icons text-4xl">{d.icon}</span>
					<span className="text-center text-sm font-semibold">{d.name}</span>
				</a>
			))}
		</div>
	);
}
