import './TabButton.component.css';

function TabButton({ onClick, children, isSelected }) {
	return (
		<li>
			<button className={isSelected ? 'active' : ''} onClick={onClick}>
				{children}
			</button>
		</li>
	);
}

export default TabButton;
