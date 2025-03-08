import CoreConcept from '../CoreConcept/CoreConcept.component.jsx';
import './CoreConcepts.component.css';
import data from '../../data.js';

function CoreConcepts() {
	return (
		<section id='core-concepts'>
			<h2>Time to get started!</h2>
			<ul>
				{data.map((item) => (
					<CoreConcept key={item.id} {...item} />
				))}
			</ul>
		</section>
	);
}

export default CoreConcepts;
