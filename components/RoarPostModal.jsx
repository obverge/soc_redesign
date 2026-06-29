export default function RoarPostModal({ post, onClose }) {
	if (!post) return null;

	return (
		<div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onClick={onClose}>
			<div className="absolute inset-0" />
			<div
				className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
					aria-label="Close"
				>
					<span className="text-xl">×</span>
				</button>

				{post.image ? (
					<img src={post.image} alt={post.title} className="h-56 w-full object-cover sm:h-72" />
				) : (
					<div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#832633]/10 to-slate-100 sm:h-72">
						<span className="text-4xl font-semibold text-[#832633]/30">ROAR</span>
					</div>
				)}

				<div className="p-6 sm:p-8">
					<div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
						{post.category ? <span className="rounded-full bg-[#832633]/10 px-2.5 py-0.5 text-[#832633]">{post.category}</span> : null}
						<span>{post.date}</span>
					</div>
					<h2 className="text-2xl font-semibold text-slate-950">{post.title}</h2>
					{post.author ? <p className="mt-2 text-sm text-slate-500">By {post.author}</p> : null}
					<div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
						{Array.isArray(post.content)
							? post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
							: post.content ? <p>{post.content}</p> : null}
					</div>
				</div>
			</div>
		</div>
	);
}
