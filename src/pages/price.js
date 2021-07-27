import React, {useEffect, useState} from "react";

const Price = (props) => {
const apiKey = "3FBD235D-3FE6-40CC-B61E-E42A5F5DB7D0"

const symbol  = props.match.params.symbol
const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

const [coin, setCoin] = useState("null");


const getCoin = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setCoin(data);
};


useEffect(() => {
  getCoin()
}, [])


const loaded = () => {
  return (
    <div>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
    </div>
  );
};


const loading = () => {
  return <h1>Loading...</h1>;
};


return coin ? loaded() : loading();
};




export default Price;