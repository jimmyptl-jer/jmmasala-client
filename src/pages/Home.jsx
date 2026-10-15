import React from "react";
import Hero from "../components/Hero"

import AboutMe from "../components/AboutMe"
import ContactSection from "./Contact";
import InfoSection from "../components/InfoSection"
import StunningThings from "../components/FeatureCard";
import BestServices from "../components/BestServices";
import ProcessCards from "../components/ProcessCard";
// import LatestBlogPosts from "../components/Blog/LastestBlog"

const Home = () => {

  return (
    <div className="m-5 md:m-0 lg:m-0">
      <Hero />
      <ProcessCards />
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
