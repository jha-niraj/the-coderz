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
			<head>
				<Script 
					async 
					src="https://www.googletagmanager.com/gtag/js?id=G-5NCWJTM4N2"

				></Script>
				<Script>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-5NCWJTM4N2');
				`}
				</Script>
			</head>
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
			</body>
		</html>
	);
}
