import React from 'react';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import FooterPanel from "./components/footer/footer.component";

function DabbaraShivaPrasad() {
    return (
        <div>
         <MyCarousal />
        <MyTitleMessage intro=" Hi, I am" name="Dabbara ShivaPrasad"/>
        <MyNavbar />

        <div>
          <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
            <div>
              <Container className="container-box rounded">
                <Fade duration={700}>
                  <About name="ShivaPrasad"/>
                </Fade>
              </Container>
            </div>
          </Parallax>
        </div>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />

            <Skills />
          </Fade>
        </Container>
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />

              <Experience companyName="Uniqon Consulting Services" projectName="" Description=""/>
            </Fade>
          </Container>
        </div>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />
            <TimeLine />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>

        <hr />
        <FooterPanel name="Dabbara ShivaPrasad"/>
        </div>
    )
}

export default DabbaraShivaPrasad;
