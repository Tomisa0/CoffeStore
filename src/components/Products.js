import React from "react";
import dataCoffee from "../db.json";
import ProductItem from "./ProductItem";
import ProCountryItem from "./ProCountryItem";

export default function Products({ ArrayToRender }) {
  console.log("main data", dataCoffee);
  console.log("only bestsellers", dataCoffee.bestsellers[2]);
  return (
    <div>
      {ArrayToRender.map((Item) => {
        if (Item.country) {
          return (
            <ProCountryItem
              url={Item.url}
              name={Item.name}
              country={Item.country}
              price={Item.price}
            ></ProCountryItem>
          );
        } else {
          return (
            <ProductItem
              url={Item.url}
              name={Item.name}
              price={Item.price}
            ></ProductItem>
          );
        }
      })}
    </div>
  );
}
