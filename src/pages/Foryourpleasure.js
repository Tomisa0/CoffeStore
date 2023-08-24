import React from "react";
import Card from "../components/Card";
import dataCoffee from "../db.json";
import Products from "../components/Products";
import Title from "../components/Title";

export default function Foryourpleasure() {
  return (
    <div>
          <Title titleHeader={"For Your Pleasure"}></Title>
      <Card
        title={"About our goods"}
        text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. 
        As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
      "
      ></Card>

      <Products ArrayToRender={dataCoffee.goods}></Products>
    </div>
  );
}
