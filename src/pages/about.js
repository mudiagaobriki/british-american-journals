import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import React from "react";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import FunFactSix from "@/components/FunFacts/FunFactSix";
import AboutCustom from "@/components/AboutSection/AboutCustom";
import FooterSix from "@/components/MainFooter/FooterSix";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      {/*<Style />*/}
      {/*<HeaderOne />*/}
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
      <PageBanner title="About" />
      <DiscoverSection ShowTitle={false} />
        <AboutCustom />
      {/*<TestimonialsSection />*/}
      {/*<FunFacts />*/}
        <FunFactSix />
      {/*<ParallaxSection />*/}
      {/*<AgencySection />*/}
      {/*<TeamSectionTwo />*/}
      {/*<SponsorsSectionTwo />*/}
      {/*<MainFooter />*/}
        <br/>
        <FooterSix />
    </Layout>
  );
};

export default About;
