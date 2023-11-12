import Image from "next/image";
import Hero from "./components/ui/Hero";
import Banner from "./components/ui/Banner";
import BoardMembers from "./components/ui/BoardMembers";
import Donate from "./components/ui/Donate";
import LatestNews from "./components/ui/LatestNews";
import ImportantFacts from "./components/ui/ImportantFacts";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Banner
        onBtnClick={() => {}}
        image="/images/two-students.png"
        buttonText="Join now"
        title="about"
        paragraph="At EEDF, we are dedicated to empowering students and unlocking their
            potential through education. We provide comprehensive support,
            including financial aid, and academic support and mentorship, to
            ensure their academic success and personal growth. With our deep
            passion & commitment to inspire growth, we strive to remove barriers
            and create opportunities for deserving students, enabling them to
            achieve their goals and make a positive impact in their communities."
      />

      <BoardMembers />
      <Banner
        onBtnClick={() => {}}
        image="/images/student-3.png"
        buttonText="Join now"
        title="Our mission"
        paragraph="We're on a mission to inspire growth and empower students through financial aid and comprehensive non-financial support."
      />
      <Donate />
      <ImportantFacts />
      <LatestNews />
    </main>
  );
}
