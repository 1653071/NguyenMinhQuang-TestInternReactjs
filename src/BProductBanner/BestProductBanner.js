import React from "react";
import bannerImage from "../image/bes-bg.png";
import imageproduct1 from "../image/best-image-01.png";
import imageproduct2 from "../image/best-image-02.png";
import imageproduct3 from "../image/best-image-03.png";
import gobutton from "../image/go-icon.png";
import {
  BannerWrapper,
  ImageBanner,
  Header,
  Content,
  ProductWrapper,
  ImageProduct,
  Box,
  Product,
  TextBox,
  GoButton
} from "./BestProductBanner.styles";
export default function BProductBanner() {
  return (
    <BannerWrapper>
      <ImageBanner src={bannerImage}></ImageBanner>
      <Header>BEST PRODUCT</Header>
      <Content>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </Content>
      <ProductWrapper>
        <Product>
          <ImageProduct src={imageproduct1}></ImageProduct>
          <Box>
            <TextBox>How to create mobile-optimized</TextBox>
            <GoButton src={gobutton}/>
          </Box>
        </Product>
        <Product>
          <ImageProduct src={imageproduct2}></ImageProduct>
          <Box>
            <TextBox>How to create mobile-optimized</TextBox>
            <GoButton src={gobutton}/>
          </Box>
        </Product>
        <Product>
          <ImageProduct src={imageproduct3}></ImageProduct>
          <Box>
            <TextBox>How to create mobile-optimized</TextBox>
            <GoButton src={gobutton}/>
          </Box>
          
        </Product>
      </ProductWrapper>
    </BannerWrapper>
  );
}
