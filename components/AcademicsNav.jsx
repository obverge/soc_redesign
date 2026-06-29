import Link from "next/link";
import { useRouter } from "next/router";

const links = [
	{ href: "/academics", label: "Overview", exact: true },
	{ href: "/academics/co-op", label: "Co-op" },
	{ href: "/academics/support", label: "Engineering One" },
	{ href: "/academics/disciplines", label: "Disciplines" },
	{ href: "/academics/capstone", label: "Capstone" },
	{ href: "/academics/edi", label: "EDI" },
];

export default function AcademicsNav() {
	const router = useRouter();

	return (
		<nav className="sticky top-[73px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
			<div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
				{links.map((link) => {
					const isActive = link.exact
						? router.pathname === link.href
						: router.pathname.startsWith(link.href);
					return (
						<Link
							key={link.href}
							href={link.href}
							className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
								isActive
									? "bg-[#832633] text-white shadow-sm"
									: "text-slate-700 hover:bg-slate-100"
							}`}
						>
							{link.label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
