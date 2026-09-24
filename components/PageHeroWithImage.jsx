export default function PageHeroWithImage({ 
	label, 
	title, 
	description, 
	imageSrc, 
	imageAlt = "Hero image",
	children 
}) {
	const hasImage = Boolean(imageSrc);

	return (
		<section className="relative overflow-hidden border-b border-slate-200 bg-white">
			{hasImage && (
				<div className="absolute inset-0 h-[360px] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-[54vw] lg:min-w-[560px]">
					<img
						src={imageSrc}
						alt={imageAlt}
						className="h-full w-full object-cover"
					/>
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.72) 100%)",
						}}
					/>
					<div className="absolute inset-0 hidden lg:block" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 18%, rgba(255,255,255,0.35) 58%, transparent 100%)" }} />
				</div>
			)}

			<div className="mx-auto w-full max-w-7xl">
				<div className={`relative flex flex-col ${hasImage ? "min-h-[520px] pt-[250px] lg:min-h-[520px] lg:pt-0" : "min-h-[320px]"}`}>
					<div className={`relative z-10 w-full px-5 py-12 sm:px-8 lg:py-20 ${hasImage ? "lg:pr-[50vw]" : ""} flex flex-col justify-center`}>
						<div className="lg:max-w-2xl">
							{label ? (
								<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#832633]">{label}</p>
							) : null}
							<h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h1>
							{description ? (
								<p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
							) : null}
							{children}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
