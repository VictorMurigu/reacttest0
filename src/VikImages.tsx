interface Props {
	image: any[];
}
const VikImages = ({ image }: Props) => {
	const i = image.map((personImage) => {
		const { id, image } = personImage;

		return (
			<article key={id} className="person">
				<div>
					<img src={image} alt={image} className="vik img" />
				</div>
			</article>
		);
	});
	return <div className="vik img">{i}</div>;
};

export default VikImages;
