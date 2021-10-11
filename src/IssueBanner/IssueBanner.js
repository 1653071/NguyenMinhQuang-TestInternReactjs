import React from "react";
import {
  IssueBannerWrapper,
  Header,
  Content,
  ListCard,
  Card,
  ImageDice,
  ImageDice2,
  ImageHot,
  ImageCoin
} from "./IssueBanner.styles";
import goimage from "../image/news-img-01.png";
import imagebrand01 from "../image/news-img-04.png";
import imagedice01 from "../image/news-object-03.png";
import imagedice02 from "../image/news-object-02.png";
import imagehot from "../image/news-object-04.png";
import imagecoin from "./news-object-03.png"
export default function IssueBanner() {
  return (
    <IssueBannerWrapper>
      <Header>Happened’s issue</Header>
      <Content>
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </Content>
      <ImageDice src={imagedice01}/>
      <ImageDice2 src={imagedice02}/>
    
      <ListCard>
        <Card style={{ backgroundColor: "orange" }}>
          <div className="whpn-issue">whpnissue</div>
          <div className="NewsImg_01">
            <img src={goimage}></img>
          </div>
          <ImageCoin src ={imagecoin}></ImageCoin>
        </Card>
        <Card>
          <div className="brand">B BRAND</div>

          <img className="image-brand" src={imagebrand01}></img>
          <ImageHot src = {imagehot} />
        </Card>
        <Card>
          <div className="brand">C BRAND</div>

          <img className="image-brand" src={imagebrand01}></img>
        </Card>
        <Card>
          <div className="brand" style={{backgroundColor:"#ff5500"}}>D BRAND</div>

          <img className="image-brand" src={imagebrand01}></img>
        </Card>
        <Card>
          <div className="brand">E BRAND</div>

          <img className="image-brand" src={imagebrand01}></img>
        </Card>
      </ListCard>
    </IssueBannerWrapper>
  );
}
