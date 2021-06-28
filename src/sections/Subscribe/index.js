import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Button from "reusecore/Button";
import Input from "reusecore/Form/Input";
import { SectionTitle } from "reusecore/SectionTitle";

import SubscribeWrapper from "./subscribe.style";

const Subscribe = () => {
  return (
    <SubscribeWrapper id="contact">
      <Container>
        <Row>
          <Col className="col-12">
            <Box className="subscribe-box-bg">
              <Row>
                <Col className="lg-6 offset-lg-3 xs-12">
                  <SectionTitle>
                    <Heading> 不要錯過我們的任何資訊 </Heading>
                    <Text>
                      訂閱我們以獲取最新的市場新聞。
                      <br />
                      並接收有關 MED 空投 和加密貨幣的最新消息.
                    </Text>
                  </SectionTitle>
                </Col>
              </Row>
              <Row>
                <Col className="lg-8 offset-lg-2 xs-12">
                  <Box className="form-box">
                    <Input type="text" placeholder="輸入您的電子信箱 . . ." />
                    <Button>訂閱</Button>
                  </Box>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Container>
    </SubscribeWrapper>
  );
};

export default Subscribe;
