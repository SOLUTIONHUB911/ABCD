import Head from 'next/head';
import Image from 'next/image';
import LandingHero from '/public/LandingHero.png';
import WhatWeDo from '/public/WhatWeDo.png';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Button from '../components/Elements';
import Empowa from '/public/empowa.png';
import Emurgo from '/public/emurgo.png';
import Africa from '/public/africa.png';
import Zoepool from '/public/zoepool.png';
import DApp from '/public/DApp.png';
import Parallel from '../components/Parallel';

export default function Home() {
	return (
		<div>
			<Head>
				<title>ABCD</title>
			</Head>
			<Navigation />
			<main>
				<section className="bg-[#ffd000] w-[974px] h-[500px] mt-[120px]">
					<h1 className="mx-[70px] text-black font-bold text-6xl w-[550px] relative top-[87px]">
						Hire/Get Access to ABCD vetted:
					</h1>
					<p className="relative mx-[70px] top-[100px] text-[40px] font-bold">Smart contract engineers</p>
					<p className="mx-[70px] relative top-[82px] text-black text-[38px]">for your project</p>
					<div className="mx-[70px] border border-black relative top-[100px] w-[15%] rounded">
						<Button text="Get Started" />
					</div>
				</section>
				<div className="w-3/5 relative left-[35%] bottom-[405px]">
					<Image src={LandingHero} width={1024} height={768} layout="responsive" alt="Landing Hero Image" />
				</div>

				{/**What we do */}
				<section className="flex justify-between -mt-[23%] overflow-hidden">
					<div className="w-1/2">
						<Image src={WhatWeDo} width={720} height={589} layout="responsive" alt="What we do" />
					</div>
					<aside className="w-[50%]">
						<h2 className="font-semibold text-[50px] text-[#ffd000]">What We Do?</h2>
						<p className="w-[80%] leading-10">
							African Blockchain Centre for developers is a development and talent management company
							focused on connecting clients with vetted talents capable of web3 solutions design and
							development solutions.
						</p>
						<ul className="mt-[35px] w-[80%] leading-10 list-disc list-inside">
							<li>Client-Talent bridge</li>
							<li>Talent vetting and management</li>
							<li>Product development and management</li>
							<li>ABCD Community management</li>
							<li>Training/education collaborations</li>
							<li>Impact projects</li>
						</ul>
					</aside>
				</section>
				{/**End of What We Do */}

				{/**PARTNERS */}
				<h2 className="font-semibold text-[45px] text-[#ffd000] text-center mt-12">Partners</h2>
				<section className="mx-9 flex justify-between mt-4">
					<Image src={Empowa} width={250} height={150} alt="Empowa Logo" />
					<Image src={Emurgo} width={250} height={150} alt="Emurgo Logo" />
					<Image src={Africa} width={250} height={150} alt="Proof of Africa" />
					<Image src={Zoepool} width={250} height={150} alt="Zoepool Logo" />
					<Image src={DApp} width={250} height={150} alt="DApp 360" />
				</section>
				{/**END OF PARTNERS */}

				{/**TALENT SHOWCASE */}
				<h2 className="font-semibold text-[45px] text-[#ffd000] mt-20 mx-[70px]">Talent Showcase</h2>
				<p className="mx-[70px] leading-10">Trained and seasoned Blockchain Developers.</p>
				<div className="ml-[43%]">
					<Parallel text1="Adewemiwo Abiona" />
				</div>
				<div className="ml-[17%]">
					<Parallel text1="Alfred Johnson" />
				</div>
				<div className="ml-[7%]">
					<Parallel text1="Sam-Obisike Chibueze" />
				</div>
			</main>
		</div>
	);
}
