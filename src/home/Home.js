import "./Home.css";
import {useState, useEffect} from "react";
import Header from "../components/Header";

function Home() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const CountryCard = ({name, population, region, capital}) => {
    console.log(name, population);
    return (
      <div className="countryCard">
        <div></div>
        <div>
          <h2>{name}</h2>
          <h1>Population: {population}</h1>
          <h1>Region: {region}</h1>
          <h1>Capital: {capital}</h1>
        </div>
      </div>
    );
  };

  const Cards = ({data}) => {
    console.log("this is data", data);
    return data.map((data) => (
      <CountryCard
        name={data.name}
        population={data.population}
        region={data.region}
        capital={data.capital }
      />
    ));
  };

  return (
    <div>
      <Header />
      <Cards data={countries} />
    </div>
  );
}

export default Home;
