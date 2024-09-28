import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSection from "@/components/CallToSection/CallToSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PricingOne from "@/components/PricingSection/PricingOne";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import FooterSix from "@/components/MainFooter/FooterSix";
import AboutFee from "@/components/AboutSection/AboutFee";

const PublicationFee = () => {
  return (
    <Layout pageTitle="Pricing Page">
        <Style
            font="Kumbh Sans, sans-serif"
            bFont="Kumbh Sans, sans-serif"
            black="#1a3546"
            text="#6b7881"
            base="#0a73ff"
            baseRgb="65, 185, 116"
            scrollToTopColor="#fff"
        />
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Publication Fee" />
        <br/>
        <AboutFee />
      {/*<PricingOne />*/}
      {/*<CallToSection />*/}
        <br/>
      <FooterSix />
    </Layout>
  );
};

export default PublicationFee;
