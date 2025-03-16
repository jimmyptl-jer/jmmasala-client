import React from "react";
import Hero from "../Components/Hero"

import AboutMe from "../Components/AboutMe"
import ContactSection from "./Contact";
import InfoSection from "../Components/InfoSection"
import StunningThings from "../Components/FeatureCard";
import BestServices from "../Components/BestServices";
// import LatestBlogPosts from "../Components/Blog/LastestBlog"

const Home = () => {

  return (
    <div className="m-5 md:m-0 lg:m-0">
      <Hero />
      <AboutMe />
      <InfoSection />
      <StunningThings />
      <BestServices />
      <ContactSection />
      {/* <LatestBlogPosts /> */}
    </div>

  )
}

export default Home
