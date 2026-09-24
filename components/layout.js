import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="modern-ui flex min-h-screen flex-col bg-[#914653] text-white">
			<link rel="icon" href="/eng_soc.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			<Navbar />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
