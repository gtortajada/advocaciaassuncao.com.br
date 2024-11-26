{/* Pedidos bancários */}

// src/components/sections/Services/index.tsx
import { 
    Box, 
    Container, 
    Heading, 
    SimpleGrid,  
    Button, 
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
  } from '@chakra-ui/react'
  
  export default function Services() {
    const leftRequests = [
      "HORAS EXTRAS (7ª e 8ª)",
      "HORAS EXTRAS ALÉM DA 8ª",
      "HORAS EXTRAS INTERJORNADA",
      "HORAS EXTRAS INTRAJORNADAS",
      "ARTIGO 384 (INTERVALO DA MULHER)",
      "DESVIO DE FUNÇÃO",
      "EQUIPARAÇÃO SALARIAL",
      "ADICIONAL DE TRANSFERÊNCIA",
      "VENDA OBRIGATÓRIA DE FÉRIAS",
      "USO DE VEÍCULO PARTICULAR",
      "REINTEGRAÇÃO AO EMPREGO",
      "PERICULOSIDADE"
    ]
  
    const rightRequests = [
      "DANOS MORAIS",
      "ASSÉDIO MORAL",
      "DANO MATERIAL",
      "DOENÇA OCUPACIONAL",
      "ACIDENTE DE TRABALHO",
      "DANO EXISTENCIAL",
      "ANÁLISE E REVERSÃO DE JUSTA CAUSA",
      "REINTEGRAÇÃO POR TUTELA DE URGÊNCIA",
      "PROTESTO INTERRUPTIVO DE PRESCRIÇÃO",
      "REINTEGRAÇÃO AO EMPREGO",
      "PLANO DE SAÚDE (MESMA CONDIÇÃO DE CONTRATO ATIVO)"
    ]
  
    const banks = [
      {
        name: "BANCO ITAÚ",
        content: "Informações específicas sobre processos contra o Banco Itaú..."
      },
      {
        name: "BANCO SANTANDER",
        content: "Informações específicas sobre processos contra o Banco Santander..."
      },
      {
        name: "BANCO BRADESCO",
        content: "Informações específicas sobre processos contra o Banco Bradesco..."
      },
      {
        name: "BANCO SAFRA",
        content: "Informações específicas sobre processos contra o Banco Safra..."
      },
      {
        name: "BANCO DAYCOVAL",
        content: "Informações específicas sobre processos contra o Banco Daycoval..."
      }
    ]
  
    return (
      <Box
        as="section"
        id="services"
        py={16}
        bg="gray.50"
      >
        <Container maxW="container.xl">
          <VStack gap={12}>
            {/* Título */}
            <Heading
              as="h2"
              size="lg"
              textAlign="center"
              color="gray.800"
            >
              PRINCIPAIS PEDIDOS BANCÁRIOS
            </Heading>
  
            {/* Lista de Pedidos */}
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={8}
              w="full"
            >
              {/* Coluna Esquerda */}
              <VStack as="ul" gap={3} alignItems="stretch">
                {leftRequests.map((request, index) => (
                  <Box
                    as="li"
                    key={index}
                    p={3}
                    bg="white"
                    borderRadius="md"
                    boxShadow="sm"
                    _hover={{ bg: 'gray.50' }}
                  >
                    {request}
                  </Box>
                ))}
              </VStack>
  
              {/* Coluna Direita */}
              <VStack as="ul" gap={3} alignItems="stretch">
                {rightRequests.map((request, index) => (
                  <Box
                    as="li"
                    key={index}
                    p={3}
                    bg="white"
                    borderRadius="md"
                    boxShadow="sm"
                    _hover={{ bg: 'gray.50' }}
                  >
                    {request}
                  </Box>
                ))}
              </VStack>
            </SimpleGrid>
  
            {/* Botão */}
            <Button
              size="lg"
              colorScheme="blue"
              px={8}
              onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI')}
            >
              Fale com um especialista
            </Button>
  
            {/* Accordion de Bancos */}
            <Accordion allowToggle w="full">
              {banks.map((bank, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton
                      py={4}
                      _hover={{ bg: 'gray.50' }}
                    >
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {bank.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {bank.content}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Container>
      </Box>
    )
  }