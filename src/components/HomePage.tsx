import { Container, Heading, Stack } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <Container padding={8}>
      <Stack spacing={16}>
        <Stack spacing={1}>
          <Heading size='3xl'>melon 🍈</Heading>
          <Heading size='xl' color='gray.500'>
            melon business.
          </Heading>
        </Stack>
        <Stack spacing={1}>
          <Heading size='2xl'>CEO Jared Grimes</Heading>
          <Heading size='lg' color='gray.500'>
            Yeah, I own this company.
          </Heading>
          <Heading size='lg' color='gray.500'>
            What are YOU gonna do about it?
          </Heading>
        </Stack>
        <Stack spacing={1}>
          <Heading size='2xl'>Our Mission</Heading>
          <Heading size='xl' color='gray.500'>
            melon
          </Heading>
        </Stack>
      </Stack>
    </Container>
  );
};
