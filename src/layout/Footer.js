import Image from 'next/image';
import CustomLink from '../components/CustomLink';
import { Discord, FaceBook, Instagram, LinkedIn, Medium, Twitter } from '../components/icons';
import Subscribe from '../components/Subscribe';

const FooterLink = ({ path, title }) => (
	<CustomLink
		href={path}
		className='font-roboto font-normal text-white text-[11px] leading-[21px] hover:text-theme-main duration-500 ease-in md:text-sm md:leading-[35px]'
	>
		{title}
	</CustomLink>
);

export default function Footer() {
	return (
		<footer className='w-full px-4 pt-16  md:px-24 lg:px-8 mx-auto'>
			<div className='grid gap-10 row-gap-6 mb-8 grid-cols-2 md:grid-cols-4'>
				<div className='col-span-2'>
					<CustomLink href='/' className='inline-flex items-center'>
						<Image
							strategy='lazyOnload'
							title='ABCD'
							src='/assets/abcd-logo.svg'
							height={35}
							width={150}
							alt='ABCD Logo'
						/>
					</CustomLink>
					<p className='text-theme-main text-xs leading-[35px] font-roboto font-normal py-2'>
						@ {new Date().getFullYear()} ABCD All rights reserved
					</p>
					<div className='w-full max-w-full lg:max-w-sm'>
						<h4 className='text-white font-roboto font-semibold text-[17.5px] md:text-[28px] leading-[21px] md:leading-[38px]'>
							Subscribe to our Newsletter
						</h4>

						<p className='font-roboto font-normal text-sm leading-[25px] py-2'>
							Become an Alpha, Join the ABCD growing web3 community. Be the first to get updates on our
							activities and opportunities
						</p>
					</div>
					<div className='w-full max-w-full lg:max-w-[372px] md:max-w-md py-4'>
						<Subscribe />
					</div>
				</div>

				<div className='w-full col-span-2 flex justify-center flex-row'>
					<div className='space-y-2 w-full flex flex-col'>
						<h3 className='font-roboto font-bold text-white text[17.5px] md:text-[28px] leading-[21px] md:leading-[35px] items-center'>
							Learn More
						</h3>

						<FooterLink path={'/About'} title='About Us' />
						<FooterLink path={'/contact-us'} title='Contact Us' />
						<FooterLink path={'/hire-talent'} title='Hire Talent' />
					</div>
					<div className='w-full'>
						<h3 className='font-roboto font-bold text-white text[17.5px] md:text-[28px] leading-[21px] md:leading-[35px] items-center'>
							Get in Touch
						</h3>
						<FooterLink path='mailto:info@abcdevs.com' title='info@abcdevs.com' />

						<div className='w-full flex items-center flex-row gap-4 my-8'>
							<CustomLink href='/'>
								<FaceBook className='text-white hover:text-theme-main w-[10px] h-[10px] md:h-8 md:w-8' />
							</CustomLink>
							<CustomLink href='/'>
								<Discord className='text-white hover:text-theme-main w-[10px] h-[10px] md:h-8 md:w-8' />
							</CustomLink>
							<CustomLink href='/'>
								<Twitter className='text-white hover:text-theme-main w-[10px] h-[10px] md:h-8 md:w-8' />
							</CustomLink>
							<CustomLink href='/'>
								<LinkedIn className='text-white hover:text-theme-main w-[10px] h-[10px] md:h-8 md:w-8' />
							</CustomLink>
							<CustomLink href='/'>
								<Instagram className='text-white hover:text-theme-main w-[10px] h-[10px] md:h-8 md:w-8' />
							</CustomLink>
							<CustomLink href='/'>
								<Medium className='text-white hover:text-theme-main w-[10px] h-[10px] md:h-8 md:w-8' />
							</CustomLink>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
