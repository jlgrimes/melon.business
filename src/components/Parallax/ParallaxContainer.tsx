import { Box, Container } from '@chakra-ui/react';
import './parallax-container.css';

interface ParallaxContainerProps {
  children: JSX.Element;
}

export const ParallaxContainer = (props: ParallaxContainerProps) => {
  return <Box className='parallax-container'>{props.children}</Box>;
};
