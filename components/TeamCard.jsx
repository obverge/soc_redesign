import Image from "next/image";

export function TeamCard(props) {
	return (
		<div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
			{props.link ? (
				<a href={props.link} target="_blank" rel="noopener noreferrer" className="block">
					<Image src={props.logo} alt={props.name} className="h-36 w-full bg-slate-50 object-contain p-4" width={500} height={200} />
				</a>
			) : (
				<Image src={props.logo} alt={props.name} className="h-36 w-full bg-slate-50 object-contain p-4" width={500} height={200} />
			)}
			<div className="flex flex-1 flex-col p-5">
				<h3 className="text-lg font-semibold text-slate-950">{props.name}</h3>
				<p className="mt-1 text-sm font-medium text-slate-600">{props.title}</p>
				{props.date ? <p className="mt-1 text-xs text-slate-500">Founded {props.date}</p> : null}
				<p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{props.text}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{props.link ? (
						<a href={props.link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#78ae8c] bg-[#acd6b9] px-3 py-1.5 text-xs font-semibold text-[#235c3b] transition hover:bg-[#bce1c7]">
							Website
						</a>
					) : null}
					{props.linkedin ? (
						<a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#78a9d1] bg-[#a9d0ed] px-3 py-1.5 text-xs font-semibold text-[#174d78] transition hover:bg-[#b9daf1]">
							LinkedIn
						</a>
					) : null}
					{props.instagram ? (
						<a href={props.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#d9789b] bg-[#f2a1be] px-3 py-1.5 text-xs font-semibold text-[#722b4b] transition hover:bg-[#f6b3ca]">
							Instagram
						</a>
					) : null}
					{props.discord ? (
						<a href={props.discord} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">
							Discord
						</a>
					) : null}
					{props.contact ? (
						<a href={`mailto:${props.contact}`} className="rounded-full border border-[#d4ad45] bg-[#f3d27b] px-3 py-1.5 text-xs font-semibold text-[#664c0d] transition hover:bg-[#f7dc94]">
							Email
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
}
