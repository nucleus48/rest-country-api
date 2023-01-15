import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Context } from "./ContextProvider";

export default function StyleProvider({ children }) {
	const { darkTheme } = useContext(Context);

	const theme = {
		background: darkTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
		element: darkTheme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
		text: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
		input: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)",
		shadow: darkTheme ? "hsl(205, 27%, 16%)" : "hsl(0, 0%, 96%)",
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
