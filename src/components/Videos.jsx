import { Heading, Stack, VStack,Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
const videoArr=[
  "https://youtu.be/ts7oLiVqwb0"
];
// const [videoSrc,setVideoSrc] = useState(videoArr[0]);
const Videos = () => {
  const [videoSrc,setVideo]=useState(videoArr[0]);
  return <Stack direction={["column","row"]} h={'100vh'}>
  <VStack w={'full'}>
   <video src='videoSrc'
   controls
   controlsList='nodownload'
   style={{
    width:'100%',

   }}>

   </video>
   <VStack alignItems={"flex-start"} p={'8'} w={'full'} overflow={'auto'}>
    <Heading>sample Video 1</Heading>
    <Text>This is a sample Video Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rem praesentium officia accusamus maxime dolore a debitis at quam, nam qui sequi explicabo. Dolorum, dicta veniam! Officiis, ullam a laudantium atque ipsam aliquam facere blanditiis error omnis nam hic rem illo iste enim iusto quos ex, cumque consequatur, molestiae inventore? Soluta, error! Dolore, et atque nobis quisquam incidunt sequi distinctio dolores repellendus rem tempore, enim explicabo, nihil eius doloribus reiciendis cum! Laborum consectetur culpa nam omnis error praesentium blanditiis incidunt et modi ad numquam, fugiat illum est voluptas sit animi officiis quia maxime dolorum sequi eos ea. Provident nobis sequi omnis quidem expedita sit maiores illo! Quis, corporis? Quos enim odio dignissimos velit a consequatur, earum, nemo perspiciatis minus similique sint inventore odit quasi. Voluptatum aliquid maxime aperiam vel consectetur dolor repudiandae labore ipsum obcaecati tenetur animi suscipit, corporis, similique commodi fugit error exercitationem facere inventore iure quisquam odit nulla. Porro sit repellat voluptas sint voluptatum. Ea, pariatur temporibus doloremque vitae voluptatem veritatis quisquam neque deserunt omnis quam? Natus necessitatibus, impedit minima ipsa quas itaque, magni incidunt sit eveniet omnis nulla sint eius alias dicta officia culpa. Aperiam unde fugit modi suscipit architecto corporis distinctio, reiciendis officiis amet, eveniet alias vitae, dolor quasi asperiores libero in expedita? Sunt cumque vero facere et ipsum facilis necessitatibus deserunt iusto corrupti assumenda consequatur unde quod doloremque soluta quibusdam saepe suscipit autem deleniti, accusamus expedita? Eos, impedit dolore quod assumenda accusantium debitis hic quas veritatis. Nihil beatae fugiat deleniti sunt reprehenderit alias doloribus neque, itaque qui porro perferendis vel nemo autem possimus ex excepturi! Hic, ducimus facilis voluptatibus magni suscipit reiciendis asperiores pariatur unde deleniti, tempore ab? Quos, veniam! Alias explicabo ad repellat facilis sint aut. Rem minus ad amet. Ducimus iusto earum qui ratione, sunt quasi placeat. Fugiat sunt quasi debitis consequuntur corporis!</Text>
    
   </VStack>
  </VStack>
  <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
    <Button variant={'ghost'} colorScheme={'purple'}>
      Lecture 1
    </Button>
  </VStack>
  </Stack>
    
  
}

export default Videos