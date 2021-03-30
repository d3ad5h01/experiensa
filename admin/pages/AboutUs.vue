
<template>
  <div class="AboutUs">
    <div id="app" class="index back">
      <v-app app id="inspire">
        <v-app-bar height="100px" app color="transparent">
          <div class="ml-2 mt-4">
            <vuetify-logo />
          </div>
          <v-toolbar-title
            class="text-h4 white--text text-lighten-1 font-weight-light"
            >eXperiensaa</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn class="transparent ml-2" elevation="0" href="/"> Home </v-btn>

          <v-btn class="transparent ml-2" elevation="0" href="/Login">
            Login
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/AboutUs">
            About Us
          </v-btn>
        </v-app-bar>

        <v-content>
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-card class="mx-auto semi-transparent" min-height="100" flat>
                  <v-card-text
                    class="text-h1 white--text text-lighten-5 font-weight-black pa-5"
                  >
                    Internship<br />
                    Portal
                    <v-card-text class="text-h4 font-weight-light pa-4">
                      Learn &nbsp &nbsp Apply &nbsp &nbsp Achieve
                    </v-card-text>
                  </v-card-text>
                </v-card>
                <v-card class="mx-auto transparent" dark min-height="50" flat>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container>
            <v-container grid-list-lg text-sm-center md-12>
              <v-layout row wrap>
                <v-flex xs12 md12>
                  <v-card
                    class="mx-auto rounded-b-xl grey lighten-5"
                    elevation="4"
                    min-height="150"
                  >
                    <v-card
                      class="mx-auto rounded-b-xl transparent"
                      min-height="50"
                      flat
                      light
                    >
                    </v-card>
                    <v-card-text>
                      <h2
                        class="v-heading text-h4 text-sm-h4 mb-3 black--text text-darken-5"
                      >
                        <a
                          href="#project-sponsors"
                          class="text-decoration-none text-md-left"
                        >
                        </a>
                        Indian Institute of Information Technology Allahabad
                      </h2>
                      <div>
                        <p
                          class="text-justify black--text text-darken-5 ml-10 mr-10"
                        >
                          Established in 1999 as an Institute of National
                          Importance to be a centre of excellence in Information
                          Technology, Electronics & Communications and allied
                          areas, Indian Institute of Information Technology,
                          Allahabad (IIIT Allahabad) was conferred the Deemed
                          University status by Govt. of India in the year 2000.
                          <br />
                          <br />
                          IIIT Allahabad now stands as an institute of
                          international repute known for being a pioneer in the
                          field of Information Technology. With its highly
                          experienced faculty and one of the brightest groups of
                          students of this nation, coupled with dynamic academic
                          courses, inter-departmental electives, semester
                          projects and world class research labs, the institute
                          has succeeded in creating an environment where
                          creativity and new ideas flourish.
                          <br />
                          <br />
                          The institute is committed to producing students who
                          apart from pure academics excel in other fundamentally
                          important area like extra-curricular activities and
                          have exposure to the cutting edge technologies that
                          are shaping our world.
                          <br />
                        </p>
                      </div>
                    </v-card-text>

                    <div class="ml-10 mr-10"></div>
                    <section id="project-sponsors">
                      <h2
                        class="v-heading text-h4 text-sm-h4 mb-3 black--text text-darken-5"
                      >
                        <a
                          href="#project-sponsors"
                          class="text-decoration-none text-right text-md-left"
                        >
                        </a>
                        Past Recruiters
                      </h2>
                      <p class="black--text text-darken-5">
                        With the continious efforts
                        <br />
                        is made possible by these generous past recruiters:
                      </p>
                      <br />
                      <div
                        class="mx-auto pa-3 v-sheet theme--light transparent"
                        id="home-sponsors"
                        style="max-width: 700px"
                      >
                        <div
                          class="v-responsive mb-12"
                          style="min-height: 500px"
                        >
                          <div class="v-responsive__content">
                            <div class="row row--dense justify-center">
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.qomplx.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="QOMPLX"
                                  rel="noopener"
                                  ><div
                                    aria-label="QOMPLX"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 212px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 26.2346%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/QOMPLX.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 648px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://careers.lmax.com/?utm_source=vuetify&amp;utm_medium=logo-link&amp;utm_campaign=lmax-careers"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="LMAX Exchange"
                                  rel="noopener"
                                  ><div
                                    aria-label="LMAX Exchange"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 148px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 31.8182%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/lmax-exchange.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 220px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://intygrate.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Intygrate"
                                  rel="noopener"
                                  ><div
                                    aria-label="Intygrate"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 148px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 22.293%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/intygrate.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 314px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://vuemastery.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="VueMastery"
                                  rel="noopener"
                                  ><div
                                    aria-label="VueMastery"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 148px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 17.6667%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/vuemastery.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 300px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="http://crossword-solver.io/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Crossword Solver"
                                  rel="noopener"
                                  ><div
                                    aria-label="Crossword Solver"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 148px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 31.5712%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/crossword-solver-logo-light.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 681px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://application.rategenius.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="rateGenius"
                                  rel="noopener"
                                  ><div
                                    aria-label="rateGenius"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 18.8%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/rate-genius.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 500px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.digitalmaas.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="DigitalMaas"
                                  rel="noopener"
                                  ><div
                                    aria-label="DigitalMaas"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 30%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/digital-maas.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 300px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://analytics.quantedsquare.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Quanted Square"
                                  rel="noopener"
                                  ><div
                                    aria-label="Quanted Square"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 31.3333%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/quanted-square.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 300px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.hypeinnovation.com/home"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="HYPE"
                                  rel="noopener"
                                  ><div
                                    aria-label="HYPE"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 30.3483%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/hype-logo-light.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 201px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.cosmicjs.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="COSMIC"
                                  rel="noopener"
                                  ><div
                                    aria-label="COSMIC"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 27.7533%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/cosmic-logo-light.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 681px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://papersowl.com/write-my-essay-please"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="PapersOwl"
                                  rel="noopener"
                                  ><div
                                    aria-label="PapersOwl"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 24.2958%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/papersowl-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 284px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.elfo.net/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Elfo"
                                  rel="noopener"
                                  ><div
                                    aria-label="Elfo"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 18.5668%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/elfo-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 1535px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.dealerdesk.de/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Dealerdesk"
                                  rel="noopener"
                                  ><div
                                    aria-label="Dealerdesk"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 23.2886%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/dealerdesk-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 4397px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://writersperhour.com/buy-essay"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Writers Per Hour"
                                  rel="noopener"
                                  ><div
                                    aria-label="Writers Per Hour"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 37.5%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/writersperhour-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 112px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.ionos.com/partner?utm_source=Vue&amp;utm_medium=paid-social&amp;utm_campaign=ION-USA-VUE-ABP-AWR-AgencyBusiness&amp;utm_term=&amp;utm_content=ION-USA-VUE-ABP-AWR-AgencyBusiness&amp;ac=OM.US.USo54K418913T7073a"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Ionos"
                                  rel="noopener"
                                  ><div
                                    aria-label="Ionos"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 31.25%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/ionos-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 112px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.topratedcasinosites.co.uk/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Top Rated"
                                  rel="noopener"
                                  ><div
                                    aria-label="Top Rated"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 23.1132%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/toprated-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 212px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://aussiecasinohex.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="HEX"
                                  rel="noopener"
                                  ><div
                                    aria-label="HEX"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 27.6923%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/hex-light-sm.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 130px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.sumcumo.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="sumcumo"
                                  rel="noopener"
                                  ><div
                                    aria-label="sumcumo"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 19.6429%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/sum-light-sm.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 112px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.leoboost.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Leo Boost"
                                  rel="noopener"
                                  ><div
                                    aria-label="Leo Boost"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 21.4286%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/docs/images/sponsors/logos/leo-light-sm.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 112px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://zweidenker.de/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Zweidenker"
                                  rel="noopener"
                                  ><div
                                    aria-label="Zweidenker"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 15.3094%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/zweidenker-logo-grey.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 307px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.loomio.org/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Loomio"
                                  rel="noopener"
                                  ><div
                                    aria-label="Loomio"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 25.9128%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/loomio.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 849px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.toolio.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Toolio"
                                  rel="noopener"
                                  ><div
                                    aria-label="Toolio"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 30.2734%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/toolio.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 512px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://volleyballlife.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Volleyballl Life"
                                  rel="noopener"
                                  ><div
                                    aria-label="Volleyballl Life"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 25.9434%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/volleyballlife-logo-light.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 212px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://vuejobs.com/?utm_source=vuejobs&amp;utm_medium=affiliates&amp;utm_campaign=linking"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="VueJobs"
                                  rel="noopener"
                                  ><div
                                    aria-label="VueJobs"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 25.3333%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/affiliates/vuejobs-logo.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 300px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://madewithvuejs.com"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Made with Vue.js"
                                  rel="noopener"
                                  ><div
                                    aria-label="Made with Vue.js"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 37.7389%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/affiliates/madewithvuejs.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 1256px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.cloudflare.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Cloudflare"
                                  rel="noopener"
                                  ><div
                                    aria-label="Cloudflare"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 34.0909%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/sponsors/cloudflare.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 132px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.browserstack.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Browserstack"
                                  rel="noopener"
                                  ><div
                                    aria-label="Browserstack"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 24.1667%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/sponsors/browser-stack.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 600px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://www.crowdin.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Crowdin"
                                  rel="noopener"
                                  ><div
                                    aria-label="Crowdin"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 15.7895%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/sponsors/crowdin.png');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 817px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://vercel.com/?utm_source=vuetify"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Vercel"
                                  rel="noopener"
                                  ><div
                                    aria-label="Vercel"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 22.6148%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/affiliates/vercel-logo-light.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 283px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://ohdear.app/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Oh Dear!"
                                  rel="noopener"
                                  ><div
                                    aria-label="Oh Dear!"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 40.2985%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/sponsors/ohdear-inverted.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 670px"
                                    ></div></div
                                ></a>
                              </div>
                              <div
                                class="d-flex align-center col-md-3 col-auto"
                              >
                                <a
                                  tabindex="0"
                                  href="https://docsearch.algolia.com/"
                                  target="_blank"
                                  class="d-inline-block px-2 py-1 v-card v-card--flat v-card--link v-sheet theme--light rounded transparent"
                                  aria-label="Algolia Docsearch"
                                  rel="noopener"
                                  ><div
                                    aria-label="Algolia Docsearch"
                                    role="img"
                                    class="v-image v-responsive d-inline-block theme--light"
                                    style="max-height: 64px; width: 112px"
                                  >
                                    <div
                                      class="v-responsive__sizer"
                                      style="padding-bottom: 16.3531%"
                                    ></div>
                                    <div
                                      class="v-image__image v-image__image--contain"
                                      style="
                                        background-image: url('https://cdn.vuetifyjs.com/images/backers/docsearch-logo-light.svg');
                                        background-position: center center;
                                      "
                                    ></div>
                                    <div
                                      class="v-responsive__content"
                                      style="width: 691px"
                                    ></div></div
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </v-card>
                </v-flex>
              </v-layout>

              <v-container grid-list-lg text-sm-center>
                <v-layout row wrap>
                  <v-flex xs12 md12>
                    <v-card
                      class="mx-auto transparent"
                      dark
                      min-height="100"
                      flat
                    >
                      <v-card-text class="text-h4 font-weight-light pa-5">
                        IIITA INTERNSHIP PORTAL
                      </v-card-text>
                      <v-card-text class="text-h5 font-weight-light pa-5">
                        <v-btn
                          class="transparent ml-2"
                          elevation="0"
                          v-for="(item, i) in itemsss"
                          :key="i"
                          :href="item.to"
                          item.to
                        >
                          {{ item.title }}
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-container>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>


<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.index {
  background: black;
  background-size: cover;
}
#container {
  width: 300px;
  background-color: red;
  display: flex;
  justify-content: center;
}

#child {
  background-color: green;
  width: 250px;
  height: 150px;
  position: relative;
  top: 75px;
}
.back {
  background-image: url("https://placement.iiita.ac.in/images/iiita/campus3.jpg");

  background-attachment: fixed;
  height: 100%;
  width: 100%;
}
.brand {
  position: fixed;
}

#inspire {
  background: none !important;
}

.semi-transparent {
  opacity: 0.75;
}
.semi-transparent-white {
  background-color: #eeeeee;
  opacity: 0.85;
  color: black;
}
</style>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },

  data: () => ({
    articles: [
      {
        src:
          "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        title: "Mobile first & Responsive",
        text:
          "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
      },
      {
        src:
          "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        title: "Think outside the box",
        text:
          "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
      },
      {
        src:
          "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
        title: "Small changes, big difference",
        text:
          "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
      },
    ],
    features: [
      {
        icon: "mdi-account-group-outline",
        title: "Vibrant Community",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
      },
      {
        icon: "mdi-update",
        title: "Frequent Updates",
        text:
          "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.",
      },
      {
        icon: "mdi-shield-outline",
        title: "Long-term Support",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
      },
    ],
    stats: [
      ["24k", "Github Stars"],
      ["330+", "Releases"],
      ["1m", "Downloads/mo"],
      ["5m", "Total Downloads"],
    ],

    dialog: true,

    clipped: false,
    drawer: true,
    fixed: false,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    itemss: [
      {
        icon: "mdi-apps",
        title: "Home",
        to: "/",
      },
      {
        icon: "mdi-apps",
        title: "Sign Up",
        to: "/Register",
      },
      {
        icon: "mdi-chart-bubble",
        title: "ABOUT US",
        to: "/AboutUs",
      },

      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/Login",
      },
    ],
    itemsss: [
      {
        icon: "mdi-apps",
        title: "Placement Portal",
        to: "https://placement.iiita.ac.in/",
      },
      {
        icon: "mdi-apps",
        title: "IIIT A",
        to: "https://www.iiita.ac.in/",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Past Data",
        to: "https://placement.iiita.ac.in/statistics.php",
      },

      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/Login",
      },
    ],
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1",
    ],

    cycle: true,
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    miniVariant: true,
    right: true,
    rightDrawer: true,
    title: "IIIT INTERNSHIP PORTAL",
  }),
  methods: {
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        let verify_response = await this.$axios.$get(
          `http://localhost:3000/api/verify/${cookie}`
        );
        if (verify_response.success) {
          this.$router.push("/Dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  beforeMount() {
    this.verify();
  },
};
</script>
