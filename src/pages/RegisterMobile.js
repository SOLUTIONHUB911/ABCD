import { useEffect, useState } from 'react';
import { AuthBg } from '../components/icons';
import styles from '/styles/Hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
export default function RegisterMobile({ onChange, children, className }) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<Navigation />
			<main className="font-Roboto" data-aos="zoom-in-down">
				<div className="mx-auto">
					{children}
					<button
						type="submit"
						className="h-full p-[10px] block bg-[#FFD000] ml-[25px] w-[100%] text-black mt-4 text-center text-lg font-semibold"
						id={styles.btneffect}
					>
						Submit
					</button>
					<p className="text-base font-normal font-Roboto w-[100%] mx-[25px]">*These fields are required</p>
					<AuthBg className="relative left-[17%]" />
				</div>
			</main>
		</div>
	);
}
