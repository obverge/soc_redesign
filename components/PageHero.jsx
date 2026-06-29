export default function PageHero({ label, title, description, children }) {
	return (
		<section className="border-b border-slate-200 bg-white">
			<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
				{label ? (
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">{label}</p>
				) : null}
				<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
				{description ? (
					<p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
				) : null}
				{children}
			</div>
		</section>
	);
}
