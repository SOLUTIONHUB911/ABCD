export default function Subscribe() {
	return (
		<form
			className='relative w-full text-sm leading-[35px] font-roboto font-normal mx-auto'
			action='/api/mail'
			method='post'
		>
			<input
				aria-label='Email for newsletter'
				placeholder='Email Address'
				type='email'
				autoComplete='email'
				required
				className='md:w-full py-1 px-4 text-white bg-[#353535] placeholder:text-[#CECECE] outline-none'
			/>
			<button
				className='absolute bg-theme-main px-4 py-1 text-white hover:text-theme-dark duration-300 ease-in'
				type='submit'
			>
				Subscribe
			</button>
		</form>
	);
}
