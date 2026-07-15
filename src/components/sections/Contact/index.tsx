import { Box, Grid, Heading, Text, VStack, Container } from "@chakra-ui/react";

import ContactForm from "./ContactForm";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const localNumber = WHATSAPP_NUMBER.slice(2);
const displayPhone = `(${localNumber.slice(0, 2)}) ${localNumber.slice(2, 7)}-${localNumber.slice(7)}`;

export default function Contact() {
  return (
    <Box as="section" id="contact" py={16} bg="#2e1012">
      <Container maxW="container.xl" px={4}>
        <VStack spacing={4} align="center" textAlign="center" mb={12}>
          <Heading as="h6" size="md" color="#fff4e4" textTransform="uppercase">
            Fale conosco
          </Heading>
          <Text fontSize="lg" maxW="600px" color="white">
            Para esclarecer suas dúvidas e conferir as possibilidades do seu
            caso, preencha o formulário abaixo. Enviaremos sua mensagem
            diretamente pelo WhatsApp.
          </Text>
        </VStack>

        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10}>
          <ContactForm />

          <VStack align="flex-start" spacing={8} color="#C0C0C0">
            <VStack align="flex-start" spacing={1}>
              <Text fontWeight={700}>Telefone</Text>
              <Text>{displayPhone}</Text>
            </VStack>

            <VStack align="flex-start" spacing={1}>
              <Text fontWeight={700}>E-mail</Text>
              <Text>joaopedro.assuncao.adv@gmail.com</Text>
            </VStack>

            <VStack align="flex-start" spacing={1}>
              <Text fontWeight={700}>Horário de atendimento</Text>
              <Text>
                Segunda a sexta-feira, das 9h às 12h e das 14h às 17h30
              </Text>
            </VStack>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}
