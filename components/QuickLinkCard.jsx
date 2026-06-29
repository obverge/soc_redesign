import Link from "next/link";

export default function QuickLinkCard({ href, title, description, icon }) {
	return (
		<Link
			href={href}
			className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#832633]/30 hover:shadow-md"
		>
			<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#832633]/10 text-[#832633] transition group-hover:bg-[#832633] group-hover:text-white">
				<span className="material-icons text-2xl">{icon}</span>
			</div>
			<h3 className="text-lg font-semibold text-slate-950">{title}</h3>
			<p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
			<span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#832633]">
				Explore
				<span className="material-icons text-base transition group-hover:translate-x-0.5">arrow_forward</span>
			</span>
		</Link>
	);
}
