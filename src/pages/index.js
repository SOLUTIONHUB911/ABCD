import Head from 'next/head';
import Image from 'next/image';
import LandingHero from '/public/LandingHero.png';
import WhatWeDo from '/public/WhatWeDo.png';
import Navigation from '../components/Navigation';
import { HTML5, CSS3, JS, TypeScript, Php, Bootstrap, Nodejs, React, Vue } from '../../public/icons';
import Empowa from '/public/empowa.png';
import Emurgo from '/public/emurgo.png';
import Africa from '/public/africa.png';
import Zoepool from '/public/zoepool.png';
import DApp from '/public/DApp.png';
import Parallel from '../components/Parallel';
import Alfred from '/public/Alfred.png';
import Sam from '/public/Sam.png';
import Abiona from '/public/Abiona.png';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>ABCD</title>
			</Head>
			<Navigation />
			<main>
				<section className="bg-[#ffd000] w-[974px] h-[500px] mt-[120px]">
					<h1 className="mx-[50px] text-black font-bold text-6xl w-[550px] relative top-[87px]">
						Hire/Get Access to ABCD vetted:
					</h1>
					<p className="relative mx-[50px] top-[100px] text-[40px] font-bold">Smart contract engineers</p>
					<p className="mx-[50px] relative top-[82px] text-black text-[38px]">for your project</p>

					<button className=" mx-[50px] bg-[#FFD000] border border-black text-black font-bold relative top-[100px] text-base rounded w-[15%] h-[40px]">
						Get Started
					</button>
				</section>
				<div className="w-3/5 relative left-[35%] bottom-[405px]">
					<Image src={LandingHero} width={1024} height={768} layout="responsive" alt="Landing Hero Image" />
				</div>

				{/**What we do */}
				<section className="flex justify-between -mt-[23%] md:flex-none">
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
				<section className="mx-9 grid grid-cols-5 gap-4 mt-4">
					<Image src={Empowa} width={250} height={150} alt="Empowa Logo" />
					<Image src={Emurgo} width={250} height={150} alt="Emurgo Logo" />
					<Image src={Africa} width={250} height={150} alt="Proof of Africa" />
					<Image src={Zoepool} width={250} height={150} alt="Zoepool Logo" />
					<Image src={DApp} width={250} height={150} alt="DApp 360" />
				</section>
				{/**END OF PARTNERS */}

				{/**TALENT SHOWCASE */}
				<h2 className="font-semibold text-[45px] text-[#ffd000] mt-20 mx-[50px]">Talent Showcase</h2>
				<p className="mx-[70px] mt-4 leading-10">Trained and seasoned Blockchain Developers.</p>
				<div className="ml-[53%]">
					<Parallel
						picture={<Image src={Abiona} alt="profile picture" width={120} height={120} />}
						text1="Adewemiwo Abiona"
						icon1={<HTML5 />}
						icon2={<CSS3 />}
						icon3={<JS />}
						icon4={<Bootstrap />}
						icon5={<TypeScript />}
						icon6={<Php />}
					/>
				</div>
				<div className="ml-[43%]">
					<Parallel
						picture={<Image src={Alfred} alt="profile picture" width={120} height={120} />}
						text1="Alfred Johnson"
						icon1={<JS />}
						icon2={<Php />}
						icon3={<Nodejs />}
						icon4={<React />}
					/>
				</div>
				<div className="ml-[32%]">
					<Parallel
						picture={<Image src={Sam} alt="profile picture" width={120} height={120} />}
						text1="Sam-Obisike Chibueze"
						icon1={<Nodejs />}
						icon2={<React />}
						icon3={<Vue />}
						icon4={<TypeScript />}
					/>
				</div>

				{/**FOOTER */}
				<Footer />
			</main>
		</div>
	);
}
