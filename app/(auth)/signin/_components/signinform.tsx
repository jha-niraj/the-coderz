"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/app/lib/utils";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useAppContext } from "@/app/context/usercontext";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function SignInForm() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const { email, setEmail, password, setPassword, image, setImage } = useAppContext();
	const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);

	useEffect(() => {
		if(status === "authenticated") {
			router.push("/profile");
		}
	}, [router, session, status]);

	const handleSignInWithGoogle = async() => {
		try {
			const callback = await signIn("google", { callbackUrl: "/profile" });

			if(callback?.error) {
				toast.error("Email not registered");
				router.push("/register");
			}
		} catch(err: any) {
			console.error("Google sign-in error: " + err);
		}
	}

	// const handleSignInWithGitHub = async() => {
	// 	try {
	// 		const callback = await signIn("github", { callbackUrl: "/profile" });
	// 		if(callback?.error) {
	// 			toast.error("Email not registered");
	// 			router.push("/register");
	// 		}
	// 	} catch(err: any) {
	// 		console.error("Github sign-in error: " + err);
	// 	}
	// }

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		const response = await signIn("credentials", {
			email, password, image,
			redirect: false
		})

		if(response?.error) {
			toast.error(response?.error);
		}
		if(response?.ok && !response?.error) {
			setIsSubmitting(false);
			toast.success("Logged in Successfully");
			router.push("/profile");
		}
	};

	return (
		<div className="flex flex-col pt-16 text-black dark:text-white w-full h-screen gap-2 items-center justify-center">
			<h1 className="relative z-10 text-md text-3xl w-[85%] sm:w-[65%] md:w-[50%] lg:w-[30%] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
				Welcome Back
			</h1>
			<div className="flex flex-col p-5 rounded-lg gap-5 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[30%]">
				<form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
					<div className="flex flex-col gap-1">
						<label className="text-md font-medium">Email</label>
						<Input type="text" placeholder="user1@gmail.com" onChange={(e: any) => setEmail(e.target.value)} />
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-md font-medium">Password</label>
						<Input type="password" placeholder="********" onChange={(e: any) => setPassword(e.target.value)} />
					</div>
					<RainbowButton type="submit" className="w-full">
                        {
                            isSubmitting ? "Signing In..." : "Sign In"
                        }
                    </RainbowButton>
				</form>

				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

				<div className="flex flex-col sm:flex-row gap-2">
					<button
						className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black border-2 border-black dark:border-none rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
						type="submit"
						onClick={handleSignInWithGoogle}
					>
						<IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
						<span className="text-neutral-700 dark:text-neutral-300 text-sm">
							Google
						</span>
						<BottomGradient />
					</button>
					{/* <button
						className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black border-2 border-black dark:border-none rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
						type="submit"
						onClick={handleSignInWithGitHub}
					>
						<IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
						<span className="text-neutral-700 dark:text-neutral-300 text-sm">
							GitHub
						</span>
						<BottomGradient />
					</button> */}
				</div>

				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

				<div className="text-center">
					<div className="text-sm text-black dark:text-white flex gap-2 items-center justify-center">
						<h1 className="text-sm lg:font-bold font-medium">Don&apos;t have an account?</h1>
						<Link href="/register" className="font-medium lg:font-bold text-sm text-sky-600 hover:text-indigo-500">
							Sign up
						</Link>
					</div>
				</div>	
			</div>	
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
