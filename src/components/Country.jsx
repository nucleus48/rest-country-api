import { useRef } from "react";
import { Link } from "react-router-dom";
import { StyledCountry } from "./styles/Country.styled";
import { addComma } from "../utils/helpers"

export default function Country({ data }) {
  const link = useRef()

	return (
		<StyledCountry onClick={() => link.current.click()}>
      <Link ref={link} to={`/detail/${data.alpha3Code}`}></Link>
			<img src={data.flags.png} alt="flag" />
			<div>
				<div>{data.name}</div>
				<div>
					<div>
						Population: <span>{addComma(data.population)}</span>
					</div>
					<div>
						Region: <span>{data.region}</span>
					</div>
					<div>
						Capital: <span>{data.capital}</span>
					</div>
				</div>
			</div>
		</StyledCountry>
	);
}
