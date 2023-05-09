import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { HomePageSection } from './HomePageSection';
import { ParallaxChild } from './Parallax/ParallaxChild';
import { ParallaxContainer } from './Parallax/ParallaxContainer';

export const HomePage = () => {
  return (
    <Box backgroundColor='#f4a261'>
      <ParallaxContainer>
        <>
          <HomePageSection isFullHeight isParallax>
            <Stack spacing='1'>
              <Heading size='3xl' color='white'>
                melon 🍈
              </Heading>
              <Heading size='xl' color='white'>
                Melon Business.
              </Heading>
            </Stack>
          </HomePageSection>
          <HomePageSection color='#e76f51'>
            <Stack spacing={8}>
              <Heading size='2xl' color='white'>
                What we do
              </Heading>
              <Stack>
                <Heading size='xl' color='white'>
                  Make apps you actually want.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`Do you actually use Instagram Shopping? What about Facebook's Metaverse? Too much money in big tech is funneled into garbage nobody wants. We deliver extremely practical yet beautifully simple software that just makes sense.`}
                </Text>
              </Stack>
              <Stack>
                <Heading size='xl' color='white'>
                  Fix real problems.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`What are you ever going to use an NFT for? Too much corporate dumpster piles are churned out for the sake of making money alone. We care about making money but not like that much.`}
                </Text>
              </Stack>
              <Stack>
                <Heading size='xl' color='white'>
                  Fix my whoopsie.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`I messed up and made a business account for the pokestats.live AdSense account and I can't change it back so I needed to make a company to get the money out.`}
                </Text>
              </Stack>
            </Stack>
          </HomePageSection>
          <HomePageSection color='#2a9d8f'>
            <Stack spacing={8}>
              <Heading size='2xl' color='white'>
                Our Team
              </Heading>
              <Stack>
                <Heading size='xl' color='white'>
                  CEO - Jared Grimes
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`This guy is awesome. Did you know that he coded the entirety
                  of pokestats.live in 5 hours? Well, he didn't.`}
                </Text>
              </Stack>
            </Stack>
          </HomePageSection>
          <Box padding={4} display='flex' justifyContent='center'>
            <Heading size='sm' color='white'>
              Copyright 2023 melon LLC. I think idk
            </Heading>
          </Box>
        </>
      </ParallaxContainer>
    </Box>
  );
};
