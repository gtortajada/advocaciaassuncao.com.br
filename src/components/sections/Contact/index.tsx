{/*Contato Section*/}

// src/components/sections/Contact/index.tsx
import { Box, Button, Heading, Text, VStack, HStack, Container } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Box 
      as="section" 
      id="contact"
      py={16} // padding vertical
      bg="gray.50" // ou a cor que preferir
    >
      <Container maxW="container.xl">
        <HStack
          gap={8}
          align="flex-start"
          justify="space-between"
          flexDir={{ base: 'column', md: 'row' }}
        >
          {/* Lado Esquerdo */}
          <VStack align="flex-start" gap={4} flex={1}>
            <Heading 
              as="h6" 
              size="md"
              color="blue.600" // ajuste a cor conforme sua paleta
            >
              Fale conosco
            </Heading>
            <Text fontSize="lg">
              Para esclarecer suas dúvidas e saber as possibilidades do seu caso, 
              faça já uma consulta diretamente com o João Pedro
            </Text>
          </VStack>

          {/* Lado Direito */}
          <VStack gap={6} flex={1}>
            {/* WhatsApp */}
            <VStack align="stretch" w="full">
              <Text>Entre em contato via WhatsApp</Text>
              <Button 
                colorScheme="green" // ou sua cor preferida
                size="lg"
                onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI')}
              >
                Entre em contato
              </Button>
            </VStack>

            {/* Email */}
            <VStack align="stretch" w="full">
              <Text>Entre em contato via e-mail</Text>
              <Button 
                colorScheme="blue" // ou sua cor preferida
                size="lg"
                onClick={() => window.location.href = 'mailto:seu@email.com'}
              >
                E-mail
              </Button>
            </VStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  )
}