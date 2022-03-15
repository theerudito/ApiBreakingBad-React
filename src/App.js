import { useState, useEffect } from "react";
import { GetApi } from "./Componet/Api";
import { GetDatas } from "./Componet/GetData";
import { Loader } from "./Componet/Loader";

import "./styles.css";

const inicialQuote = {
	text: "Jorge",
	autor: "Loor"
};

export default function App() {
	const [quote, setQuote] = useState(inicialQuote);
	const [loading, setLoading] = useState(false);

	const updateQuote = async () => {
		setLoading(true);
		// const newData = await GetApi(quote);
		// console.log(newData);
		try {
			const url = "https://www.breakingbadapi.com/api/quote/random";
			const res = await fetch(url);
			const [newData] = await res.json();
			//console.log(newData);

			const { quote: text, author } = newData;

			setQuote({
				text: text,
				autor: author
			});
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		updateQuote();
	}, []);

	return (
		<div className="app">
			<img
				id="Logo"
				src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
				alt="logo"
			/>
			<button onClick={() => updateQuote()}>Siguiente</button>
			{loading ? <Loader /> : <GetDatas quote={quote} />}
		</div>
	);
}
