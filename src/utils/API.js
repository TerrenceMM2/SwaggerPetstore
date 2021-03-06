import axios from "axios";

export const getPets = async (petStatus) => {
	const response = await axios({
		method: "GET",
		url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${petStatus}`,
	});
	return response.data;
};

export const updatePet = async (updatedPet) => {
	const response = await axios({
		method: "PUT",
		url: `https://petstore.swagger.io/v2/pet`,
		data: updatedPet,
	});
	return response;
};
