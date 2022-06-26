import Collapsible from '../components/Collapsible';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from '/styles/Hero.module.css';
export default function FAQ() {
	return (
		<div className='py-8'>
			<h2 className='w-[35%] font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px]'>
				FAQs
			</h2>
			<h2 className='w-[35%] font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px]'>
				ABCD Talent Vetting & Quality
			</h2>

			<div className={styles.preferences}>
				<Collapsible title='DATA COLLECTION' defaultExpanded='true'>
					<p>Here we collect data from the devs to understand their background and strength.</p>
				</Collapsible>
				<Collapsible title='FIRST INTERVIEW' defaultExpanded='false' />
				<Collapsible title='TECHNICAL INTERVIEW' defaultExpanded='false' />
				<Collapsible title='FINAL STAGE & COMPLETE PROFILING' defaultExpanded='false' />
			</div>
		</div>
	);
}
