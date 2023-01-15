import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailCountry, { Button } from "../components/DetailCountry"
import Header from "../components/Header"

export default function Detail() {
  const { alpha } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${alpha}`)
      .then(response => response.json())
      .then(json => setData([json]))
  }, [alpha])

  return (
    <div>
      <Header />
			<Button />
      {data.map((info, index) => (
        <DetailCountry key={index} data={info} />
      ))}
    </div>
  )
}
