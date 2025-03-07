import './Examples.component.css';

function Examples({ tabContent, children }) {
	return (
		<section id='examples'>
			<h2>Examples</h2>
			<menu>{children}</menu>
			{tabContent}
		</section>
	);
}

export default Examples;
