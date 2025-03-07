function CoreConcept({ title, description, src }) {
	return (
		<li>
			<img src={src} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

export default CoreConcept;
