import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
  Link,
  Divider,
  useBreakpointValue
} from '@chakra-ui/react';
import { Phone, Mail, MessageCircleMore } from 'lucide-react';

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
  const iconSize = useBreakpointValue({ base: 28, md: 24 });

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
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 8, md: 4 }}
          justifyItems="center"
          textAlign="center"
        >
          <GridItem w="full">
            <Text fontSize={fontSize} fontWeight="bold" mb={4}>
              Mapa do Site:
            </Text>
            <VStack align="center" spacing={{ base: 0, md: 1 }}>
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
                  w={{ base: "80%", md: "auto" }}
                  p={{ base: 0.5, md: 0 }}
                >
                  {item.label}
                </Box>
              ))}
            </VStack>
          </GridItem>

          <GridItem w="full">
            <Text fontSize={fontSize} fontWeight="bold" mb={4}>
              Canais de Contato
            </Text>
            <VStack align="center" spacing={spacing}>
              <HStack spacing={{ base: 8, md: 6 }}>
                <Link
                  href="https://wa.me/5544988592720"
                  isExternal
                  _hover={hoverStyle}
                >
                  <Box as={MessageCircleMore} fill="#C0C0C0" stroke="none" size={iconSize} />
                </Link>
                <Link
                  href="mailto:seu-email@exemplo.com"
                  isExternal
                  _hover={hoverStyle}
                >
                  <Box as={Mail} fill="#C0C0C0" stroke="none" size={iconSize} />
                </Link>
                <Link
                  href="tel:+5544988592720"
                  _hover={hoverStyle}
                >
                  <Box as={Phone} fill="#C0C0C0" stroke="none" size={iconSize} />
                </Link>
              </HStack>

              <Link
                href="https://www.oab.org.br/publicacoes/codigodeetica"
                isExternal
                color="#C0C0C0"
                textDecoration="underline"
                _hover={hoverStyle}
                fontSize={{ base: "lg", md: "md" }}
                px={{ base: 4, md: 0 }}
              >
                Código de Ética e Disciplina da OAB
              </Link>
            </VStack>
          </GridItem>
        </Grid>

        <Divider borderColor="white" borderWidth="1px" my={spacing} />
        <Link
          href="www.gtortajada.online"
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