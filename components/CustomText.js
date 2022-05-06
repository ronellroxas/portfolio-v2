import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function CustomText(props) {

    const MotionText = motion(Text);

    const TextAnimation = {
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {duration: 1.5, type: 'spring'}
        }
    }

    return (
        <MotionText
            align='justify' 
            lineHeight={1.5}

            /*Animations */
            variants={TextAnimation}
        >
            {props.text}
        </MotionText>
    )
}