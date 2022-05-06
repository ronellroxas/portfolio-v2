import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '../styles/header.module.css';

export default function CustomHeader(props) {

    const MotionText = motion(Text);

    const TextAnimation = {
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {duration: 1}
        }
    }

    return (
        <MotionText 
            className={styles.heading}
            align='left' 
            lineHeight={1.5}
            mb={1.5}
            bgGradient='linear(to-r, teal.500, purple.500, pink.500)'
            bgClip='text'
            /*Animations */
            variants={TextAnimation}
        >
            {props.text}
        </MotionText>
    )
}