import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomText from "./CustomText";
import CustomHeader from "./CustomHeader";

export default function Experience(props) {

    const MotionBox = motion(Box);

    const BoxAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {duration: 1, staggerChildren: 0.1}
        }
    }
    return (
        <MotionBox 
            /*Initial styling*/
            as='div' 
            maxW="60%" 
            mx='auto'
            
            /*Animations */
            variants={BoxAnimation}
            initial='hidden'
            animate='show'
        >
            <CustomText text="For programming Languages/systems/stacks–"/>
            <br/>
            <CustomHeader text='needs to restudy/practice'/>
            <br/>
            <SimpleGrid
                columns={3}
                spacing={5}
            >
                <CustomText text="C"/>
                <CustomText text="C#"/>
                <CustomText text="C++"/>
                <CustomText text="Docker"/>
                <CustomText text="Firebase"/>
                <CustomText text="DataScience"/>
            </SimpleGrid>
            <br/>
            <CustomHeader text='intermediate'/>
            <br/>
            <SimpleGrid
                columns={3}
                spacing={1}
            >
                <CustomText text="Java"/>
                <CustomText text="MySQL"/>
                <CustomText text="PostgreSQL"/>
                <CustomText text="MongoDB"/>
                <CustomText text="DevOps"/>
            </SimpleGrid>
            <br/>
            <CustomHeader text='well-versed'/>
            <br/>
            <SimpleGrid
                columns={3}
                spacing={5}
            >
                <CustomText text="Web Development"/>
                <CustomText text="ReactJS"/>
                <CustomText text="NextJS"/>
                <CustomText text="Flask"/>
                <CustomText text="Python"/>
                <CustomText text="Git"/>
                <CustomText text="Javascript"/>
            </SimpleGrid>
            <br/>
            <CustomHeader text='currently Exploring'/>
            <br/>
            <SimpleGrid
                columns={3}
                spacing={5}
            >
                <CustomText text="FastAPI"/>
                <CustomText text="Flutter"/>
            </SimpleGrid>
        </MotionBox>
    )
}