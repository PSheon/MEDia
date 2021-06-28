import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import { FaGooglePlay, FaApple } from "react-icons/fa";

import aboutImage from "assets/images/about/about.svg";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <Row>
          <Col className="lg-5 md-6 sm-12">
            <Image src={aboutImage} className="about-image" alt="about image" />
          </Col>
          <Col className="lg-6 offset-lg-1 md-6 sm-12">
            <Box className="about-right-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">以最高安全級別保護會員</Heading>
                </SectionBackground>

                <Text>
                  MEDia 是一個建立在以太坊網絡上的平台。 其原生治理代幣 MED
                  建立在 ERC-20 代幣標準之上。 在平台上創建的代幣是使用 ERC-721
                  不可替代標準鑄造的，並由 MEDia 協議保護.
                </Text>
              </SectionTitle>

              <Box className="about-list">
                <Text as="span">50% 樂透獎金池.</Text>
                <Text as="span">35% 投資人與團隊治理.</Text>
                <Text as="span">10% 隨機空投.</Text>
                <Text as="span">5% 前期銷售.</Text>
              </Box>

              <Box className="about-btn-wrapper">
                <Link href="#">
                  <a className="btn btn-fill">
                    {" "}
                    <FaGooglePlay /> 連結
                  </a>
                </Link>
                <Link href="#">
                  <a className="btn">
                    <FaApple /> 連結
                  </a>
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
