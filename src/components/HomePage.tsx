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
      <ParallaxContainer>
        <>
          <HomePageSection>
            <Stack>
              <Heading size='4xl' color='white'>
                melon 🍈
              </Heading>
              <Heading size='lg' color='white'>
                Bringing humanity to technology.
              </Heading>
            </Stack>
          </HomePageSection>
          <HomePageSection color='green.400' id='what-we-do'>
            <Stack spacing={8}>
              <Stack spacing={4}>
                <Heading size='lg' color='white'>
                  The apps you use were made to make money.
                </Heading>
                <Text fontSize='lg' color='white'>
                  {`Being addicted to mindlessly consuming tweets and TikToks is a very profitable business model companies will not give up. Unfortunately, most modern apps are made to prioritize user engagement and retention instead of actual usefulness, user experience, and customer satisfaction.`}
                </Text>
                <Text fontSize='lg' color='white'>
                  {`There's endless potential for creation with our current technology. Companies don't care about that though, because that's not what makes them money - little blue checkmarks you have to pay for do.`}
                </Text>
              </Stack>
            </Stack>
          </HomePageSection>
          <HomePageSection color='green.500'>
            <Stack spacing={8}>
              <Stack spacing={4}>
                <Heading size='lg' color='white'>
                  A breath of fresh air.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`We want to revolutionize the way people see their devices. Technology is so much more than pay to win social media. Hopefully with Melon apps, you'll start to see your devices as companions rather than anxiety simulators.`}
                </Text>
              </Stack>
              <Stack spacing={4}>
                <Heading size='lg' color='white'>
                  Comfortably exceptional.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`Feel comfort in your technology being by your side with our products. Our apps are not lifestyle-intrusive - they just get stuff done when you need it. Go ahead, touch some grass.`}
                </Text>
              </Stack>
              <Stack spacing={4}>
                <Heading size='lg' color='white'>
                  Socially aware.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`Our apps are aware of our changing world and the societal impacts of technology. We ensure that the bridge between human and technology is done mindfully and respectfully of all of you.`}
                </Text>
              </Stack>
            </Stack>
          </HomePageSection>
          <HomePageSection color='#e76f51'>
            <Stack spacing={8}>
              <Stack spacing='4'>
                <Heading
                  size='lg'
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
      </ParallaxContainer>
    </Box>
  );
};
