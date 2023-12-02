export const metadata = {
  title: "Adam Doyle Coaching",
  description: "Fitness coaching based in Co. Wexford Ireland",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      {/* <EmailTemplate firstName={"Adam"} /> */}
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  );
}
