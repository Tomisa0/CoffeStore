import React from "react";

export default function ProCountryItem({ url, name, price, country }) {
  return (
    <div>
      <img src={url}></img>
      <h3>Название: {name}</h3>
      <h4>Страна: {country}</h4>
      <h4>Стоимость: {price}</h4>
    </div>
  );
}
