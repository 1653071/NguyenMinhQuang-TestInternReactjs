import React from "react";
import {
  IntroBannerWrapper,
  Image,
  Header,
  Content,
  Button,
  ImageWrapper,
  Footer,
  FooterContentHeader,
  ContentBox,
  LeftContent,
  InformationBox,
} from "./IntroBanner.styles";
import himage from "../image/video-object-05.png";
import videoimage from "../image/video.png";
import videoobjectimage from "../image/video-object-04.png";
import videoobjectimage06 from "../image/video-object-06.png";
import videoobjectimage07 from "../image/video-object-07.png";
import videoobjectimage08 from "../image/video-object-08.png";
import videoobjectimage09 from "../image/video-object-09.png";
import videoobjectimage03 from "../image/video-object-03.png";
import videoobjectimage01 from "../image/video-object-01.png";
import videoobjectimage02 from "../image/video-object-02.png";
export default function IntroBanner() {
  return (
    <IntroBannerWrapper>
      <Image src={himage} className="h" />
      <Header>what happened</Header>
      <Content>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </Content>
      <Button>SEE MORE</Button>
      <ImageWrapper>
        <img src={videoimage}></img>
      </ImageWrapper>
      <Image src={videoobjectimage} className="video-object" />
      <Image src={videoobjectimage06} className="video-object06" />
      <Image src={videoobjectimage07} className="video-object07" />
      <Image src={videoobjectimage08} className="video-object08" />
      <Image src={videoobjectimage09} className="video-object09" />
      <Image src={videoobjectimage03} className="video-object03" />
      <Image src={videoobjectimage01} className="video-object01" />
      <Image src={videoobjectimage02} className="video-object02" />
      <Footer>
        <FooterContentHeader className="a">
          <div>what happened</div>
          <p>
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
            영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
            이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </FooterContentHeader>
        <LeftContent style={{ width: "182px" }}>
          <div>my order</div>
          <p>
            내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙 서류
            발급
          </p>
        </LeftContent>
        <LeftContent>
          <div>about</div>
          <p>회사 소개 인재 채용 상시 할인 혜택</p>
        </LeftContent>
        <LeftContent style={{ width: "182px" }}>
          <div>my account</div>
          <p> 회원 정보 수정 회원 등급 마일리지 현황 쿠폰</p>
        </LeftContent>
        <LeftContent style={{ width: "182px" }}>
          <div>help</div>
          <p>
            1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의 소리
          </p>
        </LeftContent>
        <InformationBox>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</InformationBox>
      </Footer>
    </IntroBannerWrapper>
  );
}
