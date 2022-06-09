import { BlackLinkedIn, BlackTwitter } from '../../public/icons';

export default function TeamId({ picture, Name, Position }) {
	return (
		<div className="w-[270px] h-[445px] bg-white">
			<figure>{picture}</figure>
			<p className="text-black text-lg font-semibold mx-[20px] mt-12">{Name}</p>
			<p className="text-black text-sm font-semibold mx-[20px]">{Position}</p>
			<div className="flex items-center ml-[60%] mt-4">
				<BlackLinkedIn />
				<div className="ml-[6px]">
					<BlackTwitter />
				</div>
			</div>
		</div>
	);
}
