"use client"
import React, { useEffect } from "react";
import ImageSwipper from "../components/imageSwipper/ImageSwipper";
import TextSlidingComponent from "../components/textSlidingComponent/TextSlidingComponent";
import AnimationAndImages from "../components/animationAndImagesComponent/AnimationAndImages";
import affiliationAnimation from "../../../public/symmetryAnimations/affiliation-animation-Rive-2.riv";

import symmetryImg from "../../../public/symmetry-swipper-img.webp";
import irisLogo from "../../../public/iris-small-logo.webp";
import influenseLogo from "../../../public/influense-small-logo.webp";
import mobitsLogo from "../../../public/mobits-logo.webp"
import symmetryTradeLogo from "../../../public/symmetry-trade-logo.webp"
import appabilitiesLogo from "../../../public/appabilities-logo.webp"
import coralLogo from '../../../public/corrall-logo.webp'
import coralPerformLogo from '../../../public/corral-perform-logo.webp'
import survitLogo from '../../../public/survit-logo.webp'

/**********   Client Swipper Logo's   ***********/

import alwaysLogo from "../../../public/client-swipper-image-logos/always-logo.webp"
import anneFrenchLogo from "../../../public/client-swipper-image-logos/anne-french-logo.webp"
import cLogo from "../../../public/client-swipper-image-logos/c-logo.webp"
import colgatePalmoliveLogo from "../../../public/client-swipper-image-logos/colgate-palmolive-logo.webp"
import cpLogo from "../../../public/client-swipper-image-logos/cp-logo.webp"
import embLogo from "../../../public/client-swipper-image-logos/ebm-logo.webp"
import eighteenLogo from "../../../public/client-swipper-image-logos/eighteen-logo.webp"
import faysalBankLogo from "../../../public/client-swipper-image-logos/faysalbank-logo.webp"
import ghulamFurgueLogo from "../../../public/client-swipper-image-logos/ghulam-faruque-logo.webp"
import gilleteLogo from "../../../public/client-swipper-image-logos/gillete-logo.webp"
import glucoLogo from "../../../public/client-swipper-image-logos/gluco-logo.webp"
import greavesLogo from "../../../public/client-swipper-image-logos/greaves-logo.webp"
import hblLogo from "../../../public/client-swipper-image-logos/hbl-logo.webp"
import headAndShouldersLogo from "../../../public/client-swipper-image-logos/head-and-shoulders-logo.webp"
import helmansLogo from "../../../public/client-swipper-image-logos/helmans-logo.webp"
import iMLogo from "../../../public/client-swipper-image-logos/i-m-logo.webp"
import jazz2Logo from "../../../public/client-swipper-image-logos/jazz-2-logo.webp"
import jazzBusinessLogo from "../../../public/client-swipper-image-logos/jazz-business-logo.webp"
import jazzCashLogo from "../../../public/client-swipper-image-logos/jazz-cash-logo.webp"
import jazzLogo from "../../../public/client-swipper-image-logos/jazz-logo.webp"
import jazzXlr8Logo from "../../../public/client-swipper-image-logos/jazz-xlr8-logo.webp"
import jsBankLogo from "../../../public/client-swipper-image-logos/js-bank-logo.webp"
import khaadiLogo from "../../../public/client-swipper-image-logos/khaadi-logo.webp"
import konnectLogo from "../../../public/client-swipper-image-logos/konnect-hbl-logo.webp"
import martinDowLogo from "../../../public/client-swipper-image-logos/martin-dow-logo.webp"
import maxLogo from "../../../public/client-swipper-image-logos/max-logo.webp"
import mcbLogo from "../../../public/client-swipper-image-logos/mcb-logo.webp"
import msmLogo from "../../../public/client-swipper-image-logos/msm-logo.webp"
import mycashLogo from "../../../public/client-swipper-image-logos/mycash-logo.webp"
import pAndGLogo from "../../../public/client-swipper-image-logos/p-and-g-logo.webp"
import pampersLogo from "../../../public/client-swipper-image-logos/pampers-logo.webp"
import panteneLogo from "../../../public/client-swipper-image-logos/pantene-logo.webp"
import peekFreansLogo from "../../../public/client-swipper-image-logos/peek-freans-logo.webp"
import philipMorrisLogo from "../../../public/client-swipper-image-logos/philip-morris-logo.webp"
import protextLogo from "../../../public/client-swipper-image-logos/protext-logo.webp"
import psxLogo from "../../../public/client-swipper-image-logos/psx-logo.webp"
import rafhaanLogo from "../../../public/client-swipper-image-logos/rafhaan-logo.webp"
import searleLogo from "../../../public/client-swipper-image-logos/searle-logo.webp"
import sooperLogo from "../../../public/client-swipper-image-logos/sooper-logo.webp"
import unicolLogo from "../../../public/client-swipper-image-logos/unicol-logo.webp"
import unileverLogo from "../../../public/client-swipper-image-logos/unilever-logo.webp"
import zemBuildersLogo from "../../../public/client-swipper-image-logos/zem-builders-logo.webp"
import zenSoftLogo from "../../../public/client-swipper-image-logos/zensoft-logo.webp"

/**********   Affiliation Swipper Logo's   ***********/

import googleLogo from "../../../public/google-swipper-logo.webp"
import microsoftLogo from "../../../public/microsoft-swipper-logo.webp"
import alibabaLogo from "../../../public/alibaba-swipper-logo.webp"
import isoLogo from "../../../public/iso-swipper-logo.webp"


const BrandsProducts = () => {

  useEffect(() => {
    const body = document.body

    body.style.overflow = "hidden"
  }, [])

  const brandsTitle = "brands & products";
  const brandsHeading = "specialists in your need";
  const brandsText =
    "we weave technology-driven ideas into existence across a spectrum of specialized products and services within our four divisions.";
  const hasKnowMore = "explore our world --";
  const brandsProductsLink = "brands-products"

  const swipperContent = [
    {
      id: 0,
      img: irisLogo,
    },
    {
      id: 1,
      img: influenseLogo,
    },
    {
      id: 2,
      img: symmetryImg,
    },
    {
      id: 3,
      img: appabilitiesLogo,
    },
    {
      id: 4,
      img: coralLogo,
    },
    {
      id: 5,
      img: symmetryTradeLogo,
    },
    {
      id: 6,
      img: coralPerformLogo,
    },
    {
      id: 7,
      img: mobitsLogo,
    },
    {
      id: 8,
      img: survitLogo,
    },
    {
      id: 9,
      img: symmetryImg,
    },
  ];

  const clientSwipperContent = [
    {
      id: 0,
      img: alwaysLogo,
    },
    {
      id: 1,
      img: anneFrenchLogo,
    },
    {
      id: 2,
      img: cLogo,
    },
    {
      id: 3,
      img: colgatePalmoliveLogo,
    },
    {
      id: 4,
      img: cpLogo,
    },
    {
      id: 5,
      img: embLogo,
    },
    {
      id: 6,
      img: eighteenLogo,
    },
    {
      id: 7,
      img: faysalBankLogo,
    },
    {
      id: 8,
      img: ghulamFurgueLogo,
    },
    {
      id: 9,
      img: gilleteLogo,
    },
    {
      id: 10,
      img: glucoLogo,
    },
    {
      id: 11,
      img: greavesLogo,
    },
    {
      id: 12,
      img: hblLogo,
    },
    {
      id: 13,
      img: headAndShouldersLogo,
    },
    {
      id: 14,
      img: helmansLogo,
    },
    {
      id: 15,
      img: iMLogo,
    },
    {
      id: 16,
      img: jazz2Logo,
    },
    {
      id: 17,
      img: jazzBusinessLogo,
    },
    {
      id: 18,
      img: jazzCashLogo,
    },
    {
      id: 19,
      img: jazzLogo,
    },
    {
      id: 20,
      img: jazzXlr8Logo,
    },
    {
      id: 21,
      img: jsBankLogo,
    },
    {
      id: 22,
      img: khaadiLogo,
    },
    {
      id: 23,
      img: konnectLogo,
    },
    {
      id: 24,
      img: martinDowLogo,
    },
    {
      id: 25,
      img: maxLogo,
    },
    {
      id: 26,
      img: mcbLogo,
    },
    {
      id: 27,
      img: msmLogo,
    },
    {
      id: 28,
      img: mycashLogo,
    },
    {
      id: 29,
      img: pAndGLogo,
    },
    {
      id: 30,
      img: pampersLogo,
    },
    {
      id: 31,
      img: panteneLogo,
    },
    {
      id: 32,
      img: peekFreansLogo,
    },
    {
      id: 33,
      img: philipMorrisLogo,
    },
    {
      id: 34,
      img: protextLogo,
    },
    {
      id: 35,
      img: psxLogo,
    },
    {
      id: 36,
      img: rafhaanLogo,
    },
    {
      id: 37,
      img: searleLogo,
    },
    {
      id: 38,
      img: sooperLogo,
    },
    {
      id: 39,
      img: unicolLogo,
    },
    {
      id: 40,
      img: unileverLogo,
    },
    {
      id: 41,
      img: zemBuildersLogo,
    },
    {
      id: 42,
      img: zenSoftLogo,
    },
  ];

  const affiliationSwipperContent = [
    {
      id: 0,
      img: googleLogo,
    },
    {
      id: 1,
      img: microsoftLogo,
    },
    {
      id: 2,
      img: alibabaLogo,
    },
    {
      id: 3,
      img: isoLogo,
    },
  ];
  

  const h3Size = "6xl";
  //   const slidesPerView = "5";
  const swipperGap = "60";


  const clientTitle = "clients";
  const clientText =
    "for organizations on the journey towards innovation, growth and digital-first thinking, we assist in building and deploying the right solutions, integrated to business needs and customized for business success.";
  const knowMore = "see it for yourself --";
  const clientLink = "clients"
  const clientMarque = true
  const paddingBottom = "20"
  const componentMarginTop = "mt-10"

  /* aas (Animation and Swipper) */

  const aasH3 = "affiliation & partnerships";
  const aasH2 = "collaborating for <br /> growth";
  const aasP =
    "through our network, we are introducing you to a world that keeps pace with technology and change, enables simplicity from complexity and shape the future. ";
  const aasKnowmore = "know more --";
  const affiliationLink = "google"


  return (
    <>
      <div id="brandsHomeScrollRef">
        <ImageSwipper
          brandsTitle={brandsTitle}
          brandsHeading={brandsHeading}
          brandsText={brandsText}
          hasKnowMore={hasKnowMore}
          swipperContent={swipperContent}
          h3Size={h3Size}
          slidesPerView={5}
          irisLogo={irisLogo}
          swipperGap={swipperGap}
          getLink={brandsProductsLink}
        />
      </div>
      <div id="clientsHomeScrollRef">
        <TextSlidingComponent
          clientTitle={clientTitle}
          clientText={clientText}
          knowMore={knowMore}
          getLink={clientLink}
          isBorder={true}
          isImageSwipper={true}
          slidesPerView={9}
          swipperGap={30}
          swipperContent={clientSwipperContent}
          clientMarque={clientMarque}
          paddingBottom={paddingBottom}
          componentMarginTop={componentMarginTop}
        />
      </div>
      <div id="affiliationsHomeScrollRef">
        <AnimationAndImages
          aasH3={aasH3}
          aasH2={aasH2}
          aasP={aasP}
          aasKnowmore={aasKnowmore}
          getLink={affiliationLink}
          swipperContent={affiliationSwipperContent}
          slidesPerView={4}
          swipperGap={40}
          navigation={false}
          animation={affiliationAnimation}
          knowMoreLink={"google"}
        />
      </div>
    </>
  );
};

export default BrandsProducts;
