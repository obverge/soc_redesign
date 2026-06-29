export default function ConferenceStoryModal({ story, onClose }) {
	if (!story) return null;

	return (
		<div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onClick={onClose}>
			<div className="absolute inset-0" />
			<div
				className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
					aria-label="Close"
				>
					<span className="text-xl">×</span>
				</button>

				{story.images && story.images.length > 0 ? (
					<div className="grid gap-2 bg-slate-50 p-3 sm:grid-cols-2">
						{story.images.map((image, index) => (
							<img key={index} src={image} alt={`${story.title} ${index + 1}`} className="h-48 w-full object-cover" />
						))}
					</div>
				) : story.image ? (
					<img src={story.image} alt={story.title} className="h-56 w-full object-cover sm:h-72" />
				) : (
					<div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#832633]/10 to-slate-100 sm:h-72">
						<span className="text-4xl font-semibold text-[#832633]/30">CONFERENCES</span>
					</div>
				)}

				<div className="p-6 sm:p-8">
					<div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
						{story.category ? <span className="rounded-full bg-[#832633]/10 px-2.5 py-0.5 text-[#832633]">{story.category}</span> : null}
						<span>{story.date}</span>
					</div>
					<h2 className="text-2xl font-semibold text-slate-950">{story.title}</h2>
					{story.location ? <p className="mt-2 text-slate-500">{story.location}</p> : null}
					<div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
						{Array.isArray(story.content)
							? story.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
							: story.content ? <p>{story.content}</p> : null}
					</div>
				</div>
			</div>
		</div>
	);
}
