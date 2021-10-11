import styled from "styled-components";

export const IssueBannerWrapper = styled.div`
  background-color: #fccb05;
  width: 100%;
  height: 1143px;
  position: relative;
`;
export const Header = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 45px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 4.5px;
  text-align: left;
  color: #110e03;
`;

export const Content = styled.div`
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  position: absolute;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: center;
  color: #110e03;
`;
export const ListCard = styled.div`
  top: 40%;
  left: 0;
  position: absolute;

  width: 100%;
  height: 514px;
  background-color: black;
  padding: 2px 0px;
`;
export const Card = styled.div`
  position: relative  ;
  width: 20%;

  height: 100%;
  
  float: left;
  background-color: #ff5500;
  .whpn-issue {
    width: 50%;
    margin: auto;

    word-wrap: break-word;
    text-transform: uppercase;
    font-family: Montserrat;
    font-size: 55px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: normal;
    text-align: center;
    color: #110e03;
  }
  .NewsImg_01 {
    width: 148px;
    height: 148px;
    margin: auto;
    margin-top: 40px;
    border: solid 8px #111;
    background-color: #fff;
  }
  .image-brand {
    width: 100%;
    height: 90%;
  }
  .brand {
    width: 100%;
    height: 10%;
    text-align: center;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    background-color: #111;
    color: #fff;
  }
`;

export const HeaderIssue = styled.div`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
export const ImageDice=styled.img`
  width: 95px;
  height: 95px;
  position: absolute;
  right: 0;
  top:10px;
  
`;
export const ImageDice2=styled.img`
  width: 95px;
  height: 95px;
  position: absolute;
  right: 0px;
  top:125px;
  
`;
export const ImageHot=styled.img`
  width: 111px;
  height: 59px;
  position: absolute;
  left: 10px;
  top:-24px;
  
`;
export const ImageCoin =styled.img`
  width: 167px;
  height: 169px;
  position: absolute;
  right: -10px;
  bottom:-85px;
  z-index: 1;
  `;


