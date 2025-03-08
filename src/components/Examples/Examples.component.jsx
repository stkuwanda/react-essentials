import { useState } from 'react';
import TabContent from '../TabContent/TabContent.component.jsx';
import TabButton from '../TabButton/TabButton.component.jsx';
import { EXAMPLES, reactArtifacts } from '../../data';
import './Examples.component.css';

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
		<section id='examples'>
			<h2>Examples</h2>
			<menu>
				{reactArtifacts.map((item) => (
					<TabButton
						isSelected={selectedButton === item.name}
						key={item.id}
						onClick={() => handleClick(item.name)}
					>
						{item.display}
					</TabButton>
				))}
			</menu>
			{tabContent}
		</section>
	);
}

export default Examples;
