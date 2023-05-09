import { Container, BoxProps, Box } from '@chakra-ui/react';
import { ParallaxChild } from './Parallax/ParallaxChild';

interface HomePageSectionProps extends BoxProps {
  children: JSX.Element;
  isFullHeight?: boolean;
  isParallax?: boolean;
  color?: string;
}

export const HomePageSection = (props: HomePageSectionProps) => {
  const { children, isFullHeight, isParallax, color, ...rest } = props;

  const containerProps = {
    ...rest,
    ...(isFullHeight ? { height: '100vh' } : { height: 'auto' }),
  };

  if (props.isParallax) {
    return <ParallaxChild {...containerProps}>{children}</ParallaxChild>;
  }

  return (
    <Box backgroundColor={color}>
      <Container paddingY='16' {...containerProps}>
        {children}
      </Container>
    </Box>
  );
};
