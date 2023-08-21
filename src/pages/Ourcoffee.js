import React from "react";
import Products from "../components/Products";
import dataCoffee from "../db.json";
import Card from "../components/Card";

export default function Ourcoffee() {
  return <div>
    <Card
        title={"About our beans"}
        text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

      Afraid at highly months do things on at. Situation recommend objection do intention
      so questions.
      As greatly removed calling pleased improve an. Last ask him cold feel
      met spot shy want. Children me laughing we prospect answered followed. At it went
      is song that held help face.
      "
      ></Card>

    <Products ArrayToRender={dataCoffee.coffee}></Products>
  </div>;
}
