import { Box, BoxProps, Container } from '@chakra-ui/react';

interface ParallaxChildProps extends BoxProps {
  children: JSX.Element;
  height: string;
}

export const ParallaxChild = (props: ParallaxChildProps) => {
  const { children, height, ...rest } = props;

  const scale = 3;

  return (
    <Container
      style={{ transformStyle: 'preserve-3d' }}
      height={height}
      display='flex'
      alignItems='center'
      {...rest}
    >
      <Box
        transformOrigin='0 0'
        transform={`translateZ(-2px) scale(${scale})`}
        top='0px'
        position='relative'
      >
        {children}
      </Box>
    </Container>
  );
};
