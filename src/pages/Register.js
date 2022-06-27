import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Client from '../components/Client';
import { AuthBg } from '../components/icons';
import Talent from '../components/Talent';
import styles from '/styles/Hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Register({ onChange }) {
	const [ Form, setForm ] = useState(true);
	const onClick = () => {
		setForm(false);
	};
	const handleChange = () => {
		setForm(true);
	};
	const router = useRouter();
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<main className="font-Roboto absolute z-10" data-aos="zoom-in-down">
			<div className="border border-black rounded relative bg-black shadow-3xl top-[10%] left-[60%] mx-auto">
				<a
					className="float-right mr-[25px] text-2xl border border-[#ffd000]
				rounded-full text-center w-[30px] h-[30px] bg-[#ffd000] mt-[10px] text-black cursor-pointer"
					onClick={onChange}
				>
					&times;
				</a>
				<div className="mx-auto mt-12">
					<a
						className={
							router.pathname == '/src/components/Client.js' ? (
								'bg-[#ffd000] && text-black'
							) : (
								'bg-black && text-[#ffd000]'
							)
						}
					>
						<button
							className=" hover:bg-[#ffd000] hover:text-black ml-[25px] text-[#ffd000] border border-[#ffd000] px-5 w-[250px] h-[25px]"
							onClick={handleChange}
						>
							Client
						</button>
					</a>
					<a
						className={
							router.pathname == '/Talent.js' ? (
								'bg-[#ffd000] && text-black'
							) : (
								'bg-black && text-[#ffd000]'
							)
						}
					>
						<button
							className="text-[#ffd000] border hover:bg-[#ffd000] hover:text-black border-[#ffd000] px-5 w-[250px] h-[25px] mr-[25px]"
							onClick={onClick}
						>
							Talent
						</button>
					</a>
				</div>
				{Form ? <Client /> : <Talent />}
				<button
					type="submit"
					className="h-full p-[10px] block bg-[#FFD000] ml-[25px] w-[500px] text-black mt-4 text-center text-lg font-semibold"
					id={styles.btneffect}
				>
					Submit
				</button>
				<p className="text-base font-normal font-Roboto w-[100%] mx-[25px]">*These fields are required</p>
				<AuthBg className="relative left-[17%]" />
			</div>
		</main>
	);
}
