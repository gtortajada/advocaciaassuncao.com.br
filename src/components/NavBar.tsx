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
  useBreakpointValue,
  Link
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
  const [activeSection, setActiveSection] = useState('home');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobileOrTablet = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar seção ativa
      const sections = NAV_ITEMS.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const navbarHeight = scrolled ? 75 : 125;
      window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
      if (isOpen) onClose();
    }
  };

  const navbarStyles = {
    height: scrolled ? '75px' : '125px',
    bg: scrolled ? '#2e1012' : 'transparent',
    transition: 'all 0.3s ease-in-out',
    width: '100%',
    top: 0,
    zIndex: 1000,
  };

  const getLogoSize = () => {
    if (isMobileOrTablet) {
      const height = scrolled ? 60 : 90;
      return {
        height,
        width: height,
        src: '/logo-icone.png'
      };
    } else {
      const height = scrolled ? 60 : 90;
      const width = (height * 1843) / 300;
      return {
        height,
        width,
        src: '/logo-horizontal.png'
      };
    }
  };

  const logoSize = getLogoSize();

  return (
    <Box as="nav" position="fixed" {...navbarStyles}>
      <Flex
        h="100%"
        alignItems="center"
        px={{ base: 4, md: 8 }}
        maxW="1400px"
        mx="auto"
      >
        <Flex flex={1} justify="flex-start">
          <Link
            onClick={() => scrollToSection('#home')}
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.3s ease-in-out"
            marginRight={{ base: 4, lg: 12 }}
          >
            <Box
              position="relative"
              h={`${logoSize.height}px`}
              w={`${logoSize.width}px`}
              transition="all 0.3s ease-in-out"
            >
              <Image
                src={logoSize.src}
                alt="Logo Advocacia Assunção"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Link>

          {!isMobileOrTablet && (
            <HStack spacing="30px" pt={12}>
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.href}
                  as="button"
                  onClick={() => scrollToSection(item.href)}
                  color={activeSection === item.href.replace('#', '') ? "#FFD700" : "#C0C0C0"}
                  fontSize="sm"
                  fontWeight="medium"
                  whiteSpace="nowrap"
                  position="relative"
                  _hover={{
                    color: "#FFD700",
                    transform: "scale(1.05)",
                    _after: { width: '100%' }
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: activeSection === item.href.replace('#', '') ? '100%' : '0%',
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
        </Flex>

        {isMobileOrTablet && (
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon color="#C0C0C0" boxSize={6} />}
            variant="ghost"
            size="lg"
            onClick={onOpen}
            _hover={{ color: "#FFD700" }}
            bg="transparent"
            display="flex"
          />
        )}
      </Flex>

      <Drawer 
        isOpen={isOpen} 
        placement="left" 
        onClose={onClose} 
        size={{ base: "xs", md: "sm" }}
      >
        <DrawerOverlay />
        <DrawerContent bg="rgba(46, 16, 18, 0.98)">
          <DrawerCloseButton 
            color="#C0C0C0" 
            _hover={{ color: "#FFD700" }} 
            size="lg"
            mt={2}
          />
          <DrawerHeader borderBottomWidth="1px" color="#C0C0C0" fontSize="xl">
            Menu
          </DrawerHeader>
          <DrawerBody mt={4}>
            <VStack spacing={8} align="stretch">
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.href}
                  as="button"
                  onClick={() => scrollToSection(item.href)}
                  color={activeSection === item.href.replace('#', '') ? "#FFD700" : "#C0C0C0"}
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="medium"
                  bg="transparent"
                  textAlign="left"
                  width="100%"
                  py={2}
                  _hover={{ 
                    color: "#FFD700", 
                    transform: "translateX(10px)",
                    transition: "all 0.3s ease-in-out"
                  }}
                  transition="all 0.3s ease-in-out"
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