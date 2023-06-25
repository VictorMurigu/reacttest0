import "./App.css";

import List from "./List";
import { useState, useEffect } from "react";
import data from "./Data";
import VikData from "./VikData";
import VikImages from "./VikImages";

function App() {
	const [people, setPeople] = useState(data);
	const [loged, setLoged] = useState(false);
	const [images, setImages] = useState(VikData);
	console.log(images);

	console.log(people);
	useEffect(() => {
		fetch("data.json")
			.then(function (response) {
				return response.json();
			})
			.then((data) => {
				const { login } = data;
				setImages(login);
			});
	}, []);

	return (
		<main>
			<section className="container">
				{loged ? (
					<div className="list">
						<h2 style={{ color: "blue" }}>Moments with Vik</h2>
						<div className="list">
							<VikImages image={images} />
						</div>
					</div>
				) : (
					<div>
						<h1 className="heading">Happy Birthday!</h1>
						<h2>{people.length} Birthdays Today</h2>
						<div className="list">
							<List people={people} />
						</div>
					</div>
				)}
				<button className="btn btn-primary" onClick={() => setLoged(!loged)}>
					{loged ? "Birthdays" : "MoreonVik"}
				</button>
				<button
					className="btn"
					onClick={() => {
						setPeople([]);
						setImages([]);
					}}>
					Clear All
				</button>
			</section>
		</main>
	);
}

export default App;
