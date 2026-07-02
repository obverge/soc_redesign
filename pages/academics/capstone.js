import Head from "next/head";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import AcademicsNav from "../../components/AcademicsNav";
import capstoneData from "public/json/capstone.json";
import { CapstoneProjects } from "../../components/CapstoneProjects";

export default function Capstone() {
	return (
		<>
			<Head>
				<title>MUN Eng Society | Capstone Projects</title>
			</Head>
			<PageHeroWithImage
				label="Academics"
				title="Capstone Projects"
				description="Final-year engineering projects showcasing student innovation across disciplines."
				/* imageSrc="/res/capstone-hero.jpg" */
			/>
			<AcademicsNav />
			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<CapstoneProjects data={capstoneData} />
			</section>
		</>
	);
}
