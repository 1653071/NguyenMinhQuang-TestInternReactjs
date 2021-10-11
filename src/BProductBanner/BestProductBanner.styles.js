import styled from "styled-components";
export const BannerWrapper = styled.div`
  width: 100%;
  height: 1173px;
  position: relative;
  background-color: #e86e1c;
`;
export const Header = styled.div`
  top:100px;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 5px;
  text-align: center;
  color: #f96400;
  position: absolute;
`;
export const Content =styled.span`
  top:120px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 665px;
  height: 52px;
  margin-top: 49px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #f96400;
`;
export const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductWrapper = styled.div`
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  width: 80%;
  height: 514px;
`;
export const Product = styled.div`
  display: inline-block;
  width: 33.3%;
  height: 614px;
  position: relative;
  
`;
export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  
`;

export const Box =styled.div`
  bottom: -60px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 79px;
  background-color: white;
  color: #020001;
  position: absolute;
  border: solid 3px #020001;
`;
export const TextBox=styled.div`
  float: left;
  width: 70%;
  height: 44px;
  padding: 10px 10px;
  
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
export const GoButton=styled.img`
  width: 20%;
  height: 66px;
  float: right;
  padding-top:10px ;
  
`;


