import React from "react";
import { Link, Outlet } from "react-router-dom";
import logoHeader from "../img/logoHeader.svg";
import logoFooter from "../img/logoFooter.svg";
import Beans from "../img/Beans_logo_dark.svg";
import Title from "./Title";

export default function Layout() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <header>
              <div className="header">
                <Link to={"/"} className="colorHeader header__item">
                  <img src={logoHeader}></img>Coffe house
                </Link>
                <Link to={"/OurCoffee"} className="colorHeader header__item">
                  Our Coffee
                </Link>
                <Link to={"/ForYouP"} className="colorHeader header__item">
                  For your pleasure
                </Link>
              </div>
              <Title></Title>
            </header>
          </div>
        </div>
      </div>
      <Outlet />
      <footer>
        <div>
          <Link to={"/"}>
            <img src={logoFooter}></img>Coffe house
          </Link>
          <Link to={"/OurCoffee"}>Our Coffee</Link>
          <Link to={"/ForYouP"}>For your pleasure</Link>
        </div>
        <div>
          <img src={Beans}></img>
        </div>
      </footer>
    </>
  );
}
