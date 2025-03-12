import { useState } from 'react';
import TabContent from '../TabContent/TabContent.component.jsx';
import TabButton from '../TabButton/TabButton.component.jsx';
import Section from '../Section/Section.component.jsx';
import { EXAMPLES, reactArtifacts } from '../../data';
import './Examples.component.css';
import Tabs from '../Tabs/Tabs.component.jsx';

function Examples() {
	let tabContent = <p>Please click to selection an option.</p>;
	const [selectedButton, setSelectedButton] = useState();
	console.log('selectedButton:', selectedButton);

	if (selectedButton) {
		tabContent = (
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
		<Section id='examples' title='Examples'>
			<Tabs
				tabButtons={reactArtifacts.map((item) => (
					<TabButton
						isSelected={selectedButton === item.name}
						key={item.id}
						onClick={() => handleClick(item.name)}
					>
						{item.display}
					</TabButton>
				))}
				// tabButtonsContainer={Section} // set a custom component dynamically
				tabButtonsContainer='menu' // set an in-built component dynamically
			>
				{tabContent}
			</Tabs>
		</Section>
	);
}

export default Examples;
