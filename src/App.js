import React, { useEffect, useState, useReducer } from "react";
import DropDown from "./components/Drop-downs/DropDowns";
import TextResults from "./components/Text-Results/textResults";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/footer";
import BarChart from "./components/charts/BarChart";
import { endpoint } from "./apiEndpoint";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const LOADING = "LOADING";
const ACTION_COMPLETE = "ACTION_COMPLETE";
const ERROR = "ERROR";

const initialState = {
  response: {
    confirmed: { value: 0 },
    deaths: { value: 0 },
    recovered: { value: 0 },
    active: { value: 0 },
    lastUpdate: new Date().toLocaleDateString(),
  },
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      response: state.response,
      loading: true,
      error: null,
    };
  }
  if (action.type === ACTION_COMPLETE) {
    return {
      response: action.payload.response,
      loading: false,
      error: null,
    };
  }
  if (action.type === ERROR) {
    return {
      response: null,
      loading: false,
      error: action.payload.error.message,
    };
  }
  return state;
};

function App() {
  const [results, resultDispatch] = useReducer(reducer, initialState);
  const [countries, setCountries] = useState([]);
  console.log(results);

  useEffect(() => {
    resultDispatch({ type: LOADING });

    fetch(endpoint + "/countries")
      .then((resp) => resp.json())
      .then(({ countries }) => {
        setCountries(countries);
      });

    fetch(endpoint)
      .then((resp) => resp.json())
      .then(({ confirmed, deaths, recovered, lastUpdate }) => {
        resultDispatch({
          type: ACTION_COMPLETE,
          payload: { response: { confirmed, deaths, recovered, lastUpdate } },
        });
        console.log(confirmed, deaths, recovered, lastUpdate);
      })
      .catch((error) => {
        resultDispatch({ type: ERROR, payload: { error } });
      });
  }, []);

  const getCountryData = (country) => {
    resultDispatch({ type: LOADING });
    const url =
      country === "global" ? endpoint : endpoint + `/countries/${country}`;
    fetch(url)
      .then((resp) => resp.json())
      .then(({ confirmed, deaths, recovered, lastUpdate }) => {
        console.log(confirmed, deaths, recovered, lastUpdate);
        resultDispatch({
          type: ACTION_COMPLETE,
          payload: { response: { confirmed, deaths, recovered, lastUpdate } },
        });
      });
  };

  return (
    <div>
      <Container>
        <DropDown
          countries={countries}
          loading={results.loading}
          handlSelectClick={getCountryData}
        />

        <TextResults {...results.response} />
        <div
        // key={`${results.confirmed.value}-${results.deaths.value}-${results.recovered.value}`}
        >
          <BarChart {...results.response} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
