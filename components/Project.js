import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ModalGroup from "./ModalGroup";
import projects from "../static/projects";

export default function Project(props) {

    const MotionBox = motion(Box);

    const BoxAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {duration: 0.2, staggerChildren: 0.5}
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
            
            <SimpleGrid
                columns={2}
                spacing={10}

            >

                {projects.map((project, i) => {
                    return <ModalGroup project={project} key={i}/>
                })}
            </SimpleGrid>
        </MotionBox>
    )
}