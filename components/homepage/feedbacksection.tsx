"use client"

import { motion } from "framer-motion";

interface FeedbackItemProps {
	name: string;
	role: string;
	feedback: string;
}
// const FeedbackItem = ({ name, role, feedback }: FeedbackItemProps) => (
// 	<motion.div
// 		className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-black via-gray-600"
// 		initial={{ opacity: 0, y: 50 }}
// 		animate={{ opacity: 1, y: 0 }}
// 		transition={{ duration: 0.5 }}
// 	>
// 		<p className="font-bold italic mb-4 text-white">&quot;{feedback}&quot;</p>
// 		<div className="flex items-center">
// 			<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">
// 				{name[0]}
// 			</div>
// 			<div className="ml-4">
// 				<h3 className="font-bold">{name}</h3>
// 				<p className="text-sm">{role}</p>
// 			</div>
// 		</div>
// 	</motion.div>
// );

// const FeedbackSection = () => {
// 	const feedbacks = [
// 		{ name: "John Doe", role: "Software Developer", feedback: "This platform has been invaluable in my coding journey. The resources are top-notch!" },
// 		{ name: "Jane Smith", role: "UX Designer", feedback: "I love how the community here is so supportive. It's a great place to learn and grow." },
// 		{ name: "Mike Johnson", role: "Student", feedback: "As a beginner, I found the tutorials here extremely helpful and easy to follow." },
// 		{ name: "Niraj Jha", role: "Student", feedback: "As a beginner, I found the tutorials here extremely helpful and easy to follow." },
// 	];

// 	return (
// 		<section className="w-full sm:w-[90%]">
// 			<div className="container mx-auto px-4">
// 				<h2 className="text-3xl font-bold text-center mb-12">What Our Coder&apos;z Say</h2>
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{feedbacks.map((item, index) => (
// 						<FeedbackItem key={index} {...item} />
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

import { cn } from "@/app/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
	{
		name: "Jack",
		username: "@jack",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Jill",
		username: "@jill",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "John",
		username: "@john",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "Jane",
		username: "@jane",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "Jenny",
		username: "@jenny",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "James",
		username: "@james",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/james",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image className="rounded-full" width="32" height="32" alt="Feedback Giving user name" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function FeedbackSection() {
	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<h2 className="text-3xl font-bold text-center mb-12">What Our Coder&apos;z Say</h2>
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}


export default FeedbackSection;