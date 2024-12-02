'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Áreas de Atuação', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Diferenciais', href: '#specialties' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const navbarHeight = scrolled ? 75 : 125;
      window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: 'smooth' });
    }
  };

  // Navbar styles
  const navbarStyles = {
    height: scrolled ? '75px' : '125px',
    bg: scrolled ? '#2e1012' : 'transparent',
    transition: 'all 0.3s ease-in-out',
    width: '100%',
    top: 0,
    zIndex: 1000,
  };

  // Logo dimensions
  const logoHeight = isMobile ? 80 : 150;
  const logoWidth = isMobile ? (logoHeight * 1843) / 300 : (logoHeight * 3006) / 692; // Maintaining original proportion
  const logoSrc = scrolled ? '/logo-horizontal.png' : '/logo-quadrada.png';

  return (
    <Box as="nav" position="fixed" {...navbarStyles}>
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        maxW="1400px"
        mx="auto"
      >
        {/* Logo */}
        <Box
          position="relative"
          h={`${logoHeight}px`}
          w={`${logoWidth}px`}
          transition="all 0.3s ease-in-out"
        >
          <Image
            src={logoSrc}
            alt="Logo Advocacia Assunção"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <HStack spacing="50px" pt={4}>
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.href}
                as="button"
                onClick={() => scrollToSection(item.href)}
                color="#C0C0C0"
                fontSize="md"
                fontWeight="medium"
                _hover={{
                  color: "#FFD700",
                  transform: "scale(1.05)",
                  _after: { width: '100%' }
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: '-4px',
                  left: '0',
                  bg: "#FFD700",
                  transition: 'all 0.3s ease-in-out',
                }}
                transition="all 0.3s ease-in-out"
              >
                {item.label}
              </Box>
            ))}
          </HStack>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="#C0C0C0"
            _hover={{ color: "#FFD700" }}
            onClick={onOpen}
          />
        )}
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="rgba(0, 0, 0, 0.9)">
          <DrawerCloseButton color="#C0C0C0" _hover={{ color: "#FFD700" }} />
          <DrawerHeader borderBottomWidth="1px" color="#C0C0C0">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch">
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.href}
                  as="button"
                  onClick={() => {
                    scrollToSection(item.href);
                    onClose();
                  }}
                  color="#C0C0C0"
                  fontSize="xl"
                  fontWeight="medium"
                  bg="transparent"
                  textAlign="left"
                  _hover={{ color: "#FFD700", transform: "scale(1.05)" }}
                >
                  {item.label}
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;