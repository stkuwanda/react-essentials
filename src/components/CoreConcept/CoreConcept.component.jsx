function CoreConcept({ title, description, src }) {
	console.log('Render CoreConcept...');

	return (
		<li>
			<img src={src} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

export default CoreConcept;