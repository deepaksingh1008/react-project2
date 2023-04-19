import { Box,Heading,Image,Container, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOPtions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:'4xl'
}

const Home = () => {
  return (
    <Box >
     <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p='16' >
            <Heading textTransform={"uppercase"} py='2' w={"fit-content"} borderBottom={"2px solid"} margin={'auto'}> 
            Services
            </Heading>
            <Stack h={'full'} p={'4'} alignItems={"center"}
              direction={['column','row']}
            >
            <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40","400"]}></Image>
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt adipisci hic velit reiciendis odit tempora deleniti quasi, optio veniam expedita id eos iusto sed atque delectus excepturi omnis laboriosam recusandae temporibus quibusdam rem cum numquam fugiat. Veritatis, obcaecati magnam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam similique nulla voluptate voluptatum suscipit itaque consequatur soluta molestias officiis. Quaerat, enim illo, dolor omnis consequuntur magni voluptatum, repudiandae voluptates eum nemo modi doloremque dicta accusamus? Dignissimos inventore doloribus sed. Harum itaque officia iste placeat autem magni voluptatum? Magnam consectetur molestiae optio officia modi maxime explicabo tenetur ratione! Neque natus autem necessitatibus! Quo blanditiis inventore corrupti consequuntur aut minus maiores dolore culpa sint, ratione illo molestias? Odio omnis minima enim expedita, quibusdam minus fugit doloribus? Corporis necessitatibus molestias repellat. Facere, consequatur illo quam nam beatae sapiente sint? Libero, repudiandae facere.

            </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
   <Box w='full' h={'100vh'}>
    <Image src={img1}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOPtions}>
        Watch The Future
    </Heading>
   </Box>
   <Box w='full' h={'100vh'}>
    <Image src={img2}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOPtions}>
        Watch The Future
    </Heading>
   </Box>
   <Box w='full' h={'100vh'}>
    <Image src={img3}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOPtions}>
        Watch The Future
    </Heading>
   </Box>
   <Box w='full' h={'100vh'}>
    <Image src={img4}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOPtions}>
        Watch The Future
    </Heading>
   </Box>
   <Box w='full' h={'100vh'}>
    <Image src={img5}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOPtions}>
        Watch The Future
    </Heading>
   </Box>
   
    </Carousel>
)

export default Home



// Box like a div in the box we use chakra UI Property