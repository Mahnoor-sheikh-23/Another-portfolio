import React from 'react';
import "./work.css";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from '../AnimatedText';
import WorkItem from './WorkItem';




// sample data for projects
const data = [
  {
    href: "https://jocular-croquembouche-f006b6.netlify.app/",
    category: "design",
    img: "https://i.pinimg.com/736x/c8/10/2e/c8102eae704ac35a91ddadf60a671f99.jpg",
    title: "Resume "
  },
  {
    href: "https://moni-resume.netlify.app/",
    category: "frontend",
    img: "https://play-lh.googleusercontent.com/D31M2dnTJWWU5qPv-laNdg0-AB6cZr8yNe5pXyhWYf55n1fBj6E20DUrXSNbOyXIxkg",
    title: "Resume Builder"
  },
  {
    href: "https://real-runtime-calculator.netlify.app/",
    category: "frontend",
    img: "https://images.creativefabrica.com/products/previews/2023/10/27/PKLLJ0Mdg/2XMZw3mgqDsi0ZafGASrC3SIy30-desktop.jpg",
    title: "Calculator "
  },
  {
    href: "https://comfy-lollipop-08e6b3.netlify.app/",
    category: "frontend",
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/7_event-planner-websites.jpg",
    title: "Event Planner "
  },
  {
    href: "https://portfolio-website-of-mahnoor.netlify.app/",
    category: "frontend",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/77b5b783911401.5d4b03c198716.png",
    title: "Quantum Portfolio"
  },
  {
    href: "https://realtime-to-do.netlify.app/",
    category: "frontend",
    img: "https://codingartistweb.com/wp-content/uploads/2021/02/To-Do-list-small-01.png",
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
