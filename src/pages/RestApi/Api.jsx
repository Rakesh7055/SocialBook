import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./api.css";
import { fatchCountryApi, earchCountry } from "../../reducer/country";

const Api = () => {
  const [countryName, setCountryName] = useState("");

  const countryApi = useSelector((state) => {
    return state?.countryData?.countryData;
  });
  console.log({ countryApi });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchCountryApi());
  }, []);

  function checkcountry(country) {
    return country?.name?.common
      ?.toLowerCase()
      .includes(countryName.toLocaleLowerCase());
  }
  const countryData = countryApi?.filter(checkcountry);

  const searchHandler = (e) => {
    let value = e.target.value;
    setCountryName(value);
  };

  return (
    <div>
      <h1>Country Name</h1>
      <input
        type="text"
        placeholder="country name.."
        value={countryName}
        onChange={searchHandler}
      />

      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Flag</td>
          <td>CAPITAL</td>
          <td>POPULATION</td>
        </tr>

        {countryData?.map((item) => (
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
    </div>
  );
};

export default Api;
