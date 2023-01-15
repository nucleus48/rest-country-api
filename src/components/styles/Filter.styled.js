import styled from "styled-components";
import { StyledElement } from "./Global";

export const StyledFilter = styled(StyledElement)`
  font-weight: 300;
  padding: 1em 1.5em;
  width: 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  svg {
    font-size: 1.2rem;
  }
`;

export const Regions = styled(StyledElement)`
  width: inherit;
  position: absolute;
  top: calc(100%);
  left: -5px;
  padding: .5rem 0;
`;

export const StyledRegion = styled.div`
  padding: .3rem 1.5em;
  background: ${({ select, theme }) => select ? theme.shadow : "transparent" };
  text-transform: capitalize;
`;
