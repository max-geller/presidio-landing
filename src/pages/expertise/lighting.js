import React from "react";

import PageWrapper from "../../components/PageWrapper";
import CTA from "../../sections/CTA";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import map from "./../../assets/image/lighting.jpeg";

const Lighting = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "left",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Client Login",
        }}
        footerConfig={{
          theme: "light",
        }}
      >
        {/* <!-- Hero Area --> */}
        <div
          className="bg-image bg-gradient bg-gradient-black mt-17 pt-14 pt-lg-12 pb-lg-12"
          css={`
            background-image: url(${map});
          `}
        >
          <Container>
            <Row className="align-items-center">
              <Col
                md="9"
                lg="7"
                xl="6"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-content section-title dark-mode-texts">
                  <h1 className="gr-text-3 font-weight-bold mb-8">
                    LIGHTING & CONTROLS
                  </h1>
                  <p className="gr-text-8 pr-sm-7 pr-md-12">
                    Lighting and associated controls are a significant
                    contributor to modern building systems cost. Understanding
                    material pricing and productivity are crucial when evaluting
                    lighting systems.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt-15">
          <h2>Let's Shine a Light on Costs...</h2>
          <p className="mt-8">
            Airport campuses can present many logistic challenges to the
            construction phasing process, and require a special attention to
            labor factoring and productivity impacts. Our team has seen more
            exposure to these challenges than most, and have unique experience
            that can help prepare more accurate cost estimates for airport
            construction.{" "}
          </p>
          <p>
            Let's take a look at some common cost-drivers for airport
            construction:
          </p>
        </Container>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Lighting;
