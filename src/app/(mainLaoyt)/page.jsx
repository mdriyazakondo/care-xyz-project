import React from "react";
import Hero from "./_components/HomePage/Hero/Hero";
import Services from "./_components/HomePage/OurService/OurService";
import About from "./_components/HomePage/About/About";
import Doctors from "./_components/HomePage/Doctors/Doctors";
import Tips from "./_components/HomePage/Tips/Tips";
import Experience from "./_components/HomePage/Experience/Experience";
import FAQ from "./_components/HomePage/FAQ/FAQ";
import Testimonials from "./_components/HomePage/Testimonials/Testimonials";
import ServiceCenter from "./_components/HomePage/ServiceCenter/ServiceCenter";
import Stats from "./_components/HomePage/Stats/Stats";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Experience />
      <Testimonials />
      <Tips />
      <Stats />
      {/* <FAQ /> */}
      {/* <ServiceCenter /> */}
    </main>
  );
};

export default HomePage;
