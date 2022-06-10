import Image from 'next/image';
import ABCD from '/public/ABCD.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from '../../public/icons';
export default function Navigation() {
	const router = useRouter();
	return (
		<nav className="flex justify-between mx-[25px] lg:mx-[50px] mt-10 items-center">
			<Link href="/">
				<a className="">
					<Image strategy="lazyOnload" src={ABCD} height={35} width={150} layout="fixed" alt="ABCD" />
				</a>
			</Link>
			<div className="lg:hidden relative bottom-[5px]">
				<Menu />
			</div>
			<ul className="lg:flex hidden">
				<Link href="/About">
					<a className={router.pathname == '/About' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4">About</li>
					</a>
				</Link>
				<Link href="/Blog">
					<a className={router.pathname == '/Blog' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4">Blog</li>
					</a>
				</Link>
				<Link href="/Community">
					<a className={router.pathname == '/Community' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4">Community</li>
					</a>
				</Link>
				<Link href="/Contact">
					<a className={router.pathname == '/Contact' ? 'text-[#ffd000]' : 'text-white'}>
						<li className="px-4">Contact us</li>
					</a>
				</Link>
			</ul>
			<button className="hidden lg:block bg-[#FFD000] py-2 px-5 text-black font-bold text-base rounded w-[130px] h-[40px]">
				Join ABCD
			</button>
		</nav>
	);
}
