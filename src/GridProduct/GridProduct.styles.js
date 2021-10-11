import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
 
  
`;
export const ListProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;
export const ProductCard = styled.div`
  width: 20%;
  height: 500px;
 
  margin: 18px;
`;
export const ImageProduct = styled.img`
  width: 100%;
  height: 70%;
`;
export const TitleProduct = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: left;
`;
export const CostProduct = styled.div`
  float: left;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.19;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
export const LikeProduct = styled.div`
  float: right;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.19;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
export const ButtonSeeMore = styled.button`
  left: 50%;
  position: absolute;
  transform: translate(-50%, -120%);
  font-family: Montserrat;
  font-size: 23px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: normal;
  text-align: left;
  color: #222;
  text-transform: uppercase;
  padding: 21px 36px 21px 37px;
  border: solid 3px #020001;
  background-color: #fff;

`;