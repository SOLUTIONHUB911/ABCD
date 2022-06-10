import Navigation from '../components/Navigation';
import Image from 'next/image';
import AboutHero from '/public/About-Hero.png';
import ABCDJourney from '/public/ABCD Journey.png';
import WhyABCD from '../components/WhyABCD';
import TeamId from '../components/TeamId';
import Joshua from '/public/JoshuaA.png';
import Destiny from '/public/Destiny.png';
import Otobong from '/public/Otobong.png';
import Gwendal from '/public/Gwendal.png';
import Footer from '../components/Footer';
export default function About() {
	return (
		<div>
			<Navigation />
			<main>
				<h3 className="lg:ml-[50px] ml-[25px] mt-20 text-[#ffd000] font-bold mb-4 text-4xl">About ABCD</h3>
				<section className="gid-rows-2 grid lg:grid-cols-2 mx-[25px] lg:ml-[50px] gap-4">
					<figure className="lg:order-last">
						<Image src={AboutHero} width={747} height={559} alt="About Hero" />
					</figure>

					<div>
						<p className="text-sm leading-10">
							African Blockchain Centre for Developers is focused on providing a full suite of solutions
							to help organizations build on different blockchains/Layer 2 technologies by providing
							talent and quality assurance. This includes web3 product managers, web3 product designers,
							smart contract engineers/security auditors/testing, Dapp developers etc. With this complete
							suite of our workforce, we help organizations/projects hire vetted talents, outsource
							development, manage their product or get access to top-notch consultancy based on their
							needs in the web3 space.
						</p>
						<button className="mt-12 bg-[#FFD000] text-black font-bold text-base rounded w-[81px] h-[40px]">
							FAQs
						</button>
					</div>
				</section>

				{/**ABCD JOURNEY */}
				<section className="lg:grid lg:grid-cols-2 mx-[25px] lg:mr-[50px] gap-4 mt-40">
					<figure className="lg:mt-24">
						<Image src={ABCDJourney} width={805} height={604} alt="ABCD Journey" />
					</figure>
					<div>
						<h3 className="text-[#ffd000] font-bold mb-4 text-4xl">ABCD Journey</h3>
						<p className="text-sm leading-10">
							In 2020, ABCD began as a project focused on training blockchain developers in Africa who
							contribute to solving problems on the continent. Most importantly, fulfilling the demand for
							web3 developers in the global market. As our community opened up, for sustainable
							development we decided to build a talent management company that brings opportunities to the
							talent pool we manage.
						</p>
					</div>
				</section>

				{/**Why ABCD */}
				<h3 className="mx-[25px] lg:mx-[74px] mt-20 text-[#ffd000] font-bold mb-4 text-4xl">Why ABCD?</h3>
				<section className="grid lg:grid-flow-row lg:grid-cols-2 mx-[25px] lg:mx-[74px] gap-4 ">
					<WhyABCD
						heading="Work with Us"
						item1="Improved quality assurance & trust for your project/business"
						item2="Reduction in excruciating search time for quality talents globally"
						item3="Pre-selected, screened, trained, and vetted talents"
						item4="Talent management service after hiring"
						item5="Growing web 3 community with a heart for social impact. Working with us helps us in our efforts toward communities across the continent."
					/>
					<WhyABCD
						heading="Join Our Talent Pool"
						item1="Launchpad for community projects and open-source ideas"
						item2="Connecting and networking with innovative minds"
						item3="Access to mentors, funds, resources, hackathons, workshops, and education"
						item4="Help to build your personal brand and professional portfolio organization to stand out in the global competition."
						item5="Co-Founders connect"
					/>
				</section>

				<div className="bg-[#121212] p-8 lg:w-[600px] mx-[25px] lg:mx-auto mb-24 mt-4">
					<h3 className="font-semibold text-4xl text-[#ffd000]">The Alpha Mission</h3>
					<p className="text-sm mt-4">Building an ecosystem that supports development by:</p>
					<ul className="list-decimal list-inside text-sm leading-10">
						<li>Connecting businesses with top talents across the continent.</li>
						<li>Fostering the adoption of web3 driven infrastructure across the continent.</li>
						<li>Building a thriving community that supports web2/web3 education, networking,</li>
						<li>
							Collaboration and initiation of new ideas with the potential to solve problems on the
							continent.
						</li>
						<li>Pioneering the future of web3 and technology across the continent.</li>
					</ul>
				</div>

				<h3 className="font-semibold text-4xl text-[#ffd000] mx-[25px] lg:mx-[50px]">ABCD team</h3>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-[25px] lg:mx-[50px] mt-36">
					<TeamId
						picture={<Image src={Joshua} width={299.94} height={321.36} alt="Joshua Akpan" />}
						Name="Joshua Akpan"
						Position="CEO"
					/>
					<TeamId
						picture={<Image src={Destiny} width={299.94} height={321.36} alt="Destiny Felinah Odum " />}
						Name="Destiny Felinah Odum"
						Position="CAO"
					/>
					<TeamId
						picture={<Image src={Otobong} width={299.94} height={321.36} alt="Otobong Peter" />}
						Name="Otobong Peter"
						Position="Product/Community Manager"
					/>
					<TeamId
						picture={<Image src={Gwendal} width={299.94} height={321.36} alt="Gwendal Le Divechen" />}
						Name="Gwendal Le Divechen"
						Position="Advisor"
					/>
				</div>
				<Footer />
			</main>
		</div>
	);
}
