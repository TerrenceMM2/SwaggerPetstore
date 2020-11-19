import React, { useState, useEffect } from "react";

// React-Bootstrap
import { Container } from "react-bootstrap";

// Design
import "bootstrap/dist/css/bootstrap.min.css";

// Custom Components
import Header from "./components/Header";
import PetTable from "./components/PetTable";
import PetButtonGroup from "./components/PetButtonGroup";
import Footer from "./components/Footer";
import NewPetButton from "./components/NewPetButton";

// APIs
import { getPets } from "./utils/API";

// Utility Functions
import { limitResults, pagination } from "./utils/dataHandling";

const style = {
	app: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100%",
	},
	container: {
		flex: "1 0 auto",
	},
};

function App() {
	const [petData, setPetData] = useState([]);
	const [limitedPetData, setLimitedPetData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [pages, setPages] = useState(0);
	const [petStatus, setPetStatus] = useState("");

	// Searches Swagger Petstore API based on status value
	const handleSearch = async (event) => {
		// Resets state
		setPetData([]);

		const { status } = event.target.dataset;
		setPetStatus(status);

		try {
			const response = await getPets(status);
			setPetData(response);
			setPages(pagination(response.length));
		} catch (error) {
			console.log(error);
		}
	};

	// In-progress: handles paginating the data.
	// const handleOffset = (event) => {
	//     const { offset } = event.target.dataset
	//     console.log(typeof offset, offset)
	//     let num = parseInt(offset)
	//     console.log(typeof num, num)
	//     setOffset(num)
	// }

	// Separates larger dataset for display purposes
	useEffect(async () => {
		const limitedData = await limitResults(petData, offset);
		setLimitedPetData(limitedData);
	}, [petData]);

	return (
		<div style={style.app}>
			<Header />
			<Container style={style.container}>
				{/* <NewPetButton /> */}
				<PetButtonGroup handleSearch={handleSearch} />
				<PetTable petStatus={petStatus} data={limitedPetData} />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
