import Head from "next/head";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import AcademicsNav from "../../components/AcademicsNav";
import QuickLinkCard from "../../components/QuickLinkCard";

export default function Academics() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Academics</title>
			</Head>
			<PageHero
				label="Academics"
				title="Resources for Your Journey"
				description="From Engineering One through capstone — guides, support centres, and discipline overviews to help you succeed."
			/>
			<AcademicsNav />
			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<QuickLinkCard href="/academics/co-op" title="Co-op" description="Work term dates, ASM-CE contacts, and PEGNL licensure guidance." icon="work" />
					<QuickLinkCard href="/academics/support" title="Engineering One" description="The Student Success Centre and campus academic resources." icon="support" />
					<QuickLinkCard href="/academics/disciplines" title="Disciplines" description="Overview of all eight engineering programs at MUN." icon="category" />
					<QuickLinkCard href="/academics/capstone" title="Capstone Projects" description="Browse final-year capstone projects from engineering students." icon="engineering" />
					<QuickLinkCard href="/academics/edi" title="Equity & Inclusion" description="International student resources and EDI initiatives." icon="diversity_2" />
				</div>
			</section>
		</>
	);
}
