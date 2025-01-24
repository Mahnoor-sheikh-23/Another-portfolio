import React from 'react';
import "./work.css";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import AnimatedText from '../AnimatedText';
import WorkItem from './WorkItem';

// sample data for projects
const data = [
  {
    href: "https://jocular-croquembouche-f006b6.netlify.app/",
    category: "design",
    img: "/heroSectionImage/images.jpg",
    title: "Resume "
  },
  {
    href: "https://moni-resume.netlify.app/",
    category: "frontend",
    img: "/heroSectionImage/resume.webp",
    title: "Resume Builder"
  },
  {
    href: "https://shoe-nike-figma-hackathon.netlify.app/",
    category: "frontend",
    img: "/heroSectionImage/nike.png",
    title: "NIke E-commerce WEbsite "
  },
  {
    href: "https://perfume-web-sites.netlify.app/",
    category: "frontend",
    img: "/heroSectionImage/image.png",
    title: "Perfume Wedsite "
  },
  {
    href: "https://portfolio-website-of-mahnoor.netlify.app/",
    category: "frontend",
    img: "/heroSectionImage/portfolio.png",
    title: "Quantum Portfolio"
  },
  {
    href: "https://realtime-to-do.netlify.app/",
    category: "frontend",
    img: "/heroSectionImage/to-do.jpeg",
    title: "To-Do List "
  },
  {
    href: "",
    category: "fullstack",
    img: "https://unblast.com/wp-content/uploads/2021/07/Food-Delivery-App-Template.jpg",
    title: "Food Delivery web app "
  },
]



const Work = () => {
  // extract unique categoy from the data 

  const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));

  // create tab data with all category and dunique categories from data 

  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category }))
  ];

  // state to manage the current selected tab 
  const [tabValue, setTabValue] = useState("all");
  // number of items to show initially 
  const [visibleItems, setVisibleItems] = useState(6);

  // filter work items based on the selected tab
  const filterWork = tabValue === "all"
    ? data.filter((item) => item.category !== "all")
    : data.filter((item) => item.category === tabValue)

  // handle loading more items 
  const loadMoreItems = () => {
    // adjust the number to control how many times are loaded at a time 
    setVisibleItems((prev) => prev + 2)
  }

  return (
    <div className='first-div-of-work' id='WORK'>
      <div className='container mx-auto'>
        <Tabs defaultValue='all' className='tabs-work-coomp'>
          <div className='under-tabs-div'>
            <AnimatedText text="My Latest Work" textStyles="ainmated-div-work" />
            {/* render tab triggers */}
            <TabsList className="tablist-div">
              {tabData.map((item, index) => {
                return <TabsTrigger
                  value={item.category}
                  key={index}
                  className="tab-Listwork"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              })}
            </TabsList>
          </div>
          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="tabscontent-div-in-work-com">
            <div className='tabscontent-div-in-work-'>
              <AnimatePresence>
                {
                  filterWork.slice(0, visibleItems).map((items, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                      <WorkItem {...items} />
                    </motion.div>
                  )
                  )
                }
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className='load-more-button-div'>
                <button onClick={loadMoreItems} className='load-more-button'>Load More</button>
              </div>
            )}
          </TabsContent>

        </Tabs>

      </div>
    </div>
  )
}

export default Work
