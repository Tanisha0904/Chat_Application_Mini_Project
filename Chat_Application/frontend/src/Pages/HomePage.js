import React from "react";
import { Box, Container, Text, TabList, TabPanel, TabPanels, Tab, Tabs } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent='center'
        padding={3}
        background={"white"}
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
      >
        <Text
          fontSize={'4xl'}
          fontFamily='Work sans'
          color={'black'}

        >
          Meow Meow
        </Text>
      </Box>
      <Box
        bg='white' w='100%' p={4} borderRadius='lg'
        borderWidth='1px' color={"black"}
      >
        <Tabs variant='soft-rounded'  >
          <TabList mb={'1em'}>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login>
              </Login>
            </TabPanel>
            <TabPanel>
              <Signup>
              </Signup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>


    </Container>
  )
};

export default HomePage;;
