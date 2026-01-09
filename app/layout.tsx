import "./globals.css"
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";

const font = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={font.className} suppressHydrationWarning>
			<body className="h-screen p-0 m-0 flex">
				<ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
