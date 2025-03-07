import reactImg from '../../assets/react-core-concepts.png';
import { reactDescriptions } from '../../data';
import { randomInt } from '../../utils';
import './Header.component.css';

function Header() {
	const important = reactDescriptions[randomInt(2)];

	return (
		<header>
			<img src={reactImg} alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				{important} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}

export default Header;
