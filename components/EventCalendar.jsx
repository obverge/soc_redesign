import { useMemo, useState } from "react";

const MONTHS = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseEventDates(event) {
	if (event.startDate) {
		const start = new Date(event.startDate + "T12:00:00");
		const end = event.endDate ? new Date(event.endDate + "T12:00:00") : start;
		return { start, end };
	}
	return null;
}

function isSameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isInRange(date, start, end) {
	const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
	const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
	return d >= s && d <= e;
}

export default function EventCalendar({ events, organizerLogos, onEventClick, defaultDate }) {
	const [viewDate, setViewDate] = useState(() => defaultDate || new Date(2026, 5, 1));

	const parsedEvents = useMemo(
		() => events.map((event, index) => ({ ...event, index, dates: parseEventDates(event) })).filter((e) => e.dates),
		[events]
	);

	const year = viewDate.getFullYear();
	const month = viewDate.getMonth();
	const firstDay = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const calendarDays = [];
	for (let i = 0; i < firstDay; i++) calendarDays.push(null);
	for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

	const getEventsForDay = (day) => {
		if (!day) return [];
		const date = new Date(year, month, day);
		return parsedEvents.filter(({ dates }) => isInRange(date, dates.start, dates.end));
	};

	const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
	const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-xl font-semibold text-slate-950">
					{MONTHS[month]} {year}
				</h2>
				<div className="flex gap-2">
					<button onClick={prevMonth} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100" aria-label="Previous month">
						<span className="material-icons text-xl">chevron_left</span>
					</button>
					<button onClick={nextMonth} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100" aria-label="Next month">
						<span className="material-icons text-xl">chevron_right</span>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-7 gap-1">
				{DAYS.map((day) => (
					<div key={day} className="py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
						{day}
					</div>
				))}
				{calendarDays.map((day, i) => {
					const dayEvents = day ? getEventsForDay(day) : [];
					const isToday = day && isSameDay(new Date(year, month, day), new Date());
					return (
						<div
							key={i}
							className={`min-h-[72px] rounded-lg border p-1 sm:min-h-[88px] sm:p-2 ${
								day ? "border-slate-100 bg-slate-50/50" : "border-transparent"
							} ${isToday ? "ring-2 ring-[#832633]/30" : ""}`}
						>
							{day ? (
								<>
									<span className={`text-xs font-semibold sm:text-sm ${isToday ? "text-[#832633]" : "text-slate-700"}`}>{day}</span>
									<div className="mt-1 space-y-1">
										{dayEvents.map((event) => (
											<button
												key={event.index}
												onClick={() => onEventClick(event, organizerLogos[event.organizer])}
												className="flex w-full items-center gap-1 rounded-md bg-[#832633]/10 px-1.5 py-0.5 text-left transition hover:bg-[#832633]/20 sm:px-2 sm:py-1"
											>
												{organizerLogos[event.organizer] ? (
													<img src={organizerLogos[event.organizer]} alt="" className="hidden h-4 w-4 rounded-full object-contain sm:block" />
												) : null}
												<span className="truncate text-[10px] font-medium text-[#832633] sm:text-xs">{event.name}</span>
											</button>
										))}
									</div>
								</>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
}
