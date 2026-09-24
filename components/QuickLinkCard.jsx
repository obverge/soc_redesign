import Link from "next/link";
import Image from "next/image";

export default function QuickLinkCard({ href, title, description, icon, imageSrc }) {
	return (
		<Link
			href={href}
			className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#832633]/30 hover:shadow-md"
		>
			{imageSrc ? (
				<div className="relative h-32 overflow-hidden">
					<Image src={imageSrc} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
				</div>
			) : null}
			<div className="flex flex-1 flex-col p-6">
				<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#832633]/10 text-[#832633] transition group-hover:bg-[#832633] group-hover:text-white">
					<span className="material-icons text-2xl">{icon}</span>
				</div>
				<h3 className="text-lg font-semibold text-slate-950">{title}</h3>
				<p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
				<span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#832633]">
					Explore
					<span className="material-icons text-base transition group-hover:translate-x-0.5">arrow_forward</span>
				</span>
			</div>
		</Link>
	);
}
