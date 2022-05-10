import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomText from "./CustomText";
import CustomHeader from "./CustomHeader";
export default function Home(props) {

    const MotionBox = motion(Box);

    const BoxAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {duration: 0.2, staggerChildren: 0.2}
        }
    }

    return (
        <MotionBox 
            /*Initial styling*/
            as='div' 
            maxW="40%" 
            minW="350px" 
            mx='auto'
            
            /*Animations */
            variants={BoxAnimation}
            initial='hidden'
            animate='show'
        >
            <CustomHeader text="Hi! My Name is Ronell John F. Roxas"/>
            <CustomText text="I am a Computer Science student at De La Salle University Manila, Philippines. Welcome to my portfolio website. This website contains my coding experiences, internships, and academic/personal project links."/>
            <br/>
            <CustomHeader text="This is my 2nd portfolio website"/>
            <CustomText text="because I wanted to try out a different style and create a more optimized website. I also wanted to explore Three JS."/>
        </MotionBox>
    )
}