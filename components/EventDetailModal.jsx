export default function EventDetailModal({ event, organizerLogo, onClose }) {
	if (!event) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
			<div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
			<div
				className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
					aria-label="Close"
				>
					<span className="material-icons text-xl">close</span>
				</button>

				{event.image ? (
					<img src={event.image} alt={event.name} className="h-48 w-full object-cover sm:h-56" />
				) : null}

				<div className="p-6 sm:p-8">
					<div className="mb-4 flex items-start gap-4">
						{organizerLogo ? (
							<img src={organizerLogo} alt="Organizer" className="h-12 w-12 rounded-full object-contain" />
						) : null}
						<div>
							<h2 className="text-2xl font-semibold text-slate-950">{event.name}</h2>
							<p className="mt-1 text-slate-600">
								{event.date}
								{event.location ? ` · ${event.location}` : ""}
							</p>
							{event.age || event.cost ? (
								<p className="mt-1 text-sm text-slate-500">
									{[event.age, event.cost].filter(Boolean).join(" · ")}
								</p>
							) : null}
						</div>
					</div>

					{event.description ? (
						<p className="mb-4 leading-7 text-slate-700">{event.description}</p>
					) : null}

					{Array.isArray(event.details) && event.details.length > 0 ? (
						<ul className="mb-6 list-disc space-y-2 pl-5 text-slate-700">
							{event.details.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					) : null}

					<div className="flex flex-wrap gap-3">
						{event.registerLink ? (
							<a
								href={event.registerLink}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-[#832633] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6a2024]"
							>
								Register
							</a>
						) : null}
						{event.contactEmail ? (
							<a
								href={`mailto:${event.contactEmail}`}
								className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
							>
								Contact
							</a>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
