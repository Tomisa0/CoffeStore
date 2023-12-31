import React from "react";
import dataCoffee from "../db.json";
import Card from "../components/Card";
import Products from "../components/Products";
import "../css/style.css";
import Title from "../components/Title";
import BeansLogoImg from "../img/Beans logo.svg";

export default function Main() {
  return (
    <div>
      <Title
        titleHeader="Everything You Love About Coffee"
        BeansLogo={BeansLogoImg}
        text="We makes every day full of energy and taste"
        newtext={"Want to try our beans?"}
      ></Title>
      <Card
        title="About us"
        text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        
Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now."
      ></Card>
      <Products ArrayToRender={dataCoffee.bestsellers}></Products>
    </div>
  );
}
