import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionFour from "@/components/SponsorsSection/SponsorsSectionFour";
import React from "react";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import AboutPublicationProcess from "@/components/AboutSection/AboutPublicationProcess";
import JournalsTable from "@/components/AboutSection/JournalsTable";
import FooterSix from "@/components/MainFooter/FooterSix";

const Journals = () => {
  return (
    <Layout pageTitle="Journals Page">
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
        <PageBanner title="Journals" />
        <br/>
        <AboutPublicationProcess />
        <JournalsTable />
        <br/>
      {/*<SponsorsSectionFour />*/}
      {/*<MainFooter />*/}
        <FooterSix />
    </Layout>
  );
};

export default Journals;
