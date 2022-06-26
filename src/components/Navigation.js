import Image from 'next/image';
import ABCD from '/public/ABCD.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Toggle from './Toggle';
import styles from '/styles/Hero.module.css';
import { useState } from 'react';
import { MenuIco } from './icons';
import Menu from './Menu';
export default function Navigation() {
	const router = useRouter();
	const [ State, setState ] = useState(false);
	function openNav() {
		setState(!State);
		console.log(3);
	}
	function closeNav() {
		setState(!State);
		console.log(2);
	}
	return (
		<nav className="flex justify-between mx-[25px] lg:mx-[50px] mt-10 items-center font-Roboto">
			<Link href="/">
				<a>
					<Image strategy="lazyOnload" src={ABCD} height={35} width={150} layout="fixed" alt="ABCD" />
				</a>
			</Link>

			<div className="lg:hidden cursor-pointer">
				<MenuIco onClick={openNav} />
			</div>
			{State && <Menu onClick={closeNav} />}
			<ul className="lg:flex hidden">
				<Link href="/About">
					<a className={router.pathname == '/About' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4 hover:text-[#ffd000]">About</li>
					</a>
				</Link>
				<Link href="/Blog">
					<a className={router.pathname == '/Blog' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4 hover:text-[#ffd000]">Blog</li>
					</a>
				</Link>
				<Link href="/Community">
					<a className={router.pathname == '/Community' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4 hover:text-[#ffd000]">Community</li>
					</a>
				</Link>
				<Link href="/Contact">
					<a className={router.pathname == '/Contact' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4 hover:text-[#ffd000] font-Roboto">Contact us</li>
					</a>
				</Link>
			</ul>
			<Link href="/Register">
				<a className="hidden lg:block">
					<button
						className="text-center lg:block bg-[#FFD000] py-2 px-5 text-black 
			font-bold font-Roboto text-base rounded w-[130px] h-[40px]
			hover:bg-transparent hover:border hover:border-[#ffd000] hover:text-white hover:shadow-xl"
						id={styles.btneffect}
					>
						Join ABCD
					</button>
				</a>
			</Link>
		</nav>
	);
}
