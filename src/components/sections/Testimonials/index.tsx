import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

type TestimonialProps = {
  text: string
  name: string
}

const TestimonialCard = ({ text, name }: TestimonialProps) => (
  <Box
    bg="white"
    p={6}
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
      </VStack>
    </VStack>
  </Box>
)

export default function Testimonials() {
  const testimonials = [
    {
      text: "Fiquei muito feliz com seu empenho no caso, sempre transparente e resolvendo o processo de forma rápida.",
      name: "Thiago C.",
    },
    {
      text: "Achei muito bom que resolvemos o processo de forma rápida, sem desgaste e fazendo um ótimo acordo!",
      name: "Jessica C.",
    },
    {
      text: "Muito obrigada pela dedicação e transparência, um excelente profissional! ",
      name: "Gilcele D.",
    },
    {
      text: "Deus abençoe, muito obrigada pela força e por tudo ter dado certo no meu processo.",
      name: "Patrícia C.",
    },
    {
      text: "Muito obrigada doutor, foi exatamente como combinamos, com respeito e transparência.",
      name: "Sandra L.",
    },
    {
      text: "Tudo foi resolvido de forma tranquila e sem estresse, obrigada pela dedicação. ",
      name: "Priscila A.",
    }
  ]

  return (
    <Box
      as="section"
      id="testimonials"
      py={16}
      bg="#E9DAC6"
    >
      <Container maxW="container.xl" px={10}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading
              as="h2"
              fontSize="sm"
              color="#2e1012"
              textTransform="uppercase"
            >
              Depoimentos
            </Heading>
            <Heading
              as="h3"
              size="lg"
              textAlign="center"
              color="gray.800"
            >
              O QUE NOSSOS CLIENTES DIZEM
            </Heading>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={8}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}