import Image from 'next/image'
import { Box, Container, Heading, Button, SimpleGrid, VStack } from '@chakra-ui/react'

const HomePage = () => {
 return (
   <>
     <Box as="section" id="home" position="relative" height="100vh" overflow="hidden">
       <Box display={{ base: 'none', md: 'block' }}>
         <Image
           src="/hero-bg.jpg"
           alt="Background Desktop"
           fill
           priority
           style={{
             objectFit: 'cover',
             objectPosition: 'center',
             zIndex: -1,
           }}
         />
       </Box>

       <Box display={{ base: 'block', md: 'none' }}>
         <Image
           src="/hero-bg-mobile.jpg"
           alt="Background Mobile"
           fill
           priority
           style={{
             objectFit: 'cover',
             objectPosition: 'center',
             zIndex: -1,
           }}
         />
       </Box>

       <Box
         position="absolute"
         top={0}
         left={0}
         right={0}
         bottom={0}
         bg="rgba(0, 0, 0, 0.3)"
         zIndex={0}
       />

       <Container maxW="container.xl" position="relative" zIndex={1} height="100%" display="flex" flexDirection="column">
         <VStack 
           flex="1" 
           gap={8} 
           textAlign={{ base: 'center', md: 'left' }} 
           justify="flex-end" // Alterado para começar mais abaixo
           alignItems={{ base: 'center', md: 'flex-start' }}
           pl={{ base: 0, md: 20 }}
           mb={20}
         >
           <VStack alignItems={{ base: 'center', md: 'flex-start' }} gap={4}>
             <Heading
               size={{ base: '2xl', md: 'xl' }}
               lineHeight="1.2"
               maxW="3xl"
               color="#ffe4a2"
               fontFamily="var(--font-free-serif)"
               px={{ base: 4, md: 0 }}
             >
               Defendemos seus direitos trabalhistas bancários com excelência.
             </Heading>
             <Heading
               size={{ base: 'md', md: 'md' }} // Tamanhos disponíveis: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
               lineHeight="1.2"
               maxW="3xl"
               color="white"
               fontFamily="var(--font-montserrat)"
               px={{ base: 4, md: 0 }}
             >
               Atendemos todo o Brasil.<br />
               Resultados comprovados!
             </Heading>
           </VStack>
           <Button
             size="lg"
             colorScheme="blue"
             onClick={() => window.open('https://wa.me/5544988592720', '_blank')}
           >
             Entrar em contato
           </Button>
         </VStack>

         <SimpleGrid 
           columns={{ base: 1, md: 3 }} 
           gap={8} 
           mb={8}
           px={{ base: 4, md: 0 }}
         >
           <Box
             p={6}
             bg="rgba(255, 255, 255, 0.8)"
             boxShadow="lg"
             borderRadius="lg"
             textAlign="center"
             transition="all 0.3s ease"
             _hover={{
               bg: "rgba(255, 255, 255, 0.95)"
             }}
           >
             <Heading size="sm">Estratégia e precisão</Heading>
           </Box>
           <Box
             p={6}
             bg="rgba(255, 255, 255, 0.8)"
             boxShadow="lg"
             borderRadius="lg"
             textAlign="center"
             transition="all 0.3s ease"
             _hover={{
               bg: "rgba(255, 255, 255, 0.95)"
             }}
           >
             <Heading size="sm">Atendimento online facilitado</Heading>
           </Box>
           <Box
             p={6}
             bg="rgba(255, 255, 255, 0.8)"
             boxShadow="lg"
             borderRadius="lg"
             textAlign="center"
             transition="all 0.3s ease"
             _hover={{
               bg: "rgba(255, 255, 255, 0.95)"
             }}
           >
             <Heading size="sm">Recursos até a última instância</Heading>
           </Box>
         </SimpleGrid>
       </Container>
     </Box>
   </>
 )
}

export default HomePage