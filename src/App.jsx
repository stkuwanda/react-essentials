import CoreConcepts from './components/CoreConcepts/CoreConcepts.component.jsx';
import Header from './components/Header/Header.component.jsx';
import Examples from './components/Examples/Examples.component.jsx';

function App() {
	console.log('App rendering...');
	return (
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
