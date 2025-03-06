import reactImg from './assets/react-core-concepts.png';
import data, { reactDescriptions } from './data.js';

function randomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts({ children }) {
	return (
		<section id='core-concepts'>
			<h2>Time to get started!</h2>
			<ul>{children}</ul>
		</section>
	);
}

function CoreConcept({ title, description, src }) {
	return (
		<li>
			<img src={src} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

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

function App() {
	return (
		<div>
			<Header />
			<main>
				<CoreConcepts>
					{data.map((item) => (
						<CoreConcept key={item.id} {...item} />
					))}
				</CoreConcepts>
			</main>
		</div>
	);
}

export default App;
