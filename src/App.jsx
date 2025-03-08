import { useState, Fragment } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept.component.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.component.jsx';
import Examples from './components/Examples/Examples.component.jsx';
import Header from './components/Header/Header.component.jsx';
import TabButton from './components/TabButton/TabButton.component.jsx';
import data, { reactArtifacts, EXAMPLES } from './data.js';
import TabContent from './components/TabContent/TabContent.component.jsx';

function App() {
	console.log('App rendering...');
	let tabContent = { tabContent: <p>Please click to selection an option.</p> };
	const [selectedButton, setSelectedButton] = useState();
	console.log('selectedButton:', selectedButton);

	if (selectedButton) {
		tabContent.tabContent = (
			<TabContent
				title={EXAMPLES[selectedButton].title}
				description={EXAMPLES[selectedButton].description}
				code={EXAMPLES[selectedButton].code}
			/>
		);
	}

	function handleClick(selectedButton) {
		setSelectedButton(selectedButton);
	}

	return (
		<Fragment>
			<Header />
			<main>
				<CoreConcepts>
					{data.map((item) => (
						<CoreConcept key={item.id} {...item} />
					))}
				</CoreConcepts>
				<Examples {...tabContent}>
					{reactArtifacts.map((item) => (
						<TabButton isSelected={selectedButton === item.name} key={item.id} onClick={() => handleClick(item.name)}>
							{item.display}
						</TabButton>
					))}
				</Examples>
			</main>
		</Fragment>
	);
}

export default App;
