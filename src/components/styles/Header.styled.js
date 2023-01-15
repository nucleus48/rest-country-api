import styled from "styled-components";
import { StyledElement } from "./Global";

export const StyledHeader = styled(StyledElement)`
	padding: 2rem 1rem;
	display: flex;
	justify-content: space-between;
  border: 0;
	border-bottom: 5px solid${({ theme }) => theme.shadow};
  border-radius: 0;

	svg {
		font-size: 0.8rem;
		margin-right: 0.5em;
	}
`;
