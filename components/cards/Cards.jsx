import React from 'react';
import Card from './Card';
import "../journey.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";

const journey = [
  // experoence 
  {
    type: "experience",
    company: "",
    logoUrl: "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-censor-blur-effect-texture-for-face-or-nude-skin-png-image_4872592.png",
    position: "web developer",
    duration: "Jul 2022 - Present",
    description: "Built websites and web apps usisng Next.js , Tailwind CSS, and javascript . Worked on scalable, user-friendly solutions. "
  },
  {
    type: "experience",
    company: "",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcngoRTKnV2O7SD7f-V89EiWw9J99MQEhOA&s",
    position: "Frontend developer",
    duration: "jan 2024 - Present",
    description: "Developed responsive websites with HTML , CSS and Javascript. Ensured seamless user experience"
  },
  {
    type: "experience",
    company: "",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qWUdj_R-mZhUzLc2v-VjmmdfncoDaHmB-A&s",
    position: "UI/UX  developer",
    duration: "Jul 2024 - Present",
    description: "Designs web interfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs"
  },
  {
    type: "experience",
    company: "",
    logoUrl: "https://www.dotsquares.com/img/mean-stack-inner.png",
    position: "Full Stack developer",
    duration: "Aug 2024",
    description: "Developed full-stack solutions usisng react and next.js integrated frontend and little bit backend knowledge"
  },

  // education 
  {
    type: "education",
    instution: "Governer House Initiative ",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kfQXNVic0P4hJKhcq1QqFGxgR0KULJ0_iA&s",
    qualification: "Full Stack Development",
    duration: "Feb 2024 ",
    description: "Currently Learning web development from the governer house AI web3.0 metaverse  "
  },
  {
    type: "education",
    instution: "Khadija Girls College",
    logoUrl: "https://i.ytimg.com/vi/_-JZtdfGdeE/maxresdefault.jpg",
    qualification: "FSC ",
    duration: "Dec 2024 - Present",
    description: "Currently in First Year Computer science in khadija Girls college    "
  },
  {
    type: "education",
    instution: "Design Institute ",
    logoUrl: "https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg",
    qualification: "web developer BootCamp ",
    duration: "Jun 2022 - Present",
    description: "Learned full-stack development concepts focusing ono React, Node.js and APIs.completed hands-on projects to solidfy skills  "
  },
  {
    type: "education",
    instution: "Bussiness School",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-CLlX2iFgOTGiL34ONMa0RGgY_taQFU0iA&s",
    qualification: "Matriculation",
    duration: "June 2023 - Present",
    description: "Completed my Matriculation from Three Star Grammer school in 2023 got 89% in matric  "
  },


  // skills 
  {
    type: "skills",
    name: "HTML",
    icon: <FaHtml5 />,
    durataion: "Learaned in 2023 ",
    description: "Crafted structure web content using HTML effectively for modern websites, ensuring semanting markups and accessibility."
  },
  {
    type: "skills",
    name: "FigMa ",
    icon: <FaFigma />,
    durataion: "Learaned in 2024 ",
    description: "Skilled in designing user interfaces and prototypes with Figma for a seamless user experience. "
  },
  {
    type: "skills",
    name: "CSS",
    icon: <FaCss3Alt />,
    durataion: "Learaned in 2023 ",
    description: "Skilled in styling and designing responsive layouts using CSS for modern web applications"
  },
  {
    type: "skills",
    name: "Javascript",
    icon: <FaJs />,
    durataion: "Learaned in 2024 ",
    description: "Experienced in utilizing JavaScript to add interactivity and dynamic functionality to websites."
  },
  {
    type: "skills",
    name: "React",
    icon: <FaReact />,
    durataion: "Learaned in 2024 ",
    description: "Proficient in building efficient, component-driven user interfaces with React. "
  },
  {
    type: "skills",
    name: "Bootstrap",
    icon: <FaBootstrap />,
    durataion: "Learaned in 2024 ",
    description: "Experienced in using Bootstrap to quickly design responsive, mobile-first web pages."
  },

]

const Cards = () => {
  return (
    <>
      <Tabs className='tabs-styling' defaultValue='experience' >
        <TabsList className="tabslist-styling">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }} >
              {journey.filter((item) => item.type == "experience").map((card, index) => {
                return <Card key={index} {...card} />
              })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}>
              {journey.filter((item) => item.type == "education").map((card, index) => {
                return <Card key={index} {...card} />
              })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}>
              {journey.filter((item) => item.type == "skills").map((card, index) => {
                return <Card key={index} {...card} />
              })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default Cards
