import React from "react";
import styles from "./style";
import CustomCursor from "./components/CustomCursor";

import {
  Hero,
  Navbar,
  Footer,
  Ecommerce,
  About,
  Services,
  Stats,
  WebTechnologies,
  BackTopBtn,
  WebDevelopment,
  Consulting,
  Security,
  EcommerceStack,
  SecurityStack,
  Contact,
  ConsultingStack,
} from "./components";

function App() {
  return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <CustomCursor />
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <Stats />
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <WebDevelopment />
          <WebTechnologies />
          <Ecommerce />
          <EcommerceStack />
          <Consulting />
          <ConsultingStack />
          <Security />
          <SecurityStack />
          <Contact />
          <Footer />
          <BackTopBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
