import styled from "styled-components";

export const IntroBannerWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 2143px;
  position: relative;
`;
export const Header = styled.div`
  position: absolute;
  top: 100px;
  left: 662px;
  transform: translate(331, -50%);
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 50px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 10px;
  text-align: left;
  color: #111;
`;
export const Content = styled.div`
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  position: absolute;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #111;
`;
export const Image = styled.img`
  
  &.h{
    position: absolute;
  width: 146px;
  height: 114px;
  left: 30px;
  top: 0px; 

  }
  &.video-object01{
  top: 1300px;
  z-index: 1;
  position: absolute;
  width: 411px;
  height: 204px;
  left: 348px;
  
  }
  &.video-object02{
  top: 1300px;
 
  position: absolute;
  width: 90px;
  height: 83px;
  left: 1182px;
  
  }
  &.video-object03{
  top: 1200px;
  z-index: 0;
  position: absolute;
  width: 146px;
  height: 146px;
  left: 223px;
  
  }
  &.video-object09{
  top: 600px;
  z-index: 1;
  
  transform: translate(175px,0px);
  position: absolute;
  width: 350px;
  height: 315px;
  right: 0px;
  
  }
  &.video-object08{
  top: 800px;
  z-index: 2;
  position: absolute;
  width: 395px;
  height: 512px;
  right: 0px;
  
  }
  &.video-object{
  top: 260px;
  transform: translate(-260px,0px);
  position: absolute;
  width: 520px;
  height: 471px;
  left: 30px;
  
  }
  &.video-object06{
  top: 7%;
  right: 244px;
  width: 158px;
  height: 158px;
  z-index: 1;
  position: absolute;
  
  
  
  }
  &.video-object07{
  top: 5%;
  right: 150px;
  width: 158px;
  height: 158px;

  position: absolute;
  
  
  
  }
`;
export const Button = styled.button`
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  text-transform: uppercase;
  margin: 47px 325px 0 4px;
  padding: 21px 37px;
  border: solid 3px #020001;
  background-color: #fff;
  font-family: Montserrat;
  font-size: 23px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: normal;
  text-align: center;
  color: #222;
  position: absolute;
`;
export const ImageWrapper = styled.div`
  width: 1251px;
  height: 823px;
  top: 400px;
  left: 50%;
  z-index: 3;
  transform: translate(-50%,0px);
  position: absolute;

`;
export const Footer = styled.div`
  width: 100%;
  height: 464px;
  bottom: 0;
  border: 1px solid grey;
  position: absolute;
  
`;
export const FooterContentHeader = styled.div`
  width: 235px;
  height: 15px;
  float: left;
  padding: 10px;
  padding-left: 99px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  color: #111;
  p{
    font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #111;
  }
  

  
`;
export const LeftContent = styled.div`
  width: 82px;
  height: 15px;
  float: right;
  padding: 10px;
  padding-right:30px ;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  color: #111;
  p{
    font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #111;
  }
  

  
`;
export const InformationBox  = styled.div`
  width: 50%;
  display: block;
  
  padding: 249px 99px 113px;
  background-color: #fff;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #a9a9a9;


`;

