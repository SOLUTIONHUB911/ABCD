/* eslint-disable @next/next/no-img-element */
import styles from '/styles/Hero.module.css';
export default function Parallel({ picture, text1, children }) {
	return (
		<div className={styles.container}>
			<div className={styles.properties}>{picture}</div>
			<aside className={styles.text}>
				{text1}
				<div className='flex flex-col mt-4'>{children}</div>
			</aside>
		</div>
	);
}

export function ShowCase({ image, name, children }) {
	return (
		<div className='flex items-center space-x-4 lg:space-x-10 py-2 lg:py-4 px-4 lg:px-20 bg-linear w-full h-full skew-x-[-20deg] mx-auto'>
			<img
				src={image}
				alt={name}
				width={150}
				height={150}
				className='w-[60px] h-[60px] md:w-[150px] md:h-[150px] border-[5px] border-white rounded-full skew-x-[20deg]'
			/>
			<aside className='flex flex-col font-roboto font-semibold text-xs leading-[18px] md:text-[30px] md:leading-[45px] skew-x-[20deg]'>
				{name}
				<div className='flex flex-row space-x-4'>{children}</div>
			</aside>
		</div>
	);
}
