export const GetApi = async () => {
	try {
		const url = "https://www.breakingbadapi.com/api/quote/random";
		const res = await fetch(url);
		const [newData] = await res.json();
		console.log(newData);
	} catch (error) {
		console.log(error);
	}
};
