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

  const CountryCard = ({name, population, region, capital, img}) => {
    return (
      <div className="countryCard">
        <div className="flag" style={{backgroundImage: `url(${img})`}}></div>
        <div className="infoContainer">
          <div className="info">
            <div className="title">{name}</div>
            <div className="subtitle">
              <span className="subtitle-lbl">Population:</span> {population}
            </div>
            <div className="subtitle">
              <span className="subtitle-lbl">Region:</span> {region}
            </div>
            <div className="subtitle">
              <span className="subtitle-lbl">Capital:</span> {capital}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Cards = ({data}) => {
    console.log("this is data", data);
    return data.map(
      ({name, population, region, capital, flags, numericCode}) => (
        <CountryCard
          key={numericCode}
          name={name}
          population={population}
          region={region}
          capital={capital}
          img={flags.png}
        />
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <div className="flagSection">
          <Cards data={countries} />
        </div>
      </div>
    </div>
  );
}

export default Home;
