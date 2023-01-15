import { Regions, StyledFilter, StyledRegion } from "./styles/Filter.styled";
import { MdOutlineKeyboardArrowDown as Arrow } from "react-icons/md";
import { ACTIONS, Context } from "../providers/ContextProvider";
import { useContext, useState } from "react";

export default function Filter() {
	const [openFilter, setOpenFilter] = useState(false);

	return (
		<StyledFilter>
			<div>Filter by Region</div>
			<Arrow onClick={() => setOpenFilter(prev => !prev)} />
			{openFilter && (
				<Regions>
					{["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
						(region, index) => (
							<Region key={index} region={region} />
						)
					)}
				</Regions>
			)}
		</StyledFilter>
	);
}

function Region({ region }) {
	const { filter, dispatch } = useContext(Context);

	const handleClick = () => {
		let newFilter = "";
		if (filter != region) {
			newFilter = region;
		}
		dispatch({
			type: ACTIONS.SETFILTER,
			payload: { filter: newFilter },
		});
	};

	return (
		<StyledRegion onClick={handleClick} select={region == filter}>
			{region}
		</StyledRegion>
	);
}
