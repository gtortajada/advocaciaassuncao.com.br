{/*Diferencias Section*/ }

// src/components/sections/Specialties/index.tsx
import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

const SpecialtyCard = ({ title, description }: { title: string; description: string }) => (
  <Box
    h="full"
    bg="white"
    boxShadow="lg"
    borderRadius="lg"
    _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
  >
    <VStack gap={4} align="flex-start">
      <Heading
        as="h3"
        size="md"
        color="blue.600"
      >
        {title}
      </Heading>
      <Text
        color="gray.600"
        fontSize="lg"
      >
        {description}
      </Text>
    </VStack>
  </Box>
)

export default function Specialties() {
  const specialties = [
    {
      title: "Foco nos resultados",
      description: "Trabalhamos com determinação para alcançar resultados concretos e efetivos."
    },
    {
      title: "Agilidade e profissionalismo",
      description: "Soluções rápidas e ágeis para cada situação, com foco na resolução do seu caso."
    },
    {
      title: "Profissionalismo",
      description: "Comprometimento em cada detalhe do seu processo, assegurando atendimento de alto nível."
    },
    {
      title: "Disponibilidade",
      description: "Estamos prontos para agir com rapidez e eficiência."
    }
  ]

  return (
    <Box
      as="section"
      id="specialties"
      py={16}
      bg="gray.50"
    >
      <Container maxW="container.xl">
        <VStack gap={12}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Heading
              as="h4"
              size="md"
              color="blue.600"
            >
              ESPECIALIDADES
            </Heading>
            <Heading
              as="h2"
              size="lg"
            >
              POR QUE ESCOLHER A ADVOCACIA ASSUNÇÃO?
            </Heading>
          </VStack>

          {/* Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={8}
            w="full"
          >
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

{/* <section id="diferencial" className={styles.diferencial}>
<div className={styles.contentdiferenciais}>
  <div className={styles.headerdiferenciais}>
    <h4 className={styles.h4}>ESPECIALIDADES</h4>
    <p className={styles.titulodiferenciais}>POR QUE ESCOLHER A ADVOCACIA ASSUNÇÃO?</p>
  </div>
  <div className={styles.cardsdiferenciais}>
    <div className={styles.cards1e2diferenciais}>
      <div className={styles.card1}>
        <p>Foco nos resultados</p>
        <p>Trabalhamos com determinação<br />para alcançar resultados<br />concretos e efetivos.</p>
      </div>
      <div className={styles.card2}>
        <p>Agilidade e profissionalismo</p>
        <p>Soluções rápidas e ágeis para<br />cada situação, com foco na<br />resolução do seu caso.</p>
      </div>
    </div>
    <div className={styles.cards3e4diferenciais}>
      <div className={styles.card3}>
        <p>Profissionalismo</p>
        <p>Comprometimento em cada<br />detalhe do seu processo,<br />assegurando atendimento<br />de alto nível.</p>
      </div>
      <div className={styles.card4}>
        <p>Disponibilidade</p>
        <p>Estamos prontos para<br />agir com rapidez e eficiência.</p>
      </div>
    </div>
  </div>
</div>

</section> */}