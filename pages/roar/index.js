import { NothingHereYet } from "../../components/NothingHereYet";
import jsonData from "public/json/events.json";
import { EventCard } from "../../components/EventCard";
import Head from 'next/head'


export default function Roar() {
	return (
		<main className="repeating-bg flex min-h-screen flex-col">
						<Head>
				<title> MUN Eng Society | ROAR</title>
			</Head>
			<section className="flex flex-col items-center w-full pt-10 pb-5 pl-2 pr-2 lg:pb-10 lg:pl-10 lg:pr-10 lg:pt-10 gap-5 text-black">
				<div className=" flex flex-col items-center w-1/3 pt-10 pb-10">
					<h1 className="text-8xl font-ptserif" >ROAR</h1>
				</div>
				<div className="flex flex-col items-start w-3/4">
					<h2 className="text-3xl font-serif pt-2"  >Issue 1 (18-03-2026)</h2>
				</div>
				<div className="flex justify-center w-full lg:w-3/4">
					<embed className="w-full h-screen pt-2" src="../res/ROAR/Roar_2026-03-12.pdf"
						type="application/pdf"></embed>
				</div>
			</section>
		</main>
	);
}