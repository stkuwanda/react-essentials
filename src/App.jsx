import CoreConcept from './components/CoreConcept/CoreConcept.component.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.component.jsx';
import Examples from './components/Examples/Examples.component.jsx';
import Header from './components/Header/Header.component.jsx';
import TabButton from './components/TabButton/TabButton.component.jsx';
import data, { reactArtifacts } from './data.js';

function App() {
	let tabContent = 'default';

	function handleClick(selectedButton) {
		console.log(selectedButton);
		tabContent = selectedButton;
	}

	return (
		<div>
			<Header />
			<main>
				<CoreConcepts>
					{data.map((item) => (
						<CoreConcept key={item.id} {...item} />
					))}
				</CoreConcepts>
				<Examples tabContent={tabContent}>
					{reactArtifacts.map((item) => (
						<TabButton key={item.id} onClick={() => handleClick(item.name)}>
							{item.name}
						</TabButton>
					))}
				</Examples>
			</main>
		</div>
	);
}

export default App;
