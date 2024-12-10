import { Box, Container, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react'

const SpecialtyCard = ({ title, description }: { title: string; description: string }) => (
  <Box
    width={{ base: "300px", sm: "340px", md: "340px", lg: "400px" }}
    minH={{ base: "200px", md: "250px" }}
    bg="white"
    boxShadow="lg"
    borderRadius="lg"
    opacity={0.8}
    p={6}
    _hover={{
      opacity: 1,
      transform: 'translateY(-5px)',
      transition: 'all 0.3s ease'
    }}
    textAlign="center"
  >
    <VStack gap={4} align="center">
      <Image
        src="/icons/recursos.png"
        alt="Recursos icon"
        width={50}
        height={50}
      />
      <Heading
        as="h3"
        size="md"
        color="black"
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
      bg="#2e1012"
    >
      <Container maxW="container.xl" px={4}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading
              as="h2"
              fontSize="xs"
              color="#2e1012"
              textTransform="uppercase"
            >
              Diferenciais
            </Heading>
            <Heading
              as="h3"
              size="lg"
              color="#2e1012"
            >
              POR QUE ESCOLHER A ADVOCACIA ASSUNÇÃO?
            </Heading>
          </VStack>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={4}

            justifyItems="center"
            alignItems="center"
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