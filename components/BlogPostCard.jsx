export default function BlogPostCard({ title, excerpt, date, author, category, image, onOpen }) {
	return (
		<button
			type="button"
			onClick={onOpen}
			className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
		>
			{image ? (
				<div className="aspect-[16/9] overflow-hidden bg-slate-100">
					<img src={image} alt={title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
				</div>
			) : (
				<div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#832633]/10 to-slate-100">
					<span className="text-4xl font-semibold text-[#832633]/30">ROAR</span>
				</div>
			)}
			<div className="flex flex-1 flex-col p-6">
				<div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
					{category ? <span className="rounded-full bg-[#832633]/10 px-2.5 py-0.5 text-[#832633]">{category}</span> : null}
					<span>{date}</span>
				</div>
				<h3 className="text-xl font-semibold text-slate-950 group-hover:text-[#832633]">{title}</h3>
				<p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{excerpt}</p>
				{author ? <p className="mt-4 text-sm text-slate-500">By {author}</p> : null}
			</div>
		</button>
	);
}
