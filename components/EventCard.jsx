export function EventCard(props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {props.image ? (
        <img className="mb-6 h-64 w-full rounded-2xl object-cover" src={props.image} alt={props.name} />
      ) : null}
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-3xl font-norwester text-slate-950 lg:text-5xl">{props.name}</h3>
          <h2 className="text-lg text-slate-600 lg:text-2xl">
            {props.alt_name ? `${props.age} • ${props.alt_name} • ${props.date}` : `${props.age} • ${props.date}`}
          </h2>
          <p className="text-base text-slate-600 lg:text-lg">{props.location} &#x2022; {props.cost}</p>
        </div>
        {props.description ? (
          <p className="text-center text-slate-700 md:text-base lg:px-10 lg:text-lg">{props.description}</p>
        ) : null}
        {Array.isArray(props.details) ? (
          <ul className="list-disc list-inside space-y-2 text-slate-700 md:text-base lg:px-10 lg:text-lg">
            {props.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {props.registerLink ? (
            <a href={props.registerLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#832633] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#6a2024]">
              Register
            </a>
          ) : null}
          {props.contactEmail ? (
            <a href={`mailto:${props.contactEmail}`} className="rounded-xl border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Contact
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}