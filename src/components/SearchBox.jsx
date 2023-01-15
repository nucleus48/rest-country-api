import { useCallback, useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ACTIONS, Context } from "../providers/ContextProvider";
import { debounce } from "../utils/helpers";
import { StyledSearchBox } from "./styles/SearchBox.styled";

export default function SearchBox() {
	const { dispatch, search } = useContext(Context);
  const [value, setValue] = useState(search)
	const placeholder = "Search for a country...";
  const handleChange = e => setValue(e.target.value)

  const updateSearch = useCallback(debounce((search) => {
    dispatch({
      type: ACTIONS.SETSEARCH,
      payload: { search }
    })
  }), [])

  useEffect(() => {
    updateSearch(value)
  }, [value])

  return (
		<StyledSearchBox>
			<FaSearch />
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		</StyledSearchBox>
	);
}
