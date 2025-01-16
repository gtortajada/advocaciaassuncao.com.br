import React from 'react';
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Link,
  Divider,
  useBreakpointValue,
  Stack,
  StackDirection
} from '@chakra-ui/react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Áreas de Atuação', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Diferenciais', href: '#specialties' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const fontSize = useBreakpointValue({ base: "lg", md: "xl" });
  const spacing = useBreakpointValue({ base: 8, md: 4 });
  const containerPadding = useBreakpointValue({ base: 4, md: 6 });
  const direction = useBreakpointValue({ base: "column", md: "row" }) as StackDirection;

  const hoverStyle = {
    color: "#FFD700",
    transform: "scale(1.05)",
    textDecoration: "underline"
  };

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 75;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box as="footer" bg="#2e1012" color="#C0C0C0">
      <Container maxW="container.xl" py={containerPadding}>
        <Grid
          templateColumns="1fr"
          gap={{ base: 8, md: 4 }}
          justifyItems="center"
          textAlign="center"
          width="100%"
        >
          <GridItem width="100%">
            <Text fontSize={fontSize} fontWeight="bold" mb={4}>
              Mapa do Site:
            </Text>
            <Stack
              direction={direction}
              align="center"
              justify="center"
              spacing={{ base: 0, md: 6 }}
              width={{ base: "100%", md: "70%" }}
              margin="0 auto"
              overflow="hidden"
            >
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.href}
                  as="button"
                  onClick={() => scrollToSection(item.href)}
                  color="#C0C0C0"
                  fontSize={{ base: "lg", md: "md" }}
                  fontWeight="medium"
                  bg="transparent"
                  textDecoration="underline"
                  _hover={hoverStyle}
                  transition="all 0.3s ease-in-out"
                  w={{ base: "80%", md: "fit-content" }}
                  flex={{ base: "none", md: "1" }}
                  p={{ base: 0.5, md: 0 }}
                  whiteSpace="nowrap"
                >
                  {item.label}
                </Box>
              ))}
            </Stack>
          </GridItem>
        </Grid>
        <Divider borderColor="white" borderWidth="1px" my={spacing} />
        <Link
          href="https://www.gtortajada.online"
          isExternal
          textDecoration="none">
          <Text
            textAlign="center"
            fontSize={{ base: "18px", md: "16px" }}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.3s ease-in-out"
          >
            Copyright © {currentYear} by Gustavo Tortajada.
          </Text>
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;