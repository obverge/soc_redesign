import Head from "next/head";

export default function Computer() {
    return (
        <main className="bg-slate-50 text-slate-900 min-h-screen">
            <Head>
                <title>MUN Eng Society | Computer</title>
            </Head>
            <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                    <h1 className="text-center text-4xl font-bold text-slate-950">Computer Engineering</h1>
                    <p className="mt-6 text-center text-slate-600 text-lg leading-8">Explore the latest student initiatives, competitions, and events from the Computer Engineering community at MUN.</p>
                </div>
            </section>
        </main>
    );
}
