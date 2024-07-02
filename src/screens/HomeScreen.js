import React from "react";
import { Tab, Tabs } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Header from "../Components/header/Header";
import Services from "../servicesData";
import {
  HomeService,
  HomeIndustry,
} from "../Components/servisesComponents/serviceComponents";
import ContactComponent from "../Components/contactComponent/ContactComponent";
import WebsiteData from "../data/WebsiteData";
import RecentWeb from "../Components/recentsComponents/RecentWeb";

export default function HomeScreen() {
  return (
    <>
      {/* HEADER */}
      <Header bgColor="black" />

      {/* HOME SCREEN */}
      <div class="Mainbackground" id="home">
        <div class="topBackground"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001517"
            fillopacity="1"
            d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        <div class="container fluids">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="screenWords">
                <h1>Hello, I'm Milan.</h1>
                <p>
                  Welcome to my portfolio! I'm Milan Gadhiya, a full-stack
                  developer with a robust background in crafting scalable
                  applications and specializing in AI-driven solutions. I'm
                  proud to be Azure Fundamentals certified, and you can reach me
                  at milan.gadhiya2000@gmail.com.
                </p>
                {/* <div class="twoMainButton">
                  <div class="buttonMain">
                    <Link to="/app">Mobile Apps</Link>
                    <div class="hrizontalLine"></div>
                  </div>
                  <div class="buttonMain">
                    <Link to="/website">Websites</Link>
                    <div class="hrizontalLine diff"></div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div class="col-md-12 col-lg-6">
              <div class="screenImage">
                <img src="./images/img1.jpg" alt="Milanjnjn" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section" id="services">
        <div className="container rows">
          <Tabs defaultActiveKey="services" className="tab">
            <Tab className="tablinks" eventKey="services" title="Services">
              <div className="container rows">
                <div className="tabcontent" id="London">
                  <div className="row">
                    {Services.services.map((service) => (
                      <HomeService key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className="tablinks" eventKey="technology" title="Technology">
              <div className="container rows">
                <div className="tabcontent" id="London">
                  <div className="row">
                    {Services.Technology.map((technology) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6"
                        key={technology.id}
                      >
                        <div className="sectionBox">
                          <div className="sectionImage">
                            <img
                              src={technology.image}
                              alt={technology.title}
                            />
                          </div>
                          <div className="sectionWords">
                            <h4>{technology.name}</h4>
                            <ul>
                              {technology.techs.map((oneTech) => (
                                <li key={oneTech.id}>{oneTech.name}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className="tablinks" eventKey="industry" title="Industry">
              <div className="container rows">
                <div className="tabcontent" id="London">
                  <div className="row">
                    {Services.Industry.map((industry) => (
                      <HomeIndustry key={industry.id} industry={industry} />
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-md-6 aboutMeImgAdjust" >
                  <div class="aboutMeImg">
                    <img src="./images/about.png" alt="about me" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me">
                    <h5>About me</h5>
                    <div class="aboutHorizontalLine"></div>
                    <p>
                      I am a dedicated full-stack developer with a strong
                      foundation in C#, .NET, and the MERN stack—MongoDB,
                      Express.js, React, and Node.js. My expertise lies in
                      building scalable applications and integrating AI-driven
                      solutions to tackle complex challenges.
                    </p>
                    <p>
                      With a passion for crafting responsive user interfaces and
                      optimizing database performance, I excel in dynamic
                      environments where collaboration and problem-solving
                      skills are crucial. My background in Computer Engineering
                      and studies in software engineering have equipped me with
                      a diverse skill set and a commitment to continuous
                      learning.
                    </p>
                    <p>
                      I am driven by innovation and enjoy applying AI and
                      machine learning technologies to create impactful software
                      solutions. Whether developing serverless applications or
                      scalable web and mobile platforms, I aim to deliver
                      excellence and drive meaningful outcomes.
                    </p>
                    <p>
                      Let's connect and explore how we can innovate together.
                      Feel free to reach out to me on{" "}
                      <a
                        href="https://www.linkedin.com/in/milan-gadhiya-16425b188/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>{" "}
                      to start a conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <div class="container" id="projects">
        <div class="article">
          <h2>Projects</h2>
          <hr />
          <div class="rows">
            {WebsiteData.websites.slice(0, 6).map((website) => (
              <RecentWeb key={website.id} website={website} />
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div class="contactme" id="contact">
        <div class="contactOverlay">
          <div class="container">
            <div class="form">
              <ContactComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
