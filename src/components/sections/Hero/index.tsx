{/* Hero Section */} 

import { Box, Container, Heading, Button, SimpleGrid, VStack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box as="section" id="home" bg="gray.50" py={20}>
        <Container maxW="container.xl">
          <VStack gap={8} textAlign="center">
            <Heading 
              size="xl" 
              lineHeight="1.2"
              maxW="3xl"
            >
              Advocacia especializada em causas trabalhistas bancárias, com foco nos resultados e atendimento personalizado em todo o Brasil.
            </Heading>
            
            <Button 
              size="lg"
              colorScheme="blue"
              onClick={() => {/* Adicionar função de redirecionamento aqui */}}
            >
              Entrar em contato
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Cards Section */}
      <Box as="section" py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box 
              p={8}
              bg="white"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
            >
              <Heading size="md">Estratégia e precisão</Heading>
            </Box>

            <Box 
              p={8}
              bg="white"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
            >
              <Heading size="md">Atendimento online facilitado</Heading>
            </Box>

            <Box 
              p={8}
              bg="white"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
            >
              <Heading size="md">Recursos até a última instância</Heading>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default HomePage

{/*Adicionar Paralax*/}
{/* <section id="hero" className={styles.hero}>
<div className={styles.heroContent}>
  <h1>Advocacia especializada em causas trabalhistas bancárias, com foco nos resultados e atendimento personalizado em todo o Brasil.</h1>
  <button className={styles.buttonhero}> Entrar em contato </button> {/*Falta o direcionamento do botão
</div>

</section>
<section className={styles.cards}>
<div className={styles.card}>
  <h3>Estratégia e precisão</h3>
</div>
<div className={styles.card}>
  <h3>Atendimento online facilitado</h3>
</div>
<div className={styles.card}>
  <h3>Recursos até a última instância</h3>
</div>
</section> */}