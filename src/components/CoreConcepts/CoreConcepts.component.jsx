import CoreConcept from '../CoreConcept/CoreConcept.component.jsx';
import Section from '../Section/Section.component.jsx';
import './CoreConcepts.component.css';
import data from '../../data.js';

function CoreConcepts() {
	return (
		<Section id='core-concepts' title='Time to get started!'>
			<ul>
				{data.map((item) => (
					<CoreConcept key={item.id} {...item} />
				))}
			</ul>
		</Section>
	);
}

export default CoreConcepts;
