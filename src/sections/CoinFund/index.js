import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";

const CoinFund = () => {
  const settings = {
    count: 432560,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "天",
    hourTitle: "小時",
    minuteTitle: "分鐘",
    secondTitle: "秒",
    id: "countdownwrap",
  };

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>在前期銷售階段獲得大量折扣.</Heading>
                </SectionBackground>
                <Text>
                  MED 的總供應量上限為
                  10,000,000，其當前的流通供應量取決於用戶的參與。 大多數 MED
                  代幣 (50%) 保留給 MEDia 市場上的買家和賣家。
                  每個星期天，50,000 個 MED 會分發給創作者和收藏家。
                  在市場啟動後至少 200
                  週內都是這種情況。但在市場啟動之前，您可以以優惠的價格購買 MED
                </Text>
              </SectionTitle>

              <Box className="btn-wrapper">
                <Link href="#">
                  <a className="btn btn-fill">購買 MED</a>
                </Link>
              </Box>
            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text>前期銷售進入最後階段 </Text>
              <CountdownTimer {...settings} />
            </Box>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$8,197</Text>
              </Box>
              <Text as="span">$50,000</Text>
            </Box>

            <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaBitcoin />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcMastercard />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcVisa />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcDiscover />{" "}
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  );
};

export default CoinFund;
