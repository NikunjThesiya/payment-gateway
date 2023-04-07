import DetailsForm from "@/components/DetailsForm";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { BsArrowRight, BsBoxArrowInRight } from "react-icons/bs";
import Link from "next/link";
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
			<main className="bg-cover w-100 min-h-screen gap-10 flex px-4">
				<div className="px-2 w-full md:px-10 flex flex-col gap-10">
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
					<div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2">
						<DetailsForm />
						<div className="flex flex-col bg-white rounded-xl px-6 py-6">
							<h3 className="text-2xl font-semibold text-gray-700 mb-3">
								Got a Query?
							</h3>
							<p className="text-gray-600">
								You can find information, guidance and support in our Help
								Centre.
							</p>
							<Link
								legacyBehavior
								href="https://www.nord.no/en/about/service-units/student-services"
							>
								<span className="mt-3 flex gap-2 hover:underline cursor-pointer items-center">
									<a className="text-[#01608A]">Go to Help Centre</a>
									<BsBoxArrowInRight className="text-2xl text-[#01608A]" />
								</span>
							</Link>
							<div className="w-100 h-[2px] my-4 bg-gray-300 rounded-xl"></div>
							<p className="text-gray-600">
								If you still need any additional support, please contact us by
								raising a case using the ‘Get in touch’ form within the ‘Help
								and Support’ section in The Hub.
							</p>
							<Link
								legacyBehavior
								href="https://www.nord.no/en/about/service-units/student-services"
							>
								<span className="mt-3 flex gap-2 hover:underline cursor-pointer items-center">
									<a className="text-[#01608A]">Get in Touch</a>
									<BsBoxArrowInRight className="text-2xl text-[#01608A]" />
								</span>
							</Link>
						</div>
					</div>
				</div>
				<Toaster />
			</main>
		</>
	);
}
