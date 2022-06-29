import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Michael Rojas
			<small className={Styles.byline}>🚀 Powered by Astro</small>
		</footer>
	);
}
export default Footer;
