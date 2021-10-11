import React from "react";
import {
  BrandStoryBannerWrapper,
  Header,
  Content,
  Image,
  ImageDiv,
  HeaderBrandStory,
  ImageWrapper,
  Box,
  ContentBrandStory,
  Button,
  ImageObject,
  ImageObject1,
  ImageObject2,
  ImageObject3,
  ImageObject4
} from "./BrandStorybanner.styles";
import imagebanner from "../image/window.png"
import imageobject from "../image/object-01.png"
import imageobject1 from "../image/object-06.png"
import imageobject2 from "../image/object-07.png"
import imageobject3 from "../image/object-05.png"
import imageobject4 from "../image/object-04.png"
export default function BrandStoryBanner() {
  return (
    <BrandStoryBannerWrapper>
      <Header>Brand Story</Header>
      <Content>
        {" "}
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </Content>
      <ImageWrapper>
      <ImageDiv>
         <Image src={imagebanner}></Image>
         <Box>
             <HeaderBrandStory>
             What Happened’s Brand story
             </HeaderBrandStory>
             <ContentBrandStory>
             청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
             </ContentBrandStory>
             <Button>See More</Button>
         </Box>
      </ImageDiv>
      </ImageWrapper>
      <ImageObject src = {imageobject}></ImageObject>
      <ImageObject1 src = {imageobject1}></ImageObject1>
      <ImageObject2 src = {imageobject2}></ImageObject2>
      <ImageObject3 src = {imageobject3}></ImageObject3>
      <ImageObject4 src = {imageobject4}></ImageObject4>
    </BrandStoryBannerWrapper>
  );
}
