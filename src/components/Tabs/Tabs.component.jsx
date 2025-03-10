function Tabs({ tabButtons, children }) {
	return (
		<>
			<menu>{tabButtons}</menu>
			{children}
		</>
	);
}

export default Tabs;
