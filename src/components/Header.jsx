import { ACTIONS, Context } from "../providers/ContextProvider";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
	const { darkTheme, dispatch } = useContext(Context);
  const toggleTheme = () => dispatch({ type: ACTIONS.TOGGLETHEME })

	return (
		<StyledHeader>
			<div>Where in the world?</div>
			<div onClick={toggleTheme}>
				<FaMoon />
				<span>{darkTheme ? "Dark" : "Light"} mode</span>
			</div>
		</StyledHeader>
	);
}
