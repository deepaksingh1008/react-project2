import { Box,Heading,Image,Container, Stack,Text,VStack, HStack, Button,Input} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
const Footer = () => {
  return <Box Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'} >
       <Stack direction={['column','row']} >
       <VStack alignItems={"stretch"} w={'full'}>
        <Heading size="md" textTransform={'uppercase'} textAlign={'center'} >
            Suscribe to Get update
        </Heading>
        <HStack>
            <Input placeholder="Enter Email Here...." border={"none"} borderRadius="none" />
            <Button p={"0"} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                <AiOutlineSend size={20} />
            </Button>
        </HStack>
       </VStack>
       <VStack w={'full'} 
        borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}

       >
      <Heading textAlign={'center'} textTransform={'uppercase'}> VIDEO HUB</Heading>
      <Text>All rights received</Text>
      {/* <Heading size={'md'} textTransform={'uppercase'}>
        Social Media
      </Heading>
      <Button variant={'link'} colorScheme={"whiteAlpha"}>
        <a target='blank' href='https://youtube.com/6packprogrammer'>Youtube</a>
      </Button>
      <Button variant={'link'} colorScheme={"whiteAlpha"}>
        <a target={'blank'} href='https://instagram.com/6packprogrammer'>Instagram</a>
      </Button>
      <Button variant={'link'} colorScheme={"whiteAlpha"}>
        <a target={'blank'} href='https://github.com/6packprogrammer'>GitHub</a>
      </Button> */}
       </VStack>
       <Heading size={'md'} textTransform={'uppercase'}>
        Social Media
      </Heading>
      <Button padding={'5'} variant={'link'} colorScheme={"whiteAlpha"}>
        <a target='blank' href='https://youtu.be/46B5w8ZQYDA?si=y6ONmbSlsA_s0ZJG'>Youtube</a>
      </Button>
      <Button variant={'link'} colorScheme={"whiteAlpha"}>
        <a target={'blank'} href='https://www.instagram.com/deepak.singh.8906/'>Instagram</a>
      </Button>
      <Button variant={'link'} colorScheme={"whiteAlpha"}>
        <a target={'blank'} href='https://github.com/deepaksingh1008'>GitHub</a>
      </Button>
       </Stack>
  </Box>
  
};

export default Footer