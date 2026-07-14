import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const TopicCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <VStack align="center" textAlign="center" gap={3}>
    <Heading as="h4" size="md" color="#2e1012">
      {title}
    </Heading>
    <Text color="gray.600" fontSize="md">
      {description}
    </Text>
  </VStack>
);

export default function Previdenciario() {
  const topics = [
    {
      title: "Auxílio-Acidente",
      description:
        "Benefício destinado ao segurado que, após sofrer um acidente, permanece com sequelas permanentes que reduzem sua capacidade para exercer suas atividades profissionais, garantindo uma compensação financeira prevista pela legislação.",
    },
    {
      title: "Auxílio-Doença",
      description:
        "Benefício concedido ao segurado que, por motivo de doença ou acidente, encontra-se temporariamente incapacitado para o trabalho ou para exercer sua atividade habitual, desde que atendidos os requisitos legais.",
    },
    {
      title: "Salário-Maternidade",
      description:
        "Benefício destinado à segurada que precisa se afastar de suas atividades em razão do nascimento de um filho, adoção, guarda para fins de adoção ou outras situações previstas em lei, garantindo o suporte financeiro durante o período de afastamento.",
    },
  ];

  return (
    <Box as="section" id="previdenciario" py={16} bg="gray.50">
      <Container maxW="container.xl" px={4}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading
              as="h2"
              fontSize="sm"
              color="#2e1012"
              textTransform="uppercase"
            >
              Áreas de atuação
            </Heading>
            <Heading as="h3" size="lg" color="gray.800">
              DIREITO PREVIDENCIÁRIO
            </Heading>
            <Text color="gray.600" fontSize="md" maxW="3xl">
              Atuamos na defesa dos direitos de trabalhadores,
              aposentados e segurados do INSS, oferecendo atendimento
              especializado em todas as etapas do processo. Prestamos assessoria
              para a solicitação, revisão e restabelecimento de benefícios
              previdenciários, sempre buscando garantir que nossos clientes
              tenham acesso aos direitos previstos em lei.<br /> Nossa atuação abrange
              tanto a esfera administrativa, com o acompanhamento de
              requerimentos junto ao INSS, quanto a esfera judicial, quando há
              necessidade de recorrer ao Poder Judiciário para assegurar o
              reconhecimento de um direito negado ou concedido de forma
              incorreta. 
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={20} w="full">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                title={topic.title}
                description={topic.description}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
