import Link from 'next/link';
import { useRouter } from 'next/router';
import 'animate.css';
import styles from '/styles/Hero.module.css';
import Talent from './Talent';
import { useState } from 'react';
import Register from '../pages/Register';
export default function Menu({ onClick }) {
	const router = useRouter();
	const [ Form, setForm ] = useState(false);
	function onclick() {
		setForm(!Form);
	}

	function onClose() {
		setForm(!Form);
	}
	return (
		<main>
			<nav id="navigation" className={styles.sidenav}>
				<main className="animate__animated animate__backInLeft">
					<a className={styles.closebtn} onClick={onClick}>
						&times;
					</a>
					<ul>
						<Link href="/About">
							<a className={router.pathname == '/About' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">About</li>
							</a>
						</Link>
						<Link href="/Blog">
							<a className={router.pathname == '/Blog' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">Blog</li>
							</a>
						</Link>
						<Link href="/Community">
							<a className={router.pathname == '/Community' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">Community</li>
							</a>
						</Link>
						<Link href="/Contact">
							<a className={router.pathname == '/Contact' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">Contact us</li>
							</a>
						</Link>

						<Link href="/Register">
							<a>
								<button
									className="lg:block bg-[#FFD000] py-2 px-5 text-black font-bold text-base rounded w-[50%] h-[40px]"
									id={styles.btneffect}
									onClick={onclick}
								>
									Join ABCD
								</button>
							</a>
						</Link>
					</ul>
				</main>
			</nav>
			{Form && (
				<Register onChange={onClose} className="relative top-[400px]">
					<div className="mx-auto mt-12">
						<a
							className={
								router.pathname == '/src/components/Talent.js' ? (
									'bg-[#ffd000] && text-black'
								) : (
									'bg-black && text-[#ffd000]'
								)
							}
						>
							<button className=" hover:bg-[#ffd000] text-center font-Roboto hover:text-black ml-[25px] text-[#ffd000] border border-[#ffd000] w-[91%] mr-[25px] p-[8px]">
								Talent
							</button>
						</a>
					</div>
					<Talent />
				</Register>
			)}
		</main>
	);
}
