import { v4 as uuidv4 } from 'uuid';
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

const CORE_CONCEPTS = [
	{
		id: uuidv4(),
		src: componentsImg,
		title: 'Components',
		description:
			'The core UI building block - compose the user interface by combining multiple components.',
	},
	{
		id: uuidv4(),
		src: jsxImg,
		title: 'JSX',
		description:
			'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
	},
	{
		id: uuidv4(),
		src: propsImg,
		title: 'Props',
		description:
			'Make components configurable (and therefore reusable) by passing input data to them.',
	},
	{
		id: uuidv4(),
		src: stateImg,
		title: 'State',
		description:
			'React-managed data which, when changed, causes the component to re-render & the UI to update.',
	},
];

export const reactDescriptions = ['Fundamental', 'Core', 'Crucial'];

export const reactArtifacts = [
	{ id: uuidv4(), name: 'Components' },
	{ id: uuidv4(), name: 'JSX' },
	{ id: uuidv4(), name: 'Props' },
	{ id: uuidv4(), name: 'State' },
];

export default CORE_CONCEPTS;
