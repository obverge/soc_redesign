import { LinkCard } from "../../components/LinkCard";
import Head from "next/head";
import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function Events() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR83XwKx-73K3XbnY1-1ejMyRL2VpCCAt7seGKR9v_w_8T-frVnd4efvHiifYidClQfyd1UwjEqIiV0/pub?output=csv")
            .then((response) => response.text())
            .then((data) => {
                const results = Papa.parse(data, { header: true });
                setData(results.data);
                //console.log(results.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <main className="bg-[#914653] text-white min-h-screen">
            <Head>
                <title>MUN Eng Society | Links</title>
            </Head>
            <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
                <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <img src="../res/logos/soc_round_logo.png" className="h-24 rounded-full lg:h-48" alt="MUN Eng Society logo" />
                        <h3 className="text-2xl font-norwester text-slate-950 lg:text-4xl">@munengsoc</h3>
                        <p className="text-base text-slate-600 lg:text-lg">MUN Engineering Undergraduate Society</p>
                    </div>
                </div>
                <section className="mt-8 flex min-h-screen flex-col items-center gap-y-3 p-3">
                    {data &&
                        Object.entries(data).map(([event, event_data]) => {
                            const currentDate = new Date();
                            const beginShow = event_data.BeginShow ? new Date(event_data.BeginShow) : null;
                            const endShow = event_data.EndShow ? new Date(event_data.EndShow) : null;
                            if ((!beginShow && !endShow) || (beginShow && !endShow && currentDate >= beginShow) || (!beginShow && endShow && currentDate <= endShow) || (beginShow && endShow && currentDate >= beginShow && currentDate <= endShow)) {
                                return <LinkCard key={event} title={event_data.Title} description={event_data.Description} link={event_data.Link} image={event_data.ImageLink} targetDate={event_data.Countdown} targetText={event_data.CountdownText} />;
                            }
                        })}
                </section>
            </section>
        </main>
    );
}
