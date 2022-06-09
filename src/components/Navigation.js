import Image from 'next/image';
import ABCD from '../public/ABCD.png';
import Button from './Elements';
import Link from 'next/link';
export default function Navigation() {
	return (
		<nav className="flex justify-between mx-[70px] mt-10 items-center">
			<Link href="/">
				<a>
					<Image strategy="lazyOnload" src={ABCD} height={35} width={150} alt="ABCD" />
				</a>
			</Link>
			<ul className="flex">
				<Link href="/About">
					<a>
						<li className="px-8">About</li>
					</a>
				</Link>
				<Link href="/Blog">
					<a>
						<li className="px-8">Blog</li>
					</a>
				</Link>
				<Link href="/Community">
					<a>
						<li className="px-8">Community</li>
					</a>
				</Link>
				<Link href="/Contact">
					<a>
						<li className="px-8">Contact us</li>
					</a>
				</Link>
			</ul>
			<div className="py-2.5 px-5">
				<Button text="Join ABCD" />
			</div>
		</nav>
	);
}
