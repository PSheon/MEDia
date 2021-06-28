import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import BannerImage from "assets/images/banners/banner-one/banner-one-thumb.svg";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import BannerWrapper from "./banner.style";

const Banner = () => {
  return (
    <BannerWrapper>
      <img
        src={particleTopLeft}
        className="section__particle top-left"
        alt="MEDia particles"
      />
      <img
        src={particleUnderLogo}
        className="section__particle two"
        alt="MEDia particles"
      />
      <img
        src={prticleTopRight}
        className="section__particle top-right"
        alt="MEDia particles"
      />
      <img
        src={particleBottomLeft}
        className="section__particle bottom-left"
        alt="MEDia particles"
      />
      <img
        src={particleBottomRight}
        className="section__particle bottom-right"
        alt="MEDia particles"
      />
      <Container>
        <Row>
          <Col className="lg-8 xs-12">
            <Box className="banner-content">
              <Badge className="offer-text">每週發放交易獎金</Badge>
              <Heading as="h1">
                用最簡單的方式, <br /> 交易你的絕妙創意
              </Heading>
              <Text>
                MEDia 是一個以創作者為中心的 NFT 市場和發行平台,
                <br />
                使用 MED
                代幣做為交互協議的基礎，用於獎勵活躍用戶和參與協議的治理。
                <br />
                任何人都可以輕鬆地為藝術品、遊戲物品等獨特的數字物品創建不可替代的代幣
                (NFT)
              </Text>
              <Box className="banner-btn">
                <Link href="#">
                  <a className="btn btn-fill">連結</a>
                </Link>
                <Link href="#">
                  <a className="btn">連結或白皮書</a>
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
        <img
          src={BannerImage}
          className="banner__thumb"
          alt="MEDia banner thumb"
        />
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
