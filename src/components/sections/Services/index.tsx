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
import { SendHorizontal, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface RequestItemProps {
  text: string;
}

interface BankItemProps {
  item: string;
}

const RequestItem = ({ text }: RequestItemProps) => (
  <HStack spacing={3} justify="left" w="full">
    <SendHorizontal size={12} color="#2e1012" />
    <Text>{text}</Text>
  </HStack>
);

const BankItem = ({ item }: BankItemProps) => (
  <Text>{item}</Text>
);

export default function Services() {
  const [seeAllRequests, setSeeAllRequest] = useState(false);
  const allRequests = [
    // Primeira coluna
    "HORAS EXTRAS (7ª e 8ª)",
    "EQUIPARAÇÃO SALARIAL",
    "DANOS MORAIS",
    "EXPOSIÇÃO DE RANKING DE METAS",
    "VENDA OBRIGATÓRIA DE FÉRIAS",
    "ASSÉDIO MORAL",
    "HORAS EXTRAS ALÉM DA 8ª",
    "HORAS EXTRAS INTERJORNADA",
    "HORAS EXTRAS INTRAJORNADAS",
    "PLR",
    "DESVIO DE FUNÇÃO",
    // Segunda coluna
    "ARTIGO 384 (INTERVALO DA MULHER)",
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
    "ADICIONAL DE TRANSFERÊNCIA",
  ];

  const displayedRequests = seeAllRequests ? allRequests : allRequests.slice(0, 6);

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
      <Container maxW="container.xl" px={10}>
        <VStack gap={8}>
        <VStack gap={4} textAlign="center">
          <Heading
            as="h2"
            fontSize="sm"
            color="#2e1012"
            textTransform="uppercase"
          >
            Áreas de atuação
          </Heading>
          <Heading as="h2" size="lg" textAlign="center" color="gray.800">
            PRINCIPAIS PEDIDOS BANCÁRIOS
          </Heading>
          </VStack>

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
            {displayedRequests.map((request, index) => (
              <RequestItem key={index} text={request} />
            ))}
          </Grid>
          {!seeAllRequests && <Button
            size="md"
            // bg="#C0C0C0"
            // color="gray.800"
            // _hover={{
            // bg: "#A8A8A8",
            // boxShadow: "md"
            // }}
            // boxShadow="sm"

            onClick={() => setSeeAllRequest(true)}
          >
            Ver todos
          </Button>}

          <Heading as="h2" size="lg" textAlign="center" color="gray.800">
            PEDIDOS ESPECÍFICOS DE CADA BANCO
          </Heading>

          <Box maxW="4xl" w="full" mx="auto">
            <Accordion allowToggle w="auto">
              {banks.map((bank, index) => (
                <AccordionItem key={index}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          py={4}
                          _hover={{ bg: 'gray.50' }}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box flex="1" textAlign="center" fontWeight="bold">
                            {bank.name}
                          </Box>
                          <Box
                            transform={isExpanded ? 'rotate(-180deg)' : 'rotate(0)'}
                            transition="transform 0.2s"
                          >
                            <ChevronDown size={20} />
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
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Button
            size="lg"
            bg="#edcb77"
            color="black"
            px={8}
            onClick={() => window.open("https://wa.me/5544988592720?text=Olá%20João%20Pedro!%0A%0AGostaria%20de%20agendar%20um%20horário%20para%20discutir%20meu%20caso.")}
          >
            Entre em contato
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}