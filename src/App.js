import React, { useEffect, useState } from "react";
import DropDown from "./components/Drop-downs/DropDowns";
import TextResults from "./components/Text-Results/textResults";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/footer";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    confirmed: { value: 0 },
    deaths: { value: 0 },
    recovered: { value: 0 },
    active: { value: 0 },
    lastUpdate: new Date().toLocaleDateString(),
  });
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((resp) => resp.json())
      .then(({ countries }) => {
        setCountries(countries);
      });

    fetch("https://covid19.mathdro.id/api")
      .then((resp) => resp.json())
      .then(({ confirmed, deaths, recovered, lastUpdate }) => {
        setResults({ confirmed, deaths, recovered, lastUpdate });
        console.log(confirmed, deaths, recovered, lastUpdate);
        setLoading(false);
      });
  }, []);

  const getCountryData = (country) => {
    const url =
      country === "global"
        ? "https://covid19.mathdro.id/api"
        : `https://covid19.mathdro.id/api/countries/${country}`;
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then(({ confirmed, deaths, recovered, lastUpdate }) => {
        console.log(confirmed, deaths, recovered, lastUpdate);
        setResults({ confirmed, deaths, recovered, lastUpdate });
        setLoading(false);
      });
  };

  return (
    <div>
      <Container>
        <DropDown
          countries={countries}
          loading={loading}
          handlSelectClick={getCountryData}
        />

        <TextResults {...results} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
