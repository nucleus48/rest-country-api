import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { StyledButton, StyledDetail, StyledBorders } from "./styles/DetailCountry.styled";
import { addComma } from "../utils/helpers";

export default function DetailCountry({ data }) {
	return (
		<StyledDetail>
			<img src={data.flags.png} alt="flag" />
			<div>{data.name}</div>
			<div>
				<div>
					Native Name: <span>{data.nativeName}</span>
				</div>
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
			<div>
				<div>
					Top Level Domain: <span>{data.topLevelDomain}</span>
				</div>
				<div>
					Currencies: <span>{data.currencies?.map(curr => curr.code)}</span>
				</div>
				<div>
					Languages: <span>{data.languages?.map(lag => lag.name)}</span>
				</div>
			</div>
			<div>
				<div>Border Countries:</div>
				<Borders borders={data.borders} />
			</div>
		</StyledDetail>
	);
}

export function Button() {
  const navigate = useNavigate()

	return (
		<StyledButton onClick={() => navigate(-1)}>
				<FaArrowLeft />
				<span>Back</span>
		</StyledButton>
	);
}

function Borders({ borders }) {
	return (
		<StyledBorders>
			{borders?.map((alpha, index) => (
				<Link key={index} to={`/detail/${alpha}`}>
					{alpha}
				</Link>
			))}
		</StyledBorders>
	);
}
