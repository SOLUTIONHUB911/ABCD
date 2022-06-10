import Link from 'next/link';
import Image from 'next/image';
import ABCD from '/public/ABCD.png';
import { Discord, FaceBook, Instagram, LinkedIn, Medium, Twitter } from '../../public/icons';
import Subscribe from './Subscribe';
export default function Footer() {
	return (
		<footer className="mx-[17px] lg:mx-[50px] mt-64">
			<section className="lg:grid-cols-4 grid gap-4">
				<div className="w-full lg:col-span-2 col-span-4 font-bold text-2xl items-center">
					<Link href="/">
						<a>
							<Image strategy="lazyOnload" src={ABCD} height={35} width={150} alt="ABCD" />
						</a>
					</Link>
					<p className="text-[#ffd000] text-xs mt-[16px] font-normal">@ 2022 ABCD All rights reserved</p>
					<h4 className="font-semibold mt-[17px] text-lg">Subscribe to our Newsletter</h4>
					<p className="font-normal mt-4 mb-[16px] text-xs">
						Become an Alpha, Join the ABCD growing web3 community.<br /> Be the first to get updates on our
						activities and opportunities
					</p>
					<Subscribe />
				</div>

				<div className="sm:w-[50%]">
					<h3 className="font-bold text-2xl items-center">Learn More</h3>
					<Link href="/About">
						<a>
							<p className="text-xs font-normal mt-[16px]">About Us</p>
						</a>
					</Link>
					<Link href="/Contact">
						<a>
							<p className="text-xs font-normal mt-[6px]">Contact Us</p>
						</a>
					</Link>
					<p className="text-xs font-normal mt-[6px]">Hire Talent</p>
				</div>

				<div>
					<h3 className="font-bold text-2xl items-center">Get in Touch</h3>
					<p className="text-xs font-normal mt-[16px]">info@abcdevs.com</p>
					<div className="grid grid-cols-6 gap-4 items-center -mx-[10px] mt-[16px]">
						<FaceBook />
						<Discord />
						<Twitter />
						<LinkedIn />
						<Instagram />
						<Medium />
					</div>
				</div>
			</section>
		</footer>
	);
}
