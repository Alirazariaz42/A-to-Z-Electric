"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    OurMission: [
      {
        id: 1,
        title:
          "At A to Z Electric, we specialize in innovative and reliable electrical solutions. As a trusted name in the industry, we provide expert residential, industrial, and commercial services with a focus on safety, efficiency, and sustainability. Our mission is to exceed client expectations and ensure the success of every project.",
        image: "/public/png/about1.png",
      },
    ],
    OurVision: [
      {
        id: 1,
        title:
          "Our vision is to set the standard for exceptional electrical solutions through seamless service and unmatched customer satisfaction.",
        image: "/public/png/about1.png",
      },
    ],
    OurPriority: [
      {
        id: 1,
        title:
          "At A to Z Electric, we are your premier destination for comprehensive electrical solutions. As a trusted name in the industry, we specialize in providing expert residential, industrial, and commercial electrical services.",
        image: "/public/png/about1.png",
      },
    ],
  });

  return (
    <div className="lg:w-[85%] w-full mt-6">
      <Tab.Group>
        <Tab.List className="md:flex grid gap-3 space-x-1 rounded-xl bg-blacks p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-[18px] font-medium",
                  "  focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-customGreen-para shadow"
                    : "text-white hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-black p-3 border-b-2 border-customGreen-para mt-1",
                " ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-6  ">
                    <h3 className="text-[20px] font-normal  text-white">
                      {post.title}
                    </h3>
                    <img src={post.img} alt="" />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
