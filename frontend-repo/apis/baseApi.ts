export async function baseAPI(endpoint: any, options = {}) {
	const apiUrl = "http://localhost:3000/";
	const url = apiUrl + endpoint;

	try {
		options = {
			...options,
			headers: {
				...options?.headers,
				Accept: "application/json",
				"Accept-Encoding": "gzip",
			},
		};

		const response = await fetch(url, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
		throw new Error("An error occurred while making the request");
	}
}

function handleFetchError(error: Error) {
	console.error("An error occurred:", error);
}

export { handleFetchError };
