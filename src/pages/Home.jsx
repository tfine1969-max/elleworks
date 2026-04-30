import React from "react";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import PillarsSection from "../components/home/PillarsSection";
import WhoItsForSection from "../components/home/WhoItsForSection";
import ProgrammePreview from "../components/home/ProgrammePreview";
import ProcessSection from "../components/home/ProcessSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <WhoItsForSection />
      <ProgrammePreview />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}