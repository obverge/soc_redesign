import Head from "next/head";
import { useState } from "react";
import PageHeroWithImage from "../../components/PageHeroWithImage";
import BlogPostCard from "../../components/BlogPostCard";
import RoarPostModal from "../../components/RoarPostModal";
import posts from "public/json/roar.json";

export default function Roar() {
	const [activePost, setActivePost] = useState(null);

	const normalizedPosts = posts.map((post) => ({
		...post,
		image: post.image?.includes("public/")
			? post.image.replace("public/", "/")
			: post.image,
	}));

	return (
		<>
			<Head>
				<title>MUN Eng Society | ROAR</title>
			</Head>
			<PageHeroWithImage
				label="ROAR Magazine"
				title="Stories from Engineering"
				description="Articles, insights, and updates from students, faculty, and teams across the MUN engineering community. Have a story? Reach out to your society's Director of Communications."
				/* imageSrc="/res/roar-hero.jpg" */
			/>
			<section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{normalizedPosts.map((post) => (
						<BlogPostCard key={post.slug} {...post} onOpen={() => setActivePost(post)} />
					))}
				</div>
			</section>

			<RoarPostModal post={activePost} onClose={() => setActivePost(null)} />
		</>
	);
}
