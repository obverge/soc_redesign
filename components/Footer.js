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
						<a href="https://www.linkedin.com/company/memorial-university-engineering-society/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-50" aria-label="LinkedIn">
							<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" className="text-slate-600" />
							</svg>
						</a>
						<a href="https://www.instagram.com/munengsoc/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-50" aria-label="Instagram">
							<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.717 0 8.283.012 7.028.072 2.731.272.273 2.69.073 7.052.012 8.308 0 8.742 0 12s.012 3.692.072 4.947c.2 4.358 2.656 6.78 6.92 6.98 1.259.06 1.692.072 4.966.072s3.709-.012 4.968-.072c4.26-.2 6.789-2.636 6.991-6.99.059-1.255.073-1.688.073-4.947s-.012-3.692-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.708.012 15.276 0 12 0z" className="text-slate-600" />
								<circle cx="12" cy="12" r="3.6" className="text-slate-600" fill="currentColor" />
								<circle cx="18.406" cy="5.594" r="0.6" className="text-slate-600" fill="currentColor" />
							</svg>
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
