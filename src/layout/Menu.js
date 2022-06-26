import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
	const router = useRouter();
	return (
		<nav className='border bg-[#121212] absolute z-10 top-[80px] left-[65%]'>
			<ul>
				<Link href='/About'>
					<a
						className={`${
							router.pathname == '/About' ? 'text-[#ffd000]' : 'text-white'
						} font-roboto font-bold text-[20px] leading-[28px]`}
					>
						<li className='p-4 border-b-red'>About</li>
					</a>
				</Link>
				<Link href='/Blog'>
					<a
						className={`${
							router.pathname == '/Blog' ? 'text-[#ffd000]' : 'text-white'
						} font-roboto font-bold text-[20px] leading-[28px]`}
					>
						<li className='p-4'>Blog</li>
					</a>
				</Link>
				<Link href='/Community'>
					<a
						className={`${
							router.pathname == '/Community' ? 'text-[#ffd000]' : 'text-white'
						} font-roboto font-bold text-[20px] leading-[28px]`}
					>
						<li className='p-4'>Community</li>
					</a>
				</Link>
				<Link href='/Contact'>
					<a
						className={`${
							router.pathname == '/Contact' ? 'text-[#ffd000]' : 'text-white'
						} font-roboto font-bold text-[20px] leading-[28px]`}
					>
						<li className='p-4'>Contact us</li>
					</a>
				</Link>
			</ul>
			<button className='hidden lg:block bg-[#FFD000] py-2 px-5 text-black font-bold text-base rounded w-[100px] h-[40px]'>
				Join ABCD
			</button>
		</nav>
	);
}
