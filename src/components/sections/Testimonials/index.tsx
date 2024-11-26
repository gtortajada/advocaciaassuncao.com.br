{/* Prova Social Section */}
// src/components/sections/Testimonials/index.tsx
import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

type TestimonialProps = {
  text: string
  name: string
  case: string
}

const TestimonialCard = ({ text, name, case: caseType }: TestimonialProps) => (
  <Box
    bg="white"
    p={8}
    borderRadius="lg"
    boxShadow="lg"
    _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
  >
    <VStack gap={4} align="flex-start">
      <Text fontSize="lg" color="gray.700">
        {text}
      </Text>
      <VStack align="flex-start" gap={1}>
        <Text fontWeight="bold" color="gray.800">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {caseType}
        </Text>
      </VStack>
    </VStack>
  </Box>
)

export default function Testimonials() {
  const testimonials = [
    {
      text: "Sou muito grato ao João, excelente atendimento e dedicação ao caso, Sou muito grato ao João, excelente atendimento e dedicação ao caso.",
      name: "José da Silva, Campo Grande, MS",
      case: "Causa de adicional de transferência"
    },
    {
      text: "Sou muito grato ao João, excelente atendimento e dedicação ao caso, Sou muito grato ao João, excelente atendimento e dedicação ao caso.",
      name: "José da Silva, Campo Grande, MS",
      case: "Causa de adicional de transferência"
    },
    {
      text: "Sou muito grato ao João, excelente atendimento e dedicação ao caso, Sou muito grato ao João, excelente atendimento e dedicação ao caso.",
      name: "José da Silva, Campo Grande, MS",
      case: "Causa de adicional de transferência"
    }
  ]

  return (
    <Box
      as="section"
      id="testimonials"
      py={16}
      bg="gray.50"
    >
      <Container maxW="container.xl">
        <VStack gap={12}>
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            color="gray.800"
          >
            O QUE NOSSOS CLIENTES DIZEM
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={8}
            w="full"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
                case={testimonial.case}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

{/* <section id="provasocial" className={styles.provasocial}>
<div className={styles.contentprovasocial}>
  <h3 className={styles.tituloprovasocial}>O QUE NOSSOS CLIENTES DIZEM</h3>
  <div className={styles.depoimentos}>
    <div className={styles.depoimento1}>
      <p className={styles.textodepoimento}>Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso,<br /> Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso.</p>
      <p className={styles.nomedepoimento}>Jośe da Silva, Campo Grande, MS</p>
      <p className={styles.pedidodepoimento}>Causa de adicional de transferência</p>
    </div>
    <div className={styles.depoimento1}>
      <p className={styles.textodepoimento}>Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso,<br /> Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso.</p>
      <p className={styles.nomedepoimento}>Jośe da Silva, Campo Grande, MS</p>
      <p className={styles.pedidodepoimento}>Causa de adicional de transferência</p>
    </div>
    <div className={styles.depoimento1}>
      <p className={styles.textodepoimento}>Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso,<br /> Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso.</p>
      <p className={styles.nomedepoimento}>Jośe da Silva, Campo Grande, MS</p>
      <p className={styles.pedidodepoimento}>Causa de adicional de transferência</p>
    </div>
  </div>
</div>
</section> */}