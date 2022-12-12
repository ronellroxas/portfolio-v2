import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomText from "./CustomText";
import CustomHeader from "./CustomHeader";
import Slider from "react-slick";

export default function Home(props) {

    const MotionBox = motion(Box);
    const sliderSettings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const BoxAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: { duration: 0.2, staggerChildren: 0.2 }
        }
    }

    const boxSettings = {
        /*Initial styling*/
        as: 'div',
        maxW: "90%",
        mx: 'auto',

        /*Animations */
        variants: { BoxAnimation },
        initial: 'hidden',
        animate: 'show'
    }

    return (
        <MotionBox 
            as="div"
            maxW="60%"
        >
            <Slider {...sliderSettings}>
                <MotionBox {...boxSettings}>
                    <CustomHeader text="Hi! My Name is Ronell John F. Roxas!" />
                    <CustomText text="I am a Computer Science student at De La Salle University Manila, Philippines. Welcome to my portfolio website. This website contains my coding experiences, internships, and academic/personal project links." />
                </MotionBox>
                <MotionBox {...boxSettings}>
                    <CustomHeader text="I like Web Development!" />
                    <CustomText text="I mainly take on the role of Full Stack Developer in academic projects. For my internships, I experienced a Backend Developer and Full Stack Developer role. I think Web Development is fun since it's very easy to get started and build ideas, but also has a lot of complexity to explore especially in industry products." />
                </MotionBox>
                <MotionBox {...boxSettings}>
                    <CustomHeader text="I like AI!" />
                    <CustomText text="My thesis involved NLP using Machine Learning techniques like TF-IDF and MLP Regressors; and Deep Learning techniques like Word Embeddings and CNN. I enjoyed the challenge our thesis gave us which allowed our team to learn a lot of things!" />
                </MotionBox>
                <MotionBox {...boxSettings}>
                    <CustomHeader text="I like Data Science!" />
                    <CustomText text="We had an introductory class to Data Science which I enjoyed! I like how you can observe patterns and relationship between different datasets and visualize them in a creative manner. I also want to learn more about using AI models in Data Science by analyzing the weights of the trained model instead of just creating a prediction model." />
                </MotionBox>
                <MotionBox {...boxSettings}>
                    <CustomHeader text="I like Programming!" />
                    <CustomText text="Programming is such a broad concept wherein there are a lot of fun things to explore from my perspective. These 3 are mostly the ones that stuck with me the most because of how much fun I had, how much things I learned, and how excited I feel to learn more about them. However, programming in general is something that I find fun, and would love to explore other fields in the future as well!" />
                </MotionBox>
            </Slider>
        </MotionBox>
    )
}