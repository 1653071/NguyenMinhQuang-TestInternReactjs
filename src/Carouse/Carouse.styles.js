import styled from "styled-components";
export const CarouseWrapper = styled.div`
      width: 100%;
    
      height: 800px;
      position: relative;
      
      

`;
export const PrevButton = styled.a`
      top: 50%;
      left:16px;
      position: absolute;
      color:white;
      font-size:24px;
      font-weight: bold;
      transition: 0.6s ease;
`; 
export const NextButton = styled.a`
      top: 50%;
      right:16px;
      position: absolute;
      color:white;
      font-size:24px;
      font-weight: bold;
      transition: 0.6s ease;
`;
export const ImageBanner = styled.img`
      width: 100%;
      height: 100%;
`;
