import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HomePageSection } from './HomePageSection';
import { ParallaxContainer } from './Parallax/ParallaxContainer';
import { HiChevronDoubleDown } from 'react-icons/hi';

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
              <Heading size='lg' color='white'>
                Melon business.
              </Heading>
              <Box>
                <Button
                  variant='unstyled'
                  size='xs'
                  leftIcon={<HiChevronDoubleDown />}
                  color='white'
                  onClick={() => {
                    document.getElementById('what-we-do')?.scrollIntoView();
                  }}
                >
                  {`Andiamo!`}
                </Button>
              </Box>
            </Stack>
          </HomePageSection>
          <HomePageSection color='green.500' id='what-we-do'>
            <Stack spacing={10}>
              <Heading size='xl' color='white'>
                What Do
              </Heading>
              <Stack>
                <Heading size='lg' color='white'>
                  Make apps you actually want.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`Do you actually use Instagram Shopping? What about Facebook's Metaverse? Too much money in big tech is funneled into garbage nobody wants. We deliver extremely practical yet beautifully simple software that just makes sense.`}
                </Text>
              </Stack>
              <Stack>
                <Heading size='lg' color='white'>
                  Fix real problems.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`What are you ever going to use an NFT for? Too much corporate dumpster piles are churned out for the sake of making money alone. We care about making money but not like that much.`}
                </Text>
              </Stack>
              <Stack>
                <Heading size='lg' color='white'>
                  Fix my whoopsie.
                </Heading>
                <Text color='white' fontSize='lg'>
                  {`I messed up and made a business account for the pokestats.live AdSense account and I can't change it back so I needed to make a company to get the money out.`}
                </Text>
              </Stack>
            </Stack>
          </HomePageSection>
          <HomePageSection color='#e76f51'>
            <Stack spacing={10}>
              <Heading size='xl' color='white'>
                Our Team
              </Heading>
              <Stack spacing='4'>
                <Stack spacing='0'>
                  <Heading size='lg' color='white'>
                    CEO
                  </Heading>
                  <Heading size='md' color='white'>
                    Jared Grimes
                  </Heading>
                </Stack>
                <Text color='white' fontSize='lg'>
                  {`Jared is an experienced front-end software engineer at Microsoft. He likes to code in his free time, for some reason.`}
                </Text>
              </Stack>
            </Stack>
          </HomePageSection>
          <Box
            padding={4}
            display='flex'
            justifyContent='center'
            backgroundColor={'gray.800'}
          >
            <Heading size='sm' color='white'>
              Copyright 2023 melon LLC. I think idk
            </Heading>
          </Box>
        </>
      </ParallaxContainer>
    </Box>
  );
};
