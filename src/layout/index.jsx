import Footer from './Footer';
import Navigation from './Navigation';

export default function AppLayout({ children }) {
	return (
		<div className='app-layout'>
			<Navigation />
			<main className='bg-theme-dark'>{children}</main>
			<Footer />
		</div>
	);
}
