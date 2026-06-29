export function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-white py-10">
			<div className="mx-auto max-w-7xl px-5 sm:px-8">
				<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
					<div>
						<p className="font-semibold text-slate-950">MUN Engineering Society</p>
						<p className="mt-1 text-sm text-slate-600">Faculty of Engineering and Applied Science</p>
						<p className="mt-1 text-sm text-slate-600">Memorial University of Newfoundland</p>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<a href="/links" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50" aria-label="Links">
							<span className="material-icons text-xl">link</span>
						</a>
						<a href="https://www.linkedin.com/company/memorial-university-engineering-society/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50" aria-label="LinkedIn">
							<span className="material-icons text-xl">share</span>
						</a>
						<a href="https://www.instagram.com/munengsoc/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50" aria-label="Instagram">
							<span className="material-icons text-xl">camera_alt</span>
						</a>
					</div>
				</div>
				<p className="mt-8 text-sm text-slate-500">
					© {new Date().getFullYear()} Memorial University Engineering Society. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
