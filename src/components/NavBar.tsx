import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Slide,
  useDisclosure,
  //Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// Definição dos tipos
interface NavItem {
  label: string;
  href: string;
}

// Items da navegação
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Áreas de Atuação', href: '/areas' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Perguntas Frequentes', href: '/faq' },
  { label: 'Diferenciais', href: '/diferenciais' },
  { label: 'Contato', href: '/contato' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isMenuOpen, onToggle } = useDisclosure();
  const router = useRouter();
  
  // Detecta scroll para mudança de estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsividade
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Estilos base da navbar
  const navbarStyles = {
    height: scrolled ? '75px' : '125px',
    bg: scrolled ? '#800020' : 'transparent',
    transition: 'all 0.3s ease-in-out',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  };

  // Estilos do logo
  const logoHeight = scrolled ? 80 : 100;
  const logoWidth = (logoHeight * 3006) / 692; // Mantendo a proporção original

  return (
    <Box as="nav" {...navbarStyles}>
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
            src="/logo.png" // Ajuste para o caminho correto da sua logo
            alt="Logo Advocacia Assunção"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Box>

        {/* Menu Desktop */}
        {!isMobile && (
          <HStack gap="50px">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                as={NextLink}
                href={item.href}
                color="#C0C0C0"
                fontSize="md"
                fontWeight="medium"
                position="relative"
                _hover={{
                  color: "#FFD700",
                  transform: "scale(1.05)",
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: router.pathname === item.href ? '100%' : '0%',
                  height: '2px',
                  bottom: '-4px',
                  left: '0',
                  bg: "#FFD700",
                  transition: 'all 0.3s ease-in-out',
                }}
                transition="all 0.3s ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        )}

        {/* Botão Menu Mobile */}
        {isMobile && (
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="#C0C0C0"
            _hover={{ color: "#FFD700" }}
            onClick={onToggle}
          />
        )}
      </Flex>

      {/* Menu Mobile */}
      <Slide
        direction="left"
        in={isMenuOpen}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          height: '100vh',
          zIndex: 999,
        }}
      >
        <Box
          bg="rgba(0, 0, 0, 0.7)"
          h="100%"
          p={8}
          pt={24}
        >
          <Flex
            direction="column"
            alignItems="flex-start"
            gap={6}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                as={NextLink}
                href={item.href}
                color="#C0C0C0"
                fontSize="xl"
                fontWeight="medium"
                w="full"
                _hover={{
                  color: "#FFD700",
                  transform: "scale(1.05)",
                }}
                onClick={onToggle}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
        </Box>
      </Slide>

      {/* Overlay para fechar o menu mobile */}
      {isMenuOpen && (
        <Box
          position="fixed"
          top={0}
          left="75%"
          right={0}
          bottom={0}
          bg="transparent"
          onClick={onToggle}
          zIndex={998}
        />
      )}
    </Box>
  );
};
export default Navbar;

// "use client"
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { MdOutlineClose } from 'react-icons/md'
// import Image from "next/image";
// import styles from './NavBar.module.css'

// export default function NavBar() {
//   const [showLinks, setShowLinks] = useState(false)
//   const pathname = usePathname();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   const navLinks = [
//     { href: "/", text: "Home" },
//     { href: "/servicos", text: "Serviços" },
//     { href: "/provasocial", text: "Prova Social" },
//     { href: "/diferencial", text: "Diferenciais" },
//     { href: "/sobreNos", text: "Sobre nós" },
//   ]

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.contentnav}>
//         <div className={styles.logonav}>
//           <Link
//             href="#"
//             onClick={() => scrollToTop}
//             className={styles.logo}
//           >
//             <Image
//               src="/variacaoLogo.png"
//               alt="Logo da Advocacia Assunção"
//               fill
//               sizes="210px"
//             />
//           </Link>
//         </div>
//         <div className={styles.buttonsnav}>
//           {navLinks.map((link) => {
//             return (
//               <Link
//                 key={link.text}
//                 href={link.href}
//                 className={`${pathname === link.href ? styles.activeLink : ""}
//                    ${styles.link}`}
//               >
//                 {link.text}
//               </Link>
//             );
//           })}
//         </div>
//         <div className={styles.icone}>
//           {showLinks ? (
//             <button onClick={() => setShowLinks(false)}>
//               <MdOutlineClose className={styles.iconeMd}/>
//             </button>
//           ) : (
//             <button onClick={() => setShowLinks(true)}>
//               <GiHamburgerMenu className={styles.iconeGi}/>
//             </button>
//           )}
//         </div>
//       </div>
//       {showLinks ? (
//         <div onClick={() => setShowLinks(false)} className={styles.linksnavmobile}>
//           <div className={styles.contentnavmobile}>
//             {navLinks.map((link) => {
//               return (
//                 <Link
//                   key={link.text}
//                   href={link.href}
//                   className={`${pathname === link.href ? styles.activeLink : ''} ${styles.link}`}
//                 >
//                   {link.text}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       ) : undefined}
//     </nav>
//   )
// }