import React from "react";
import { animate, motion } from "framer-motion";

const RotatingShape = ({content , direction , duration}) => {
    // define the rotation animation
    const rotateAnimation = {
        animate : {
            // rotate 360 based on the dorection 
            rotate : direction === "right" ? 360 : direction === "left" ? -360 : 0 ,
            transition : {
                duration : duration, //duration of one full rottaion 
                 ease : "linear",//smooth rotation 
                 repeat : Infinity// repeact infinitly  
            }
        }

    }
  return (
    <motion.div variants={rotateAnimation} animate="animate">
     {content}
    </motion.div>
  )
}

export default RotatingShape