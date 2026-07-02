import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import AcademicsNav from "../../components/AcademicsNav";

export default function EDI() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Equity, Diversity & Inclusion</title>
			</Head>
			<PageHeroWithImage
				label="Academics"
				title="Equity, Diversity & Inclusion"
				description="Resources and community for international students and inclusive engineering at MUN."
				/* imageSrc="/res/edi-hero.jpg" */
			/>
			<AcademicsNav />
			<section className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
				<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
					<h2 className="text-xl font-semibold text-slate-950">International Student Discord</h2>
					<p className="mt-4 leading-7 text-slate-600">
						If you are an international student, join our Discord server for events, announcements, and resources — including Arduino kit lending, work permit guidance, and more.
					</p>
					<a
						href="https://discord.gg/nMThDMSpDc"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 inline-flex rounded-full bg-[#832633] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6a2024]"
					>
						Join Discord
					</a>
					<p className="mt-6 text-sm text-slate-500">
						Questions? Reach out through social media or contact the Director of International Representation for your society.
					</p>
				</div>
			</section>
		</>
	);
}
