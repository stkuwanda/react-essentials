import { useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept.component.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.component.jsx';
import Examples from './components/Examples/Examples.component.jsx';
import Header from './components/Header/Header.component.jsx';
import TabButton from './components/TabButton/TabButton.component.jsx';
import data, { reactArtifacts, EXAMPLES } from './data.js';
import TabContent from './components/TabContent/TabContent.component.jsx';

function App() {
	console.log('App rendering...');
	const [selectedButton, setSelectedButton] = useState('components');
	console.log('selectedButton:', selectedButton);

	function handleClick(selectedButton) {
		setSelectedButton(selectedButton);
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
				<Examples
					tabContent={
						<TabContent
							title={EXAMPLES[selectedButton].title}
							description={EXAMPLES[selectedButton].description}
							code={EXAMPLES[selectedButton].code}
						/>
					}
				>
					{reactArtifacts.map((item) => (
						<TabButton key={item.id} onClick={() => handleClick(item.name)}>
							{item.display}
						</TabButton>
					))}
				</Examples>
			</main>
		</div>
	);
}

export default App;
