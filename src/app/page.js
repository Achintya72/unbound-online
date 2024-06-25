"use client";
import { useState } from "react";
import Tab from "./tabs/tab";
import CollegeFeatures from "./features.colleges";
import PeopleFeatures from "./features.people";
import JobFeatures from "./features.jobs";
import Image from "./myImage";
import { motion } from "framer-motion";
import Timer from "./timer";

const colors = [
  "bg-purple-400",
  "bg-green-400",
  "bg-blue-400"
];

const positions = [
  "left-[8px]",
  "left-[50%] translate-x-[-50%]",
  "right-[8px]"
]

const features = [
  <CollegeFeatures key={0}/>,
  <PeopleFeatures key={1}/>,
  <JobFeatures key={2}/>
];

export default function Home() {
  const [feature, changeFeature] = useState(0);

  return (
    <main className="bg-white-100 w-full ">
      <section id="landing" className="relative px-[20px] flex items-center flex-col z-10 gap-[12px] w-full max-w-[1440px] mx-auto">
        <h1 className=" mt-[200px] font-serif text-7xl" style={{ lineHeight: "100%" }}>Unbound</h1>
        <p className="font-sans text-white-800 max-w-[500px] text-center">An online platform that allows students to connect with peers, colleges, and companies to find inspiration, internships, and information.</p>
        <a className="px-[24px] py-[12px] rounded-[8px] text-white-100 text-sans bg-white-1000 font-medium" style={{ lineHeight: "120%" }}>Learn More</a>
      </section>
      <section id="mockups" className=" relative flex max-w-[1440px] items-start mx-auto z-10 mt-[40px] justify-center gap-[20px] overflow-x-hidden">
        <Image alt="Company Profile Page Mockup" src="/CompanyMockup.png" className="flex-1 min-w-[200px] h-auto" />
        <Image alt="User Profile Page Mockup" src="/UserMockup.png" className="flex-1 mt-[40px] min-w-[200px] h-auto" />
        <Image alt="College Profile Page Mockup" src="/CollegeMockup.png" className="flex-1 min-w-[200px] h-auto" />
      </section>
      <section id="features" className="relative mt-[100px] bg-white-1000">
        <div className="absolute bg-white-1000 w-full bottom-full z-0" style={{ height: "min(33vw, 500px)" }} />
        <div className="max-w-[1440px] flex flex-col items-center mx-auto px-[20px] pb-[40px]">
          <h1 className="font-serif text-6xl text-center text-white-100 mb-[40px]">Features</h1>
          <motion.div className="flex relative flex-col sm:flex-row rounded-[12px] overflow-hidden max-w-[500px] w-full p-[8px] bg-white-900 mb-[20px]">
            <Tab
              activeImg={"/libraryFilled.png"}
              changeTab={changeFeature}
              currentIndex={feature}
              inactiveImg={"/libraryOutline.png"}
              index={0}
              name={"Colleges"}
            >{feature == 0 && 
              <motion.div key={0} layoutId="indicator" className={`absolute ${colors[feature]} z-0 inset-0 rounded-[8px]`} />
            }</Tab>
            <Tab
              activeImg={"/peopleFilled.png"}
              changeTab={changeFeature}
              currentIndex={feature}
              inactiveImg={"/peopleOutline.png"}
              index={1}
              name={"People"}
            >
              {feature == 1 && 
              <motion.div key={1} layoutId="indicator" className={`absolute ${colors[feature]} z-0 inset-0 rounded-[8px]`} />
            }
            </Tab>
            <Tab
              activeImg={"/briefcaseFilled.png"}
              changeTab={changeFeature}
              currentIndex={feature}
              inactiveImg={"/briefcaseOutline.png"}
              index={2}
              name={"Internships"}
            >
              {feature == 2 && 
              <motion.div key={2} layoutId="indicator" className={`absolute ${colors[feature]} z-0 inset-0 rounded-[8px]`} />
            }
            </Tab>
          </motion.div>
          {features[feature]}
        </div>
      </section>
      <section id="countdown" className="py-[100px] gap-[20px] flex flex-col items-center justify-center max-w-[1440px] mx-auto px-[20px]">
            <h2 className="text-5xl font-serif">Coming Soon</h2>
            <p className="font-sans text-white-900">Unbound will soon be available to you on Apple App Store and Google Play Store.</p>
            <Timer />
      </section>
    </main>
  );
}
