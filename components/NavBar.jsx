/* ./components/Navbar.jsx */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
	{ href: "/aboutus", label: "About", match: "/aboutus" },
	{ href: "/academics", label: "Academics", match: "/academics" },
	{ href: "/events", label: "Events", match: "/events" },
	{ href: "/sports", label: "Sports", match: "/sports" },
	{ href: "/getinvolved", label: "Get Involved", match: "/getinvolved" },
	{ href: "/roar", label: "ROAR", match: "/roar" },
	{ href: "/conferences", label: "Conferences", match: "/conferences" },
	{ href: "/sponsorship", label: "Sponsorship", match: "/sponsorship" },
	{ href: "/contact", label: "Contact", match: "/contact" },
];

export const Navbar = () => {
	const router = useRouter();
	const [active, setActive] = useState(false);

	const handleClick = () => setActive((current) => !current);

	const handleClickClose = () => {
		if (window.innerWidth <= 1024) setActive(false);
	};

	useEffect(() => {
		const updateState = () => setActive(window.innerWidth > 1024);
		updateState();
		window.addEventListener("resize", updateState);
		return () => window.removeEventListener("resize", updateState);
	}, []);

	const navVariants = {
		open: {
			height: "auto",
			opacity: 1,
			display: "block",
			transition: { duration: 0.25, when: "beforeChildren", staggerChildren: 0.05 },
		},
		closed: {
			height: 0,
			opacity: 0,
			transition: { duration: 0.25, when: "afterChildren" },
			transitionEnd: { display: "none" },
		},
	};

	const itemVariants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: -12 },
	};

	const isNavActive = (match) => router.pathname === match || router.pathname.startsWith(match + "/");

	return (
		<nav className="sticky top-0 z-[999] w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
			<div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3 lg:px-8">
				<Link href="/" onClick={handleClickClose} className="inline-flex items-center gap-3 text-slate-900 transition hover:text-slate-700">
			<Image src="/res/logos/full_no_text.png" alt="MUN Engineering Society towers logo" width={36} height={36} className="full bg-white p-1" />
				</Link>

				<button
					className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200 lg:hidden"
					onClick={handleClick}
					aria-label="Toggle menu"
				>
					<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<NavbarHamburger isOpen={active} />
					</svg>
				</button>

				<motion.div className="w-full lg:inline-flex lg:w-auto" variants={navVariants} initial="closed" animate={active ? "open" : "closed"}>
					<div className="flex w-full flex-col gap-1 rounded-2xl bg-white p-3 shadow-md lg:ml-auto lg:flex-row lg:items-center lg:gap-1 lg:p-0 lg:shadow-none">
						{navItems.map((item) => {
							const isActive = isNavActive(item.match);
							return (
								<motion.div className="py-0.5" variants={itemVariants} key={item.href}>
									<Link
										href={item.href}
										onClick={handleClickClose}
										className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold transition ${
											isActive ? "bg-[#832633] text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
										}`}
									>
										{item.label}
									</Link>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</nav>
	);
};

export const NavbarHamburger = (props) => {
	if (props.isOpen) {
		return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />;
	}
	return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />;
};
