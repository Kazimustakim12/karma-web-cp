import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useRef, useState } from "react";

const data = [
  {
    label: "HTML",
    value: "html",
    imgSrc: "https://via.placeholder.com/686x311",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "React",
    value: "react",
    imgSrc: "https://via.placeholder.com/686x312",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Vue",
    value: "vue",
    imgSrc: "https://via.placeholder.com/686x313",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Angular",
    value: "angular",
    imgSrc: "https://via.placeholder.com/686x314",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Svelte",
    value: "svelte",
    imgSrc: "https://via.placeholder.com/686x315",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

type CustomTab = {
  label: string;
  value: string;
  imgSrc: string;
  desc: string;
};

type CustomTabsProps = {
  tabListArray?: CustomTab[];
  activeTabName: string;
};

export function CustomTabs({
  tabListArray = data,
  activeTabName,
}: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState(activeTabName);
  const tabRef = useRef(null);
  return (
    <Tabs value={activeTab} ref={tabRef}>
      <TabsHeader
        className="bg-transparent p-0 text-black gap-3 mb-10 tab-header sm:flex-row sm:px-4 px-3 flex-col "
        indicatorProps={{
          className:
            "bg-text-black rounded-full text-black border-b-2 border-gray-900 shadow-none ",
        }}
      >
        {tabListArray.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-primary-500 border  border-black rounded-full text-sm font-bold font-['Inter'] uppercase tracking-[2.83px] h-auto"
                : "text-black   border  border-black rounded-full text-sm font-bold font-['Inter'] uppercase tracking-[2.83px] h-auto"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {tabListArray.map(({ value, desc, imgSrc }) => (
          <TabPanel key={value} value={value} className="text-center">
            <img
              loading="lazy"
              className="max-w-[686px] object-cover test w-full h-[312px] mb-10"
              src={imgSrc}
              alt="tabImg"
            />
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
