export const metadata = {
  title: "Adam Doyle Coaching",
  description: "Fitness coaching based in Co. Wexford Ireland",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  );
}
