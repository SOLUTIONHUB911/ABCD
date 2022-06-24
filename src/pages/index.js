/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import LandingHero from '/public/LandingHero.png';
import WhatWeDo from '/public/WhatWeDo.png';
import Navigation from '../components/Navigation';
import { HTML5, CSS3, JS, TypeScript, Php, Bootstrap, Nodejs, React, Vue } from '../components/icons';
import Empowa from '/public/empowa.png';
import Emurgo from '/public/emurgo.png';
import Africa from '/public/africa.png';
import Zoepool from '/public/zoepool.png';
import DApp from '/public/DApp.png';
import Parallel, { ShowCase } from '../components/Parallel';
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
				<section className='animation-fade w-full lg:w-[974px] h-[400px] lg:h-[500px] lg:mt-[120px] lg:top-[0] relative top-[370px] bg-[#ffd000]'>
					<h1 className='mx-[25px] lg:mx-[50px] text-black font-bold text-4xl w-[80%] lg:text-6xl lg:w-[550px] relative top-[87px]'>
						Hire/Get Access to ABCD vetted:
					</h1>
					<p className='mx-[25px] relative lg:mx-[50px] top-[100px] text-[28px] lg:text-[40px] font-bold'>
						Smart contract engineers
					</p>
					<p className='mx-[25px] lg:font-normal font-bold lg:mx-[50px] relative top-[82px] text-black text-[38px]'>
						for your project
					</p>

					<button className='mx-[25px] lg:mx-[50px] bg-[#FFD000] border border-black text-black font-bold relative top-[100px] text-base rounded w-[25%] lg:w-[15%] h-[40px]'>
						Get Started
					</button>
				</section>
				<div className='w-full lg:w-3/5 relative lg:left-[35%] bottom-[405px]'>
					<Image src={LandingHero} width={1024} height={768} layout='responsive' alt='Landing Hero Image' />
				</div>

				{/**What we do */}
				<section className='lg:flex lg:justify-between lg:-mt-[23%] mt-[20px]'>
					<div className='lg:w-1/2 w-full'>
						<Image src={WhatWeDo} width={720} height={589} layout='responsive' alt='What we do' />
					</div>
					<aside className='lg:w-[50%] w-screen mx-[20px]'>
						<h2 className='font-semibold text-[50px] text-[#ffd000]'>What We Do?</h2>
						<p className='w-[80%] leading-10'>
							African Blockchain Centre for developers is a development and talent management company
							focused on connecting clients with vetted talents capable of web3 solutions design and
							development solutions.
						</p>
						<ul className='mt-[35px] w-[80%] leading-10 list-disc list-inside'>
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
				<h2 className='font-semibold text-[45px] text-[#ffd000] text-center mt-12'>Partners</h2>
				<section className='mx-9 grid grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
					<Image src={Empowa} width={250} height={150} alt='Empowa Logo' />
					<Image src={Emurgo} width={250} height={150} alt='Emurgo Logo' />
					<Image src={Africa} width={250} height={150} alt='Proof of Africa' />

					<Image src={Zoepool} width={250} height={150} alt='Zoepool Logo' />

					<Image src={DApp} width={250} height={150} alt='DApp 360' />
				</section>
				{/**END OF PARTNERS */}

				{/**TALENT SHOWCASE */}
				{/* <div className='flex items-center space-x-10 py-4 px-20 bg-linear w-full h-full max-w-3xl max-h-[179px] skew-x-[-20deg] mx-auto'>
					<img
						src='/Abiona.png'
						alt='profile picture'
						width={150}
						height={150}
						className='border-[5px] border-white rounded-full skew-x-[20deg]'
					/>
					<aside className='flex items-center flex-col  font-roboto font-semibold text-xs leading-[18px] md:text-[30px] md:leading-[45px] skew-x-[20deg]'>
						Adewemiwo Abiona
						<div className='flex flex-row items-center space-x-4'>
							<HTML5 />
							<CSS3 />
							<JS />
							<Bootstrap />
							<TypeScript />
							<Php />
						</div>
					</aside>
				</div> */}
				<section className='w-full flex justify-between flex-col'>
					<div className='container w-full mx-auto'>
						<h2 className='font-semibold text-[30px] lg:text-[45px] text-[#ffd000] mt-20'>
							Talent Showcase
						</h2>
						<p className='mt-4 text-sm lg:text-[18px] leading-10 mx-auto'>
							Trained and seasoned Blockchain Developers.
						</p>
					</div>
					<div className='relative w-full'>
						<div className='w-full before:ml-[40%]'>
							<ShowCase image='/Abiona.png' name='Adewemiwo Abiona'>
								<HTML5 className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<CSS3 className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<JS className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<Bootstrap className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<TypeScript className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<Php className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							</ShowCase>
						</div>
						<div className=''>
							<ShowCase image='/Sam.png' name='Alfred Johnson'>
								<JS className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<Php className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<Nodejs className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<React className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							</ShowCase>
						</div>
						<div className=''>
							<ShowCase image='/Alfred.png' name='Obisike Chibueze'>
								<JS className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<Php className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<Nodejs className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
								<React className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							</ShowCase>
						</div>
					</div>
					{/* <div className='lg:ml-[53%] ml-[33%]'>
						<Parallel
							picture={<Image src={Abiona} alt='profile picture' width={120} height={120} />}
							text1='Adewemiwo Abiona'
						>
							<HTML5 className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<CSS3 className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<JS className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<Bootstrap className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<TypeScript className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<Php className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
						</Parallel>
					</div>
					<div className='lg:ml-[43%] ml-[20%]'>
						<Parallel
							picture={<Image src={Alfred} alt='profile picture' width={120} height={120} />}
							text1='Alfred Johnson'
						>
							<Nodejs className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<React className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<Vue className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<TypeScript className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
						</Parallel>
					</div>
					<div className='lg:ml-[32%] ml-[12%]'>
						<Parallel
							picture={<Image src={Sam} alt='profile picture' width={120} height={120} />}
							text1='Sam-Obisike Chibueze'
						>
							<Nodejs className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<React className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<Vue className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
							<TypeScript className='h-full w-full max-h-[15px] md:max-h-full  max-w-[27px] md:max-w-full' />
						</Parallel>
					</div> */}
				</section>

				{/**FOOTER */}
				<Footer />
			</main>
		</div>
	);
}
