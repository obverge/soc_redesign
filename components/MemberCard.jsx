import ShowMoreText from "@/components/showMoreCard";

export function MemberCard(props) {
	return (
		<div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
			<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
				<img className="h-20 w-20 shrink-0 rounded-full object-cover object-top ring-2 ring-[#832633]/20" src={props.photo} alt={props.name} />
				<div className="flex-1 text-center sm:text-left">
					<p className="text-xs font-semibold uppercase tracking-wide text-[#832633]">{props.title}</p>
					<h3 className="text-lg font-semibold text-slate-950">{props.name}</h3>
					<p className="text-sm text-slate-600">{props.program}</p>
					<div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
						{props.contact ? (
							<a href={`mailto:${props.contact}`} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800" aria-label="Email">
								<span className="material-icons text-sm">mail</span>
							</a>
						) : null}
						{props.linkedin ? (
							<a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700" aria-label="LinkedIn">
								<span className="material-icons text-sm">link</span>
							</a>
						) : null}
						{props.instagram ? (
							<a href={props.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-amber-400 text-white" aria-label="Instagram">
								<span className="material-icons text-sm">photo_camera</span>
							</a>
						) : null}
					</div>
				</div>
			</div>
			<div className="mt-6">
  				{props.about ? <ShowMoreText text={props.about} /> : null}
			</div>
		</div>
	);
}
