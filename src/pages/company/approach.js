import React from "react";

import PageWrapper from "../../../components/PageWrapper";
import Alert from "../../../sections/Alert";
import CTA from "../../../sections/CTA";
import Approach from "../../../sections/Approach";
import Newsletter from "../../../sections/Newsletter";

const Consultation = () => {
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
        <Approach />
        <Alert />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
