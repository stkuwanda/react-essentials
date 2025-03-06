import './Examples.component.css';

function Examples({ children }) {
	return (
		<section id='examples'>
			<h2>Examples</h2>
			<menu>{children}</menu>
		</section>
	);
}

export default Examples;
