import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { HomePageSection } from './HomePageSection';
import { ParallaxContainer } from './Parallax/ParallaxContainer';
import { HiChevronDoubleDown, HiOutlineExternalLink } from 'react-icons/hi';

export const HomePage = () => {
  return (
    <Box backgroundColor='#f4a261'>
      {/* <ParallaxContainer> */}
      <>
        <HomePageSection>
          <Stack paddingY={12}>
            <Heading size='4xl' color='white'>
              melon 🍈
            </Heading>
            <Heading size='lg' color='white'>
              Apps that are a delight to use.
            </Heading>
          </Stack>
        </HomePageSection>
        <HomePageSection color='green.500' id='what-we-do'>
          <Stack spacing={8}>
            <Stack spacing={4}>
              <Heading size='lg' color='white'>
                {`
                    Silky smooth experiences.
                  `}
              </Heading>
              <Text fontSize='lg' color='white'>
                {` 
                    With Melon, experience apps in a way you've never seen before. 
                    At our core we believe in creating inclusive and high-end technology that centers consumer experience.
                    Our apps' interfaces are designed to feel intuitive right from the start.
                    Using a humanistic approach, Melon aims to enhance your daily life and habits.
                    Melon exists as an extension of your real-world experience, allowing you to interface with the things you love most both on and off the app.
                    We believe in cultivating organic community connections, user-friendly design, and real-world impact.
                    


                  `}
              </Text>
            </Stack>
          </Stack>
        </HomePageSection>
        <HomePageSection color='#e76f51'>
          <Stack spacing={8}>
            <Heading size='lg' color='white'>
              {`What we've made.`}
            </Heading>
            <Stack spacing='4'>
              <Heading
                size='md'
                color='white'
                as={Link}
                href='https://pokestats.live'
                isExternal
              >
                pokestats.live
                <Icon ml='1' as={HiOutlineExternalLink} fontSize='18' />
              </Heading>
              <Text color='white' fontSize='lg'>
                {`The ultimate companion for Pokémon TCG events. Live Pokémon TCG tournament data and analytics, comprehensive post-game tournament analysis, and record tracking for competitors across tournaments.`}
              </Text>
              <HStack color='white'>
                <Stat>
                  <StatNumber>250,000+</StatNumber>
                  <StatLabel>Monthly Page Views</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber>38,000+</StatNumber>
                  <StatLabel>Monthly Visitors</StatLabel>
                </Stat>
              </HStack>
            </Stack>
          </Stack>
        </HomePageSection>
        <Box
          padding={4}
          display='flex'
          justifyContent='center'
          backgroundColor={'gray.700'}
        >
          <Heading size='sm' color='white'>
            Copyright 2023 Melon LLC
          </Heading>
        </Box>
      </>
      {/* </ParallaxContainer> */}
    </Box>
  );
};
