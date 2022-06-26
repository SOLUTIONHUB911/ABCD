/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import LandingHero from '/public/LandingHero.png';
import WhatWeDo from '/public/WhatWeDo.png';
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

export default function Home() {
	return (
		<>
			<Head>
				<title>ABCD</title>
			</Head>

			<section className='pt-16'>
				<div className='w-full lg:w-[974px] h-full max-h-[315px] md:max-h-[500px] lg:top-0 relative bg-theme-main order-2 md:order-1'>
					<div className='w-full max-w-full md:max-w-3xl px-8 py-2 lg:py-8'>
						<h1 className='font-roboto font-bold text-[30px] leading-[35.1px] text-theme-dark md:text-[80px] md:leading-[109px]  capitalize'>
							Hire/Get Access to ABCD vetted:
						</h1>
						<p className='font-roboto font-bold text-xl capitalize text-white md:text-[40px] md:leading-[54px] py-2'>
							Smart contract engineers
						</p>
						<p className='font-roboto font-bold text-xl capitalize md:text-[40px] md:leading-[54px] text-theme-dark'>
							for your project
						</p>
						<button className='font-roboto font-semibold text-center text-theme-dark text-lg px-4 py-[6px] my-4 border border-theme-dark rounded-[5px] duration-300 ease-in hover:border-2 hover:shadow-md hover:shadow-theme-dark'>
							Get Started
						</button>
					</div>
				</div>
				<div className='w-full lg:w-[68%] relative lg:left-[28%] top-0 lg:-top-[400px] pb-0 mb-0 order-1 md:order-2'>
					<img
						src='/assets/hero-section-abcd.svg'
						className='w-full h-full'
						layout='responsive'
						alt='Landing Hero Image'
					/>
				</div>
			</section>

			{/**What we do */}
			<section className='w-full flex flex-col justify-between md:flex-row mx-auto lg:-mt-[300px]'>
				<div className='w-full lg:w-1/2 '>
					<img
						src='/assets/vector-what-we-do.svg'
						className='w-full h-full'
						layout='responsive'
						alt='What we do'
					/>
				</div>
				<aside className='w-full md:w-1/2 max-w-[600px] px-4 mx-auto'>
					<h2 className='font-semibold font-roboto text-[30px] md:text-[50px] leading-[41px] md:leading-[68px] text-theme-main'>
						What We Do?
					</h2>
					<p className='text-white font-roboto font-normal text-lg leading-10'>
						African Blockchain Centre for developers is a development and talent management company focused
						on connecting clients with vetted talents capable of web3 solutions design and development
						solutions.
					</p>
					<ul className='w-full text-white font-roboto font-normal text-lg leading-10 list-disc list-inside my-4'>
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
			<h2 className='font-semibold font-roboto text-[30px] text-center md:text-[50px] leading-[41px] md:leading-[68px] text-theme-main mt-12'>
				Partners
			</h2>
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
					<h2 className='font-semibold font-roboto text-[30px] md:text-[50px] leading-[41px] md:leading-[68px] text-theme-main mt-20'>
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
		</>
	);
}
