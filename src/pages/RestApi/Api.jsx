import React, { useEffect, useState } from "react";
import "./api.css";

const Api = () => {
  const [state, setState] = useState([]);

  const fetchApi = () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((result) => {
        setState(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const searchHandler = async (e) => {
    let countryName = e.target.value;
    console.log(countryName, "/////");
    try {
      let result = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      result = await result.json();
      if (result && Array.isArray(result)) {
        setState(result);
      }
    } catch (err) {
      console.log({ error: err });
    }
  };

  return (
    <>
      <h1>Country Name</h1>
      <input
        type="text"
        placeholder="country name.."
        onChange={searchHandler}
      />

      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Flag</td>
          <td>CAPITAL</td>
          <td>POPULATION</td>
        </tr>
        {state.map((item) => (
          <tr>
            <td>{item.name.common}</td>
            <td>
              <img aspect-ratio={1 / 1} src={item.flags.png} alt="" />
            </td>
            <td>{item.capital}</td>
            <td>{item.population}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Api;
