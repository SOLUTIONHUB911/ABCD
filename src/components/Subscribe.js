export default function Subscribe() {
	return (
		<form className="w-[640px] mb-12 mt-4">
			<input
				aria-label="Email for newsletter"
				placeholder="Email Address"
				type="email"
				autoComplete="email"
				required
				className="text-xs p-[7px] w-5/6 text-white bg-[#353535]"
			/>
			<button className="bg-[#ffd000] w-1/6 p-[7px] text-white font-semibold text-xs" type="submit">
				Subscribe
			</button>
		</form>
	);
}
