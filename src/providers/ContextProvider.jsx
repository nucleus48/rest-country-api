import { createContext, useEffect, useReducer, useRef } from "react";

export const Context = createContext();

export const ACTIONS = {
	TOGGLETHEME: "toggleTheme",
	SETCOUNTRIES: "setCountries",
	SETFILTER: "setFilter",
	SETSEARCH: "setSearch",
};

const initializer = {
	darkTheme: true,
	search: "",
	filter: "",
	countries: [],
};

export default function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initializer);
	const allCountries = useRef([]);
	const filteredCountries = useRef([]);

	const value = {
		...state,
		dispatch,
	};

	useEffect(() => {
		fetch("https://restcountries.com/v2/all")
			.then(response => response.json())
			.then(json => {
				const data = json.map((item, index) => {
					item.id = index;
					return item;
				});
				allCountries.current = [...data];
				filteredCountries.current = [...data];
				dispatch({
					type: ACTIONS.SETCOUNTRIES,
					payload: { countries: [...data] },
				});
			})
			.catch(err => {
				throw new Error(err);
			});
		// allCountries.current = JSON.parse(localStorage.getItem('allCountries'))
		// filteredCountries.current = [...allCountries.current]
	}, []);

	useEffect(() => {
		filteredCountries.current = [...allCountries.current];
		if (state.filter != "") {
			filteredCountries.current = filteredCountries.current.filter(
				data => data.region == state.filter
			);
		}
	}, [state.filter]);

	useEffect(() => {
		let countries = [...filteredCountries.current];
		if (state.search != "") {
			countries = filteredCountries.current.filter(data =>
				data.name.toLowerCase().includes(state.search.toLowerCase())
			);
		}
		dispatch({
			type: ACTIONS.SETCOUNTRIES,
			payload: { countries },
		});
	}, [state.search, state.filter]);

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.TOGGLETHEME:
			return { ...state, darkTheme: !state.darkTheme };
		case ACTIONS.SETCOUNTRIES:
			return { ...state, countries: action.payload.countries };
		case ACTIONS.SETSEARCH:
			return { ...state, search: action.payload.search };
		case ACTIONS.SETFILTER:
			return { ...state, filter: action.payload.filter };
		default:
			return state;
	}
}
