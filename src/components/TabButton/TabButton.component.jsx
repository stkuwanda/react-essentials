import './TabButton.component.css';

function TabButton({ onClick, children }) {
  console.log('Render TabButton...');
  
	return (
		<li>
			<button onClick={onClick}>{children}</button>
		</li>
	);
}

export default TabButton;
