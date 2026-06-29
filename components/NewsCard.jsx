import Link from "next/link";

export function NewsCard(props) {
	return (
		<div className="flex w-full h-full flex-col items-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
			<h2 className="font-norwester font-bold text-2xl text-slate-950 text-center">{props.title}</h2>
			<img src={props.image} className="h-60 w-full rounded-xl object-cover" alt={props.title} />
			<p className="text-center text-slate-500 font-maven">{props.date}</p>
			<p className="text-center text-slate-500 font-maven font-semibold">{props.by}</p>
			<Link href={props.link}>
				<span className="inline-flex cursor-pointer rounded-md bg-[#832633] px-4 py-2 font-norwester text-white transition duration-300 hover:bg-[#6a2024]">
					Read More ⮞
				</span>
			</Link>
		</div>
	);
}

/*

		<div className="">
			<img className="" />
			<div className="">
				<h3 className=""></h3>
				<h3 className=""></h3>
				<p className=""></p>
			</div>
		</div>
*/