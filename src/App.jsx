import CoreConcept from './components/CoreConcept/CoreConcept.component.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.component.jsx';
import Examples from './components/Examples/Examples.component.jsx';
import Header from './components/Header/Header.component.jsx';
import TabButton from './components/TabButton/TabButton.component.jsx';
import data, { reactArtifacts } from './data.js';

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
				<Examples>
					{reactArtifacts.map((item) => (
						<TabButton key={item.id}>{item.name}</TabButton>
					))}
				</Examples>
			</main>
		</div>
	);
}

export default App;
