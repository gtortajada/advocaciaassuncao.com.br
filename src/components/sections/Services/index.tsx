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
  AccordionIcon,
  Grid,
  Text
} from '@chakra-ui/react'

export default function Services() {
  const leftRequests = [
    "HORAS EXTRAS (7ª e 8ª)",
    "HORAS EXTRAS ALÉM DA 8ª",
    "HORAS EXTRAS INTERJORNADA",
    "HORAS EXTRAS INTRAJORNADAS",
    "PLR",
    "ARTIGO 384 (INTERVALO DA MULHER)",
    "DESVIO DE FUNÇÃO",
    "EQUIPARAÇÃO SALARIAL",
    "ADICIONAL DE TRANSFERÊNCIA",
    "VENDA OBRIGATÓRIA DE FÉRIAS",
    "USO DE VEÍCULO PARTICULAR",
    "REINTEGRAÇÃO AO EMPREGO",
  ]

  const rightRequests = [
    "DANOS MORAIS",
    "ASSÉDIO MORAL",
    "DANO MATERIAL",
    "DOENÇA OCUPACIONAL",
    "PERICULIDADE",
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
      leftColumn: [
        "AGIR/GERA - RECÁLCULO",
        "AUSÊNCIA DE PAGAMENTO AGIR/GERA (QUANDO TRABALHA NA USO)",
        "AGIR/GERA - INTEGRAÇÃO",
        "DIFERENÇAS SALARIAIS (RP 52)",
        "DIFERENÇAS DAS COMISSÕES",
        "DIFERENÇAS DAS VERBAS SEMESTRAIS",
        "CONGELAMENTO DO ATS/ANUÊNIOS",
      ],
      rightColumn: [
        "ATS/ANUÊNIOS - INTEGRAÇÃO",
        "AUXILIO ALIMENTAÇÃO - INTEGRAÇÃO",
        "CONTRIBUIÇÃO PARA FUNDO DE PENSÃO (ITAUBANCO CD - PLANO PAC)",
        "FÉRIAS PRÊMIO (BEMGE)",
        "GRATIFICAÇÃO SEMESTRAL (BEMGE)",
        "REAJUSTE 10,8% - CCT 96/97 (BEMGE)",
        "RECOMPOSIÇÃO FASBEMGE"
      ]
    },
    {
      name: "BANCO SANTANDER",
      leftColumn: [
        "GRADES",
        "DIFERENÇAS SALARIAIS POLÍTICAS DE NÍVEIS",
        "SRV - DIFERENÇAS",
        "SRV - INTEGRAÇÃO",
        "PPE/PPRS - INTEGRAÇÃO"
      ],
      rightColumn: [
        "GRATIFICAÇÃO ESPECIAL",
        "AÇÕES UNIVERSITÁRIAS",
        "HORAS EXTRAS NETCURSOS",
        "ASSÉDIO MORAL (GOI/GOE)"
      ]
    },
    {
      name: "BANCO BRADESCO",
      leftColumn: [
        "VERBAS DE REPRESENTAÇÃO",
        "COMISSÕES POR VENDAS DE PRODUTOS",
        "HORAS EXTRAS CURSOS TREINET",
        "CONGELAMENTO DO ATS/ANUÊNIOS",
        "ATS/ANUÊNIOS - INTEGRAÇÃO"
      ],
      rightColumn: [
        "AUXÍLIO ALIMENTAÇÃO - INTEGRAÇÃO",
        "DESCONTOS INDEVIDOS VALE TRANSPORTE",
        "PCS 98 - DIFERENÇAS SALARIAIS (HSBC)",
        "REAJUSTE 10,8% - CCT 96/97 (CREDIREAL)"
      ]
    },
    {
      name: "BANCO SAFRA",
      leftColumn: [
        "PRÉ-CONTRATAÇÃO DE HORAS EXTRAS",
        "INTEGRAÇÃO DO HIRING BONUS (LUVAS)",
        "CAMPANHA GERENTE REMOTO EMPRESAS - DIFERENÇAS"
      ],
      rightColumn: [
        "CAMPANHA REMOTO GERENTE EMPRESAS - INTEGRAÇÃO",
        "SAFRA PERFORMANCE - DIFERENÇAS",
        "SAFRA PERFORMANCE - INTEGRAÇÃO"
      ]
    },
    {
      name: "BANCO DAYCOVAL",
      leftColumn: [
        "PRÉ-CONTRATAÇÃO DE HORAS EXTRAS",
        
      ],
      rightColumn: [
        "SOBREAVISO"
      ]
    }
  ];

  return (
    <Box as="section" id="services" py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack gap={12}>
          {/* Título */}
          <Heading as="h2" size="lg" textAlign="center" color="gray.800">
            PRINCIPAIS PEDIDOS BANCÁRIOS
          </Heading>

          {/* Coluna Esquerda */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
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
                  <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      {bank.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                    <Box>
                      <VStack align="stretch" gap={2}>
                        {bank.leftColumn?.map((item, idx) => (
                          <Box key={idx} p={2} bg="gray.50" borderRadius="md">
                            {item}
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                    <Box>
                      <VStack align="stretch" gap={2}>
                        {bank.rightColumn?.map((item, idx) => (
                          <Box key={idx} p={2} bg="gray.50" borderRadius="md">
                            {item}
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </Grid>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box >
  )
}