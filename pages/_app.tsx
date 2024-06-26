import Footer from "@/components/layout/Footer";
import LoginHeader from "@/components/layout/LoginHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={roboto.className}>
			<LoginHeader />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}
