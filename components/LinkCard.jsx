import { useEffect, useState } from "react";

export function LinkCard(props) {
	const [countdown, setCountdown] = useState(null);

	function formatCountdown(value) {
		const days = Math.floor(value / (24 * 60 * 60 * 1000));
		const hours = Math.floor((value % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
		const minutes = Math.floor((value % (60 * 60 * 1000)) / (60 * 1000));
		const seconds = Math.floor((value % (60 * 1000)) / 1000);

		return `${props.targetText}: ${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	useEffect(() => {
		if (props.targetDate) {
			const targetDate = new Date(props.targetDate);
			const interval = setInterval(() => {
				const now = new Date();
				setCountdown(Math.max(0, targetDate - now));
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [props.targetDate]);

	return (
		<a href={props.link} target="_blank" rel="noreferrer" className="group w-3/4 rounded-[32px] border border-slate-200 bg-white p-6 transition hover:border-[#832633] hover:bg-slate-50 lg:w-1/3">
			<div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between">
				{props.image ? <img src={props.image} className="h-16 w-16 rounded-2xl object-cover" alt={props.title} /> : null}
				<div>
					<h3 className="font-norwester text-lg font-semibold text-slate-900 group-hover:text-[#832633] lg:text-2xl">{props.title}</h3>
					{props.description ? <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-700 lg:text-base">{props.description}</p> : null}
					{countdown !== null && <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-700 lg:text-base">{formatCountdown(countdown)}</p>}
				</div>
			</div>
		</a>
	);
}
