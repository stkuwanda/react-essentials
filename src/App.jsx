import CoreConcept from './components/CoreConcept.component.jsx';
import CoreConcepts from './components/CoreConcepts.component.jsx';
import Header from './components/Header.component.jsx';
import data from './data.js';

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
