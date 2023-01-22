import React,{useEffect} from "react";
import HomeCarousel from "../components/HomeCarousel";

import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardOverlay,
  MDBFooter,
  MDBIcon,
} from "mdb-react-ui-kit";

const Home = () => {
  useEffect(() => {
    ///checking to see if local storage is empty
    if (typeof localStorage.getItem("currentUser") !== "undefined") {
      window.location.href = "/home";
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <HomeCarousel />
      <div className="container">
        <h1 className=" text-center mt-5 fw-300">
          IBIZA HILTON HEAD SOUTH CAROLINA
        </h1>
        <p className="text-center mt-2 fw-300">
          {" "}
          EXPLORE PARADISE AT OUR IBIZA BEACHFRONT RESORT
        </p>
        <div className="p-home">
          If you are looking for an idyllic Ibiza hotel, you won't want to miss
          our stunning resort. Ibiza Head Oceanfront Resort is located on sugar
          sand beaches off the coast of South Carolina on the #1 island in the
          Continental United States, as ranked by Travel + Leisure, and the #1
          island in the US by Condé Nast Traveler. As part of the prestigious
          Palmetto Dunes Oceanfront Resort community, we offer access to an
          11-mile lagoon system with bike trails, tennis courts and three
          championship golf courses. Paired with sparkling pools and delicious
          dining, you will be captivated by our hotel in Hilton Head, SC. Our
          beachfront resort is ideal for those seeking both adventure and
          relaxation. Enjoy unrivaled ocean views and pack your beach gear for
          the ultimate retreat on Hilton Head Island.
        </div>

        <MDBFooter
          bgColor="white"
          className="text-center text-lg-start text-muted mt-5"
        >
          <section className="mt-5">
            <MDBContainer className="text-center text-md-start mt-5">
              <h1 className="text-center mt-5">Resort Amenties</h1>
              <MDBRow className="mt-5">
                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
                  <p>
                    <MDBIcon icon="bed" className="me-2" size="lg" />
                    323 Studio Suites with Mini-Kitchens and Balconies
                  </p>
                  <p className="mt-4 mb-4">
                    <MDBIcon icon="hiking" className="me-3" size="lg" />
                    Daily Resort Activities for the Whole Family
                  </p>
                  <p>
                    <MDBIcon icon="golf-ball" className="me-3" size="lg" /> 54
                    Holes of Championship Golf
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
                  <p>
                    <MDBIcon icon="umbrella-beach" className="me-2" size="lg" />
                    Recently Renourished, Award-Winning Beaches
                  </p>
                  <p className="mt-4 mb-5">
                    <MDBIcon icon="paw" className="me-3" size="lg" />
                    Pet Friendly
                  </p>
                  <p>
                    <MDBIcon icon="dumbbell" className="me-3" size="lg" />{" "}
                    Fully-Equipped Fitness Center
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
                  <p>
                    <MDBIcon icon="swimming-pool" className="me-2" size="lg" />3
                    Pools, Including 1 Adult-Only Pool and 2 Beachside Hot Tubs
                  </p>
                  <p className="mt-4 mb-4">
                    <MDBIcon icon="table-tennis" className="me-3" size="lg" />
                    19 Tennis Courts & 24 Pickleball Courts
                  </p>
                  <p>
                    <MDBIcon icon="parking" className="me-3" size="lg" /> Valet
                    and Self-Parking
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>

        <MDBContainer>
          <h1 className="experiences m-5 text-center"> EXPERIENCES</h1>
          <MDBRow md="4" lg="6" xl="6" className="mx-auto mb-4">
            <MDBCol>
              <MDBCard className="h-100 mb-4">
                <MDBCardImage
                  src="https://ibbiza.s3.us-east-2.amazonaws.com/hltnhd-omni-hilton-head-resort-golf-new.jpg"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>
                    {" "}
                    Tee off on Three Championship Golf Courses
                  </MDBCardTitle>
                  <MDBCardText>
                    Featuring three legendary layouts, golf at Palmetto Dunes
                    near Ibiza Resort is regarded as some of Hilton Head
                    Island's best.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol order="5">
              {" "}
              <MDBCard className="h-100 mb-4">
                <MDBCardImage
                  src="https://ibbiza.s3.us-east-2.amazonaws.com/hltnhd-omni-hilton-head-xo-sports-spirits-interim.jpg"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle> Tempt your palate</MDBCardTitle>
                  <MDBCardText>
                    With authentic regional cuisine, our resort offers nine
                    on-site culinary choices from casual to fine dining,
                    inspired by the region’s culture and ingredients, all a part
                    of your luxury resort experience.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol order="1">
              <MDBCard className="h-100 mb-4">
                <MDBCardImage
                  src="https://ibbiza.s3.us-east-2.amazonaws.com/hltnhd-omni-hilton-head-oceanfront-resort-beach-dunes.jpg"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle> Ibiza Beaches</MDBCardTitle>
                  <MDBCardText>
                    Miles of sugar sand beaches await you when you stay at our
                    Ibiza resort. Take in the magnificent views of the Atlantic
                    Ocean from your beachside chair or grab some friends for a
                    game of sand volleyball.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <h1 className="text-center m-5">OCCASIONS</h1>

          <p className="m-10 text-center">
            Are you planning a beach wedding? Ibiza Hilton Head Oceanfront
            Resort offers private access to the beach for your special day.
            Learn more about our hotel wedding packages and meeting spaces at
            Ibiza Hilton Head Oceanfront Resort.
          </p>

          <MDBRow center className="mt-5">
            <MDBCol md="6" lg="6" xl="6" className="mx-auto mb-4">
              {" "}
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://ibbiza.s3.us-east-2.amazonaws.com/hltnhd-omni-hilton-head-wedding-couple.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle
                    className="text-center fs-3"
                    style={{ marginTop: 49 }}
                  >
                    Forever deserves a worthy
                  </MDBCardTitle>
                  <MDBCardTitle className="text-center fs-3">
                    destination
                  </MDBCardTitle>
                </MDBCardOverlay>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              {" "}
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://ibbiza.s3.us-east-2.amazonaws.com/hltnhd-omni-hilton-head-shorehouse-social-function.jpg"
                  alt=".."
                />
                <MDBCardOverlay>
                  <MDBCardTitle
                    className="text-center fs-3"
                    style={{ marginTop: 49 }}
                  >
                    Meet for a purpose, stay for the experience.
                  </MDBCardTitle>
                </MDBCardOverlay>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted mt-5"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="#" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="#" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="#" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="#" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="#" className="me-4 text-reset">
              <MDBIcon fab icon="snapchat-square" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  SOUTH CAROLINA, SC 29928, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  ibiza.info@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 840-440-0000
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 840-440-0001
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Ibiza</h6>
                <p>
                  <a href="#!" className="text-reset">
                    GIFTCARDS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    MEDIA CENTER
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    TRAVELAGENTS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    CARRERS
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  IBIZA SAFE & CLEAN
                </h6>
                <p>
                  We continue to monitor local guidelines and evolve our
                  solutions to ensure the continued health and safety of our
                  guests and associates. For the most up-to-date CDC information
                  related to COVID-19 and to see what level each state/county
                  are currently in, visit: https://www.cdc.gov/
                </p>
              </MDBCol>

              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  JOIN SELECT GUEST® TODAY
                </h6>
                <p>
                  TODAY Enjoy free in-room WiFi, earn free nights and experience
                  other perks when you join our Select Guest® loyalty program.
                  Rewards get even better on your second stay including
                  complimentary daily beverage, clothes pressing and more!
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © jkabore 2023 Copyright:
          <a className="text-reset fw-bold ml-1" href="/">
            ibiza
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Home;
