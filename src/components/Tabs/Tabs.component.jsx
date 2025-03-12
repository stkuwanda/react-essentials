// setting component types dynamically
// let TabButtonsContainer = 'menu'; // sets the variable to an in-built component <menu></menu>
// TabButtonsContainer = Section; // sets the variable to a custom-built component <Section></Section> 
function Tabs({ tabButtons, tabButtonsContainer = 'menu', children,  }) {
	const TabButtonsContainer = tabButtonsContainer;// makesure to capitalize the variable name to ensure React recognises it is a component
	return (
		<>
			<TabButtonsContainer>{tabButtons}</TabButtonsContainer>
			{children}
		</>
	);
}

export default Tabs;
