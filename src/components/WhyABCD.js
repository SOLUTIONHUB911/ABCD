export default function WhyABCD({ heading, item1, item2, item3, item4, item5 }) {
	return (
		<div className="bg-[#121212] w-full lg:w-[600px] p-8 mx-auto">
			<h3 className="font-semibold text-4xl text-[#ffd000]">{heading}</h3>
			<ul className="list-disc list-inside text-sm leading-10">
				<li>{item1}</li>
				<li>{item2}</li>
				<li>{item3}</li>
				<li>{item4}</li>
				<li>{item5}</li>
			</ul>
		</div>
	);
}
