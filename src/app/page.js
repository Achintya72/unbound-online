"use client";
import { useState } from "react";
import Tab from "./tabs/tab";
import CollegeFeatures from "./features.colleges";
import PeopleFeatures from "./features.people";
import JobFeatures from "./features.jobs";

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
  <CollegeFeatures />,
  <PeopleFeatures />,
  <JobFeatures />
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
        <img alt="Company Profile Page Mockup" src="/CompanyMockup.png" className="flex-1 min-w-[200px] h-auto" />
        <img alt="User Profile Page Mockup" src="/UserMockup.png" className="flex-1 mt-[40px] min-w-[200px] h-auto" />
        <img alt="College Profile Page Mockup" src="/CollegeMockup.png" className="flex-1 min-w-[200px] h-auto" />
      </section>
      <section id="features" className="relative mt-[100px] bg-white-1000">
        <div className="absolute bg-white-1000 w-full bottom-full z-0" style={{ height: "min(33vw, 500px)" }} />
        <div className="max-w-[1440px] flex flex-col items-center mx-auto px-[20px]">
          <h1 className="font-serif text-6xl text-center text-white-100 mb-[40px]">Features</h1>
          <div className="flex relative rounded-[12px] overflow-hidden max-w-[500px] w-full p-[8px] bg-white-900">
            <div className={`*:transition-all transition-all duration-300 absolute ${colors[feature]} ${positions[feature]} w-[33%] z-0 rounded-[8px] top-[8px] bottom-[8px]`} />
            <Tab
              activeImg={"/libraryFilled.png"}
              changeTab={changeFeature}
              currentIndex={feature}
              inactiveImg={"/libraryOutline.png"}
              index={0}
              name={"Colleges"}
            />
            <Tab
              activeImg={"/peopleFilled.png"}
              changeTab={changeFeature}
              currentIndex={feature}
              inactiveImg={"/peopleOutline.png"}
              index={1}
              name={"People"}
            />
            <Tab
              activeImg={"/briefcaseFilled.png"}
              changeTab={changeFeature}
              currentIndex={feature}
              inactiveImg={"/briefcaseOutline.png"}
              index={2}
              name={"Internships"}
            />
          </div>
          {features[feature]}
        </div>

      </section>
    </main>
  );
}
