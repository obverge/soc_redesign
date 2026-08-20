import { useRef } from "react";

export default function SponsorShowcase({ sponsors }) {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollAmount = container.offsetWidth * 0.75;
        container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#832633]">Our partners</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Sponsors & supporters we’ve worked with</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        Scroll through our sponsor showcase to see organizations that have supported Memorial engineering students, events, and competitions.
                    </p>
                </div>
                {sponsors.length > 0 ? (
                    <div className="hidden items-center gap-2 sm:flex">
                        <button
                            type="button"
                            onClick={() => scroll("left")}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                            aria-label="Scroll sponsors left"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll("right")}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                            aria-label="Scroll sponsors right"
                        >
                            ›
                        </button>
                    </div>
                ) : null}
            </div>
            {sponsors.length === 0 ? (
                <div className="mt-6 rounded-3xl bg-white p-8 text-center text-sm text-slate-600 ring-1 ring-slate-200">
                    Sponsorship opportunities are available, and sponsor logos will be added here once partner approvals and artwork are finalized.
                </div>
            ) : (
                <div className="mt-6 overflow-x-auto" ref={carouselRef}>
                    <div className="flex min-w-max gap-6 pb-4">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor} className="min-w-[180px] flex-shrink-0 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                                <img src={sponsor} alt={sponsor.split("/").pop()?.replace(/[-_]/g, " ").replace(/\.[^.]+$/, "") ?? "Sponsor logo"} className="h-20 w-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
