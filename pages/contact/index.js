import { useState } from "react";
import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import { societyOptions, reasonOptions, getContactRecipient } from "../../lib/contactEmails";

export default function Contact() {
	const [society, setSociety] = useState("society-a");
	const [reason, setReason] = useState("general");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const mailtoLink = () => {
		const recipient = getContactRecipient(society, reason).replace(/,\s*/g, ";");
		const subject = `Contact request from ${name || "a student"} (${reason})`;
		const body = `Name: ${name}\nEmail: ${email}\nSociety: ${society}\nReason: ${reason}\n\n${message}`;
		return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	};

	return (
		<>
			<Head>
				<title>MUN Eng Society | Contact</title>
			</Head>

			<PageHeroWithImage
				label="Contact"
				title="Email the right team instantly"
				description="Use the form below to send a message to the correct society or team, or use the quick email option for your purpose."
			imageSrc="/res/backgrounds/cubes.png"
				imageAlt="Contact our team"
			/>

			<section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<div className="mb-8 max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">Get in touch</p>
						<h2 className="mt-3 text-2xl font-semibold text-slate-950">We’re here to help students, sponsors, and partners.</h2>
					</div>
					<form className="space-y-8">
						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="society">
									Society
								</label>
								<select
									id="society"
									value={society}
									onChange={(e) => setSociety(e.target.value)}
									className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20"
								>
									{societyOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="reason">
									Reason
								</label>
								<select
									id="reason"
									value={reason}
									onChange={(e) => setReason(e.target.value)}
									className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20"
								>
									{reasonOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="name">
								Your name
							</label>
							<input
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Your name"
								className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="email">
								Your email
							</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="you@mun.ca"
								className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="message">
								Message
							</label>
							<textarea
								id="message"
								rows={6}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="What do you need help with?"
								className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#832633] focus:ring-2 focus:ring-[#832633]/20"
							/>
						</div>

						<div className="flex items-center justify-start">
							<a
								href={mailtoLink()}
								className="inline-flex items-center justify-center rounded-full bg-[#832633] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6a2024]"
							>
								Open email client
							</a>
						</div>

						<p className="text-sm text-slate-500">
							After clicking, your default email app will open with the selected recipient, subject, and message.
						</p>
					</form>
				</div>
			</section>
		</>
	);
}
