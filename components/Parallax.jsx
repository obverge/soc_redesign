import React, { useState, useEffect } from "react";

const Parallax = ({ children, image }) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="relative w-full overflow-hidden min-h-[55vh]">
			<div
				className="absolute inset-0 bg-cover bg-center will-change-transform"
				style={{
					backgroundImage: `url(${image})`,
					transform: `translateY(${scrollPosition * 0.35}px)`,
				}}
			/>
			<div className="absolute inset-0 bg-white/70" />
			<div className="relative z-10 flex min-h-[55vh] items-center justify-center px-5 py-20">
				{children}
			</div>
		</div>
	);
};

export default Parallax;
