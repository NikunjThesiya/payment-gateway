import DetailsForm from "@/components/DetailsForm";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function Login() {
	return (
		<>
			<Head>
				<title>Nord University Fees Portal India</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-cover w-100 min-h-screen pb-12 gap-10 flex flex-col px-4">
				<div className="px-2 md:px-10 flex flex-col gap-10">
					<div className="flex flex-col gap-3 items-start">
						<h1 className="text-5xl font-bold bg-gradient-to-r from-[#03618B] to-[#03618C] text-transparent bg-clip-text">
							Nord University Payment Portal
						</h1>
						{/* <h2 className="text-3xl font-bold bg-[#667A85] text-transparent bg-clip-text">
							Pay by card
						</h2> */}
						<p className="">
							This portal is relevant for applicants with education from India
							interested in English taught programmes at Nord University.
						</p>
					</div>
					<DetailsForm />
				</div>
				<Toaster />
			</main>
		</>
	);
}
