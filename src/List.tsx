interface Props {
	people: any[];
}

const List = ({ people }: Props) => {
	const p = people.map((person) => {
		const { id, name, age, image } = person;

		return (
			<article key={id} className="person">
				<img src={image} alt={name} />
				<div>
					<h4>{name}</h4>
					<p>{age}</p>
				</div>
			</article>
		);
	});
	return <>{p}</>;
};

export default List;
