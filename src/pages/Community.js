import { Discord } from '../../public/icons';
import Navigation from '../components/Navigation';
import CommunityHero from '/public/CommunityHero.jpg';
import Image from 'next/image';
import styles from '/styles/Hero.module.css';
import Footer from '../components/Footer';

export default function Community() {
	return (
		<div>
			<Navigation />
			<h2 className="font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px]">
				ABCD Community
			</h2>
			<main className=" grid-rows-2 grid lg:flex lg:justify-between mb-12">
				<div className="mx-[25px] lg:mx-[50px] lg:w-[40%] order-last">
					<p className="leading-10 tracking-wide text-sm text-justify">
						Join the world’s most influential workforce in eb3 product managers, web3 product designers,
						smart contract engineers, smart contract security audits, smart contracts testing etc. Connect
						with experts through networking events, volunteering, and more.
					</p>
					<button className="mt-16 flex border border-[#ffd000] py-2 px-5 text-[#ffd000] font-bold text-base rounded h-[40px]">
						Join ABCD{' '}
						<span className="ml-[10px]">
							<Discord color="#ffd000" />
						</span>
					</button>
				</div>
				<article className="relative mx-[25px]">
					<div className={styles.community}>
						<Image src={CommunityHero} alt="Team Picture" width={620} height={450} layout="responsive" />
					</div>
				</article>
			</main>
			<Footer />
		</div>
	);
}
