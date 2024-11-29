import type { Metadata } from "next";
import "./globals.css";
import { Chilanka, Poppins } from "next/font/google";
import { Providers } from "@/app/providers/providers";
import { AppProvider } from "./context/usercontext";
import ClientLayout from "./clientlayout";
import { ThemeProvider } from "@/components/themeprovider";
import MainLayout from "./mainlayout";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/google-analytics";
import CookieBanner from "@/components/cookie-banner";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
	title: "The Coder'z",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Suspense fallback={null}>
				<GoogleAnalytics GA_MEASUREMENT_ID={process.env.G_ANALYTICS_ID || ""} />
			</Suspense>
			<body className={poppins.className} style={{ scrollBehavior: "smooth" }}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Providers>
						<AppProvider>
							<MainLayout>
								{
									children
								}
								<Toaster />
							</MainLayout>
						</AppProvider>
					</Providers>
				</ThemeProvider>
				<CookieBanner />
			</body>
		</html>
	);
}
