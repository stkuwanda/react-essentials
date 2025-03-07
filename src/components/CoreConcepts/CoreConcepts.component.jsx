import './CoreConcepts.component.css';

function CoreConcepts({ children }) {
	console.log('Render CoreConcepts...');
	
	return (
		<section id='core-concepts'>
			<h2>Time to get started!</h2>
			<ul>{children}</ul>
		</section>
	);
}

export default CoreConcepts;