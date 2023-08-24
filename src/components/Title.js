import React from "react";

export default function Title({ titleHeader, BeansLogo, text, newtext }) {
  return (
    <>
      <h1 className="title-big">{titleHeader}</h1>
      <img className="beanslogo" src={BeansLogo}></img>
      <h3 className="preview__subtitle">{text}</h3>
      <h3 className="preview__subtitle">{newtext}</h3>
    </>
  );
}
