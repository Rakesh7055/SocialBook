import { useEffect } from "react";
export const fetchApi = () => {
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
