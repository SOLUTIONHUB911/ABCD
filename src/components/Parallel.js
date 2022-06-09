import styles from '/styles/Hero.module.css';
import Image from 'next/image';
import Abiona from '/public/Abiona.png';
export default function Parallel({ picture, text1, icon1, icon2, icon3, icon4, icon5, icon6 }) {
	return (
		<div className={styles.container}>
			<div className={styles.properties}>
				<Image src={Abiona} alt="profile picture" width={150} height={150} />
			</div>
			<aside className={styles.text}>
				{text1}
				<div>
					<div>{icon1}</div>
					<div>{icon2}</div>
					<div>{icon3}</div>
					<div>{icon4}</div>
					<div>{icon5}</div>
					<div>{icon6}</div>
				</div>
			</aside>
		</div>
	);
}
