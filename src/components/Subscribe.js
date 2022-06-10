export default function Subscribe() {
	return (
		<form className="w-full lg:w-[640px] mb-12 mt-4">
			<input
				aria-label="Email for newsletter"
				placeholder="Email Address"
				type="email"
				autoComplete="email"
				required
				className="text-xs p-[7px] w-5/6 text-white bg-[#353535]"
			/>
			<button
				className="bg-[#ffd000] w-1/6 sm:p-[7px] text-[10px] text-white font-semibold sm:text-xs"
				type="submit"
			>
				Subscribe
			</button>
		</form>
	);
}
