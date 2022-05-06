import Model from './Model'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Home from './Home'
import Experience from './Experience'
import Project from './Project'
import Other from './Other'

export default function Navigation(props) {
    function CustomTab({text}) {
        return <Tab _selected={{bgGradient:'linear(to-r, teal.500, purple.500, pink.500)', color: 'white'}}>{text}</Tab>
    }

    return (
        <>
            <Model/>
            <Tabs variant='soft-rounded' colorScheme='gray' align='center' maxW="40%" minW="400px" mx='auto' isLazy>
                <TabList>
                    <CustomTab text='Home'/>
                    <CustomTab text='Languages'/>
                    <CustomTab text='Projects'/>
                    <CustomTab text='Others'/>    
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Home/>
                    </TabPanel>
                    <TabPanel>
                        <Experience/>
                    </TabPanel>
                    <TabPanel>
                        <Project/>
                    </TabPanel>
                    <TabPanel>
                        <Other />
                    </TabPanel>
                </TabPanels> 
            </Tabs>
        </>
    )
}