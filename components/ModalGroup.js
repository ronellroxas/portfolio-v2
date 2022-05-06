import React from 'react';
import CustomHeader from './CustomHeader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/header.module.css';
import {FaGithubSquare, FaLink} from 'react-icons/fa'

import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
    Icon
  } from '@chakra-ui/react'

export default function ModalGroup({project}) {
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()


  const MotionText = motion(Text);
  const MotionBox = motion(Box);

  const BoxAnimation = {
    hidden: {
      scale: 1
    },
    show: {
      scale: hover ? 1.2 : 1,
      
    }
  }

  const TextAnimation = {
    hidden: {
        opacity: hover ? 1: 0,
        x: hover ? 0: -10
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {duration: 2, type: 'spring'}
    }
  }

  const getLink = () => {
    if (project.link) return <Icon mr={5} mt={5} as={FaLink} boxSize='10' onClick={() => window.open(project.link, '_blank')} borderRadius={5} bgGradient='linear(to-r, teal.500, purple.500, pink.500)'/>
  }

  const getGithub = () => {
    if (project.github) return <Icon as={FaGithubSquare} boxSize='10' onClick={() => window.open(project.github, '_blank')} borderRadius={5} bgGradient='linear(to-r, teal.500, purple.500, pink.500)'/>
  }

  return (
    <>
      <MotionBox onClick={onOpen} as='button'
        variants={BoxAnimation}

        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
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
              {project.title}
          </MotionText>
        <MotionText isTruncated
          align='justify' 
          
          /*Animations */
          variants={TextAnimation}

        >
          {project.description}
        </MotionText>
      </MotionBox>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='gray.900'>
          <ModalHeader><CustomHeader text={project.title}/></ModalHeader>

          <ModalBody>
            <Text>{project.description}</Text>
            <br/>
            <CustomHeader text='Technologies'/>
            <Text>{project.tech.toString().replace(/,/g, ', ')}</Text>
            <br/>
            <CustomHeader text='Role'/>
            <Text>{project.role}</Text>
            <br/>
            <CustomHeader text='Links'/>
            { project.link || project.github ?
                <>
                  {getLink()}
                  {getGithub()}
                </>
                :
                <Text>No links available.</Text>
            }
            
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}