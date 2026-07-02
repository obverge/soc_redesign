import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import AcademicsNav from "../../components/AcademicsNav";

export default function CoOp() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Co-op</title>
			</Head>
			<PageHeroWithImage label="Academics" title="Co-op" description="Get the most out of your co-op experience at Memorial." /* imageSrc="/res/coop-hero.jpg" */ />
			<AcademicsNav />
			<article className="prose-section mx-auto max-w-3xl px-5 py-12 sm:px-8">
				<p>
					Students in Memorial's Bachelor of Engineering co-operative program combine academic and practical education through a series of four-month work terms. While the Co-op Handbook contains most information, this page serves as an additional resource.
				</p>

				<h2>Work Term Dates & Forms</h2>
				<p>Important dates for work terms and course outlines are available on the Co-op Office website.</p>
				<a href="https://www.mun.ca/coop/programs/engineering/work-term-dates-and-forms/" target="_blank" rel="noopener noreferrer" className="btn-primary">
					Work Term Dates and Forms
				</a>

				<h2>Out-of-Province & International Placements</h2>
				<p>
					If you want to complete a work term outside Newfoundland (or internationally), contact the ASM-CE (Co-op Office staff) responsible for your target province or country. They can provide information on requirements, available placements, and accommodations.
				</p>
				<div className="my-6 overflow-hidden rounded-2xl border border-slate-200">
					<img src="/res/academics/asmce.png" alt="Map with FEAS Co-op representatives" className="w-full" />
				</div>

				<h2>Claiming Work Terms Toward Your P.Eng</h2>
				<p>
					After completing half your degree (term 4 at MUN), up to 12 months of work term experience can count toward PEGNL licensure. 48 months of engineering experience is required for a P.Eng license. PEGNL now uses a Competency Based Assessment (CBA) instead of logbooks.
				</p>
				<p>For your work term experience to count, collect:</p>
				<ul>
					<li>Employer name</li>
					<li>Supervisor name and title</li>
					<li>Contact information</li>
					<li>Descriptions of main projects and responsibilities</li>
				</ul>
				<p>
					Learn more on the{" "}
					<a href="https://pegnl.ca/applicant/competency-based-assessment/" target="_blank" rel="noopener noreferrer">CBA site</a>{" "}
					and the{" "}
					<a href="https://pegnl.ca/faq/registration-faq/" target="_blank" rel="noopener noreferrer">PEGNL FAQ</a>.
				</p>

				<div className="my-8 overflow-hidden rounded-2xl border border-slate-200">
					<object className="h-[480px] w-full" type="application/pdf" data="/res/academics/MUN%20Student%20Society%20Webinar%202025-11-05.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0">
						<p>A problem loading the CBA Presentation PDF has occurred.</p>
					</object>
				</div>
			</article>
		</>
	);
}
