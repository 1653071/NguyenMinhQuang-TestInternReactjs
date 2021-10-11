import React from "react";
import bannerimage from "./main-banner.png";
import { CarouseWrapper, PrevButton, NextButton,Header ,ImageBanner } from "./Carouse.styles";
export default function NavBar() {
  return (
    <CarouseWrapper>
      <ImageBanner src={bannerimage}></ImageBanner>
      <PrevButton>{"<"}</PrevButton>
      <NextButton>{">"}</NextButton>
    </CarouseWrapper>
  );
}
