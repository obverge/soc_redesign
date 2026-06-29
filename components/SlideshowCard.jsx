import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SlideshowComponent(props) {
	const [slideIndex, setSlideIndex] = useState(0);
	const images = props.images;

	const nextSlide = () => {
		setSlideIndex((prev) => (prev + 1) % images.length);
	};

	useEffect(() => {
		let interval;
		const timer = setTimeout(() => {
			interval = setInterval(nextSlide, 10000);
		}, props.delay);

		return () => {
			clearTimeout(timer);
			if (interval) clearInterval(interval);
		};
	}, [images.length, props.delay]);

	return (
		<div className="flex w-full max-w-xl flex-col items-center gap-5 rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg">
			<h2 className="text-2xl font-semibold tracking-tight text-slate-900">{props.title}</h2>
			<button onClick={nextSlide} className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
				<motion.img
					src={images[slideIndex]}
					key={slideIndex}
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="h-60 w-full object-cover"
				/>
			</button>
			<p className="text-center text-sm text-slate-600">{props.description}</p>
			<Link href={props.href} className="inline-flex rounded-full bg-[#832633] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
				Explore
			</Link>
		</div>
	);
}
