import { Box, Button, Heading, Text, VStack, Container, SimpleGrid } from '@chakra-ui/react'
import { MessageCircleMore, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <Box
      as="section"
      id="contact"
      py={16}
      bg="#2e1012"
    >
      <Container maxW="container.xl" px={4}>
        <VStack
          spacing={4}
          align="center"
          textAlign="center"
          mb={12}
        >
          <Heading
            as="h6"
            size="md"
            color="#fff4e4"
            textTransform="uppercase"
          >
            Fale conosco
          </Heading>
          <Text fontSize="lg" maxW="600px" color="white">
            Para esclarecer suas dúvidas e conferir as possibilidades do seu caso,
            entre em contato hoje mesmo.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack 
            spacing={4} 
            align={{ base: "center", md: "center" }}
            textAlign="center"
          >
            <Text color="white" fontSize="lg">
              Atendemos de segunda a sexta-feira das
              <br />
              9h às 12h e 14 às 17:30.
            </Text>
            <Button
              leftIcon={<MessageCircleMore />}
              colorScheme="green"
              size="lg"
              onClick={() => window.open("https://wa.me/5544988592720?text=Olá%20João%20Pedro!%0A%0AGostaria%20de%20agendar%20um%20horário%20para%20discutir%20meu%20caso.")}
            >
              WhatsApp
            </Button>
          </VStack>

          <VStack 
            spacing={4}
            align={{ base: "center", md: "center" }}
            textAlign="center"
          >
            <Text color="white" fontSize="lg">
              Se preferir enviar informações sobre seu caso,<br />
              nos envie um e-mail:
            </Text>
            <Button
              leftIcon={<Mail />}
              colorScheme="blue"
              size="lg"
              onClick={() => window.location.href = 'mailto:joaopedro.assuncao.adv@gmail.com?subject=Consulta%20Jurídica&body=Olá%20João%20Pedro!%0A%0AGostaria%20de%20discutir%20meu%20caso.'}
            >
              E-mail
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}