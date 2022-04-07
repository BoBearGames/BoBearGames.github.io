import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/hero/BackgroundAsImageWithCenteredContent.js";
import FeaturedGames from "components/features/VerticalWithAlternateImageAndText.js";
import OtherGames from "components/blogs/ThreeColSimpleWithImage.js";
import AboutUs from "components/testimonials/TwoColumnWithImage.js";
import ContactUs from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter";

export default () => (
  <AnimationRevealPage>
    <Header />
    <FeaturedGames />
    {/* <OtherGames /> */}
    <AboutUs />
    <ContactUs />
    <Footer />
  </AnimationRevealPage>
);
