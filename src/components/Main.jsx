import { useContext } from "react";
import { Context } from "../providers/ContextProvider";
import Country from "./Country";
import Filter from "./Filter";
import SearchBox from "./SearchBox";
import { StyledMain } from "./styles/Main.styled";

export default function Main() {
	const { countries } = useContext(Context);

	return (
		<StyledMain>
			<SearchBox />
			<Filter />
			{countries.map(data => (
				<Country key={data.id} data={data} />
			))}
		</StyledMain>
	);
}
