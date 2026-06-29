import Head from "next/head";
import Link from "next/link";
import PageHero from "../../components/PageHero";

const societyOptions = [
	{ value: "society-a", label: "Society A" },
	{ value: "society-b", label: "Society B" },
	{ value: "both", label: "Both Societies" },
];

const reasonOptions = [
	{ value: "academic", label: "Academic support" },
	{ value: "financial", label: "Financial support" },
	{ value: "internal", label: "Internal event or society question" },
	{ value: "external", label: "External partnership or sponsor" },
	{ value: "general", label: "General inquiry" },
];

const contactEmails = {
	"society-a": {
		academic: "aspencer@mun.ca",
		financial: "fchisholm@mun.ca",
		internal: "sjebruneau@mun.ca",
		external: "obverge@mun.ca",
		general: "aspencer@mun.ca",
	},
	"society-b": {
		academic: "nbhopkins@mun.ca",
		financial: "ejcochran@mun.ca",
		internal: "bparsons24@mun.ca",
		external: "nsoomro@mun.ca",
		general: "aspencer@mun.ca",
	},
	both: {
		academic: "aspencer@mun.ca",
		financial: "fchisholm@mun.ca",
		internal: "sjebruneau@mun.ca",
		external: "obverge@mun.ca",
		general: "aspencer@mun.ca",
	},
};

export default function Contact() {
	const defaultEmail = contactEmails["society-a"].general;

	return (
		<>
			<Head>
				<title>MUN Eng Society | Contact</title>
			</Head>

			<PageHero
				label="Contact"
				title="Reach the right people quickly"
				description="Choose your society and reason for contact, then send an email to the best student society contact." 
			/>

			<section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
				<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
					<form className="space-y-8">
						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-900">Society</label>
								<select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20">
									{societyOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-900">Reason</label>
								<select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20">
									{reasonOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-900">Your name</label>
							<input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20" />
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-900">Your email</label>
							<input type="email" placeholder="you@mun.ca" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20" />
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-900">Message</label>
							<textarea rows={6} placeholder="What do you need help with?" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20" />
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<Link href="/events" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
								See events
							</Link>
							<button type="button" className="inline-flex items-center justify-center rounded-full bg-[#832633] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
								Start email
							</button>
						</div>

						<p className="mt-6 text-sm text-slate-500">This is a static contact page. Use the button above or select your society/reason to send an email to the right contact.</p>
					</form>
				</div>
			</section>
		</>
	);
}
