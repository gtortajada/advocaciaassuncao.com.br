import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

const SpecialtyCard = ({ title, description }: { title: string; description: string }) => (
  <Box
    h="full"
    bg="white"
    boxShadow="lg"
    borderRadius="lg"
    opacity={0.8}
    _hover={{
      opacity: 1,
      transform: 'translateY(-5px)',
      transition: 'all 0.3s ease'
    }}
    textAlign="center"
  >
    <VStack gap={4} align="center">
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
      title: "Agilidade",
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
      bg="#E9DAC6"
    >
      <Container maxW="container.xl">
        <VStack gap={12}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Heading
              as="h4"
              size="md"
              color="#ffe4a2"
            >
              ESPECIALIDADES
            </Heading>
            <Heading
              as="h2"
              size="lg"
              color="#2e1012"
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