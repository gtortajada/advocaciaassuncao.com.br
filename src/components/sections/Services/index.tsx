import React from 'react';
import {
  Box,
  Container,
  Heading,
  Button,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Grid,
  HStack,
  Text,
} from '@chakra-ui/react';
import { SendHorizontal } from 'lucide-react';

const RequestItem = ({ text }) => (
  <HStack spacing={3} justify="left" w="full">
    <SendHorizontal size={12} color="#2e1012" />
    <Text>{text}</Text>
  </HStack>
);

const BankItem = ({ item }) => (
  <Text>{item}</Text>
);

export default function Services() {
  const allRequests = [
    // Primeira coluna
    "HORAS EXTRAS (7ª e 8ª)",
    "HORAS EXTRAS ALÉM DA 8ª",
    "HORAS EXTRAS INTERJORNADA",
    "HORAS EXTRAS INTRAJORNADAS",
    "PLR",
    "ARTIGO 384 (INTERVALO DA MULHER)",
    "DESVIO DE FUNÇÃO",
    "EQUIPARAÇÃO SALARIAL",
    // Segunda coluna
    "DANOS MORAIS",
    "ASSÉDIO MORAL",
    "DANO MATERIAL",
    "DOENÇA OCUPACIONAL",
    "PERICULIDADE",
    "ACIDENTE DE TRABALHO",
    "USO DE VEÍCULO PARTICULAR",
    "REINTEGRAÇÃO AO EMPREGO",
    // Terceira coluna
    "DANO EXISTENCIAL",
    "ANÁLISE E REVERSÃO DE JUSTA CAUSA",
    "REINTEGRAÇÃO POR TUTELA DE URGÊNCIA",
    "PROTESTO INTERRUPTIVO DE PRESCRIÇÃO",
    "REINTEGRAÇÃO AO EMPREGO",
    "PLANO DE SAÚDE",
    "ADICIONAL DE TRANSFERÊNCIA",
    "VENDA OBRIGATÓRIA DE FÉRIAS"
  ];

  const banks = [
    {
      name: "BANCO ITAÚ",
      leftColumn: [
        "AGIR/GERA - RECÁLCULO",
        "AUSÊNCIA DE PAGAMENTO AGIR/GERA",
        "AGIR/GERA - INTEGRAÇÃO",
        "DIFERENÇAS SALARIAIS (RP 52)",
        "DIFERENÇAS DAS COMISSÕES",
        "DIFERENÇAS DAS VERBAS SEMESTRAIS",
        "CONGELAMENTO DO ATS/ANUÊNIOS",
      ],
      rightColumn: [
        "ATS/ANUÊNIOS - INTEGRAÇÃO",
        "AUXILIO ALIMENTAÇÃO - INTEGRAÇÃO",
        "CONTRIBUIÇÃO PARA FUNDO DE PENSÃO",
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
        "GERENTE REMOTO EMPRESAS (DIFERENÇAS E INTEGRAÇÃO)",
      ],
      rightColumn: [
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
          <Heading as="h2" size="lg" textAlign="center" color="gray.800">
            PRINCIPAIS PEDIDOS BANCÁRIOS
          </Heading>

          <Grid 
            templateColumns={{ 
              base: "1fr",
              md: "repeat(2, 1fr)", 
              lg: "repeat(3, 1fr)" 
            }}
            gap={4}
            w="full"
            autoFlow="row dense"
          >
            {allRequests.map((request, index) => (
              <RequestItem key={index} text={request} />
            ))}
          </Grid>

          <Heading as="h2" size="lg" textAlign="center" color="gray.800">
            PEDIDOS ESPECÍFICOS DE CADA BANCO
          </Heading>

          <Accordion allowToggle>
            {banks.map((bank, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                    <Box flex="1" textAlign="center" fontWeight="bold">
                      {bank.name}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                    <VStack align="stretch" gap={2}>
                      {bank.leftColumn?.map((item, idx) => (
                        <BankItem key={idx} item={item} />
                      ))}
                    </VStack>
                    <VStack align="stretch" gap={2}>
                      {bank.rightColumn?.map((item, idx) => (
                        <BankItem key={idx} item={item} />
                      ))}
                    </VStack>
                  </Grid>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Button
            size="lg"
            colorScheme="blue"
            px={8}
            onClick={() => window.open('https://wa.me/5544988592720')}
          >
            Fale com um especialista
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}