import { Box, Icon, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomText from "./CustomText";
import CustomHeader from "./CustomHeader";
import {FaLinkedin, FaGithubSquare, FaGooglePlusSquare} from 'react-icons/fa'

export default function Other(props) {
    const toast = useToast();
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

    function emailClick() {
        navigator.clipboard.writeText('ronell_roxas@dlsu.edu.ph');
        toast({
            position: 'bottom',
            render: () => (
                <Box p={5} bg='gray.900' borderRadius={10}>
                  <CustomHeader text='Email copied to Clipboard!'/>
                </Box>
            )
          })
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
            <CustomHeader text="In general"/>
            <CustomText text="Programming is also my hobby. I like learning about different tech stacks and trying it out. I also like other fields such as DataScience and Machine Learning."/>
            <br/>
            <CustomHeader text="To reach out"/>
            <CustomText text="you can find me on the links below:"/>
            <Icon as={FaLinkedin} mt={5} mr={5} boxSize='10' onClick={() => window.open('https://www.linkedin.com/in/ronell-john-roxas-9843b9154/', '_blank')} borderRadius={5} bgGradient='linear(to-r, teal.500, purple.500, pink.500)'/>
            <Icon as={FaGithubSquare} mt={5} mr={5} boxSize='10' onClick={() => window.open('https://github.com/ronellroxas', '_blank')} borderRadius={5} bgGradient='linear(to-r, teal.500, purple.500, pink.500)'/>
            <Icon as={FaGooglePlusSquare} mt={5} mr={5} boxSize='10' onClick={emailClick} borderRadius={5} bgGradient='linear(to-r, teal.500, purple.500, pink.500)'/>
        </MotionBox>
    )
}