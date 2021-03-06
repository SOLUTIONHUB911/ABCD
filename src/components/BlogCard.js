import styles from '/styles/Hero.module.css';
import HeroBlog from '/public/HeroBlog.jpg';
import NextImage from 'next/image';
export default function BlogCard({ title, date, text }) {
	return (
		<div className="mx-[50px] lg:w-full bg-[#121212] mx-[25px] mt-[30px] ">
			<div className="block">
				<NextImage src={HeroBlog} alt="Card top" width={538} height={320} layout="responsive" />
			</div>

			<section className="mx-[25px]">
				<p className="text-[#ffd000] mt-4 font-bold leading-10">{title}</p>
				<p className="text-sm font-light leading-10 tracking-wide">{date}</p>
				<p className="text-sm font-light leading-10 tracking-wide">{text}</p>
			</section>

			<button className={styles.cta}>
				<span className={styles.hoverUnderlineAnimation}> Read More </span>
				<svg width="12" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14 6C13.9951 5.4739 13.7832 4.9709 13.41 4.6L9.12 0.300009C8.93264 0.113758 8.67919 0.00921631 8.415 0.00921631C8.15081 0.00921631 7.89736 0.113758 7.71 0.300009C7.61627 0.392972 7.54188 0.503573 7.49111 0.625432C7.44034 0.747291 7.4142 0.877996 7.4142 1.01001C7.4142 1.14202 7.44034 1.27272 7.49111 1.39458C7.54188 1.51644 7.61627 1.62704 7.71 1.72001L11 5H1C0.734784 5 0.48043 5.10536 0.292893 5.2929C0.105357 5.48043 0 5.73479 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H11L7.71 10.29C7.5217 10.477 7.41538 10.7311 7.41444 10.9965C7.41351 11.2618 7.51802 11.5167 7.705 11.705C7.89198 11.8933 8.1461 11.9996 8.41146 12.0006C8.67683 12.0015 8.9317 11.897 9.12 11.71L13.41 7.41C13.7856 7.03665 13.9978 6.52958 14 6Z"
						fill="#FFD000"
					/>
				</svg>
			</button>
		</div>
	);
}
