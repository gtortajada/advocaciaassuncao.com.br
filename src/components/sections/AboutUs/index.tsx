import { Box, Container, Heading, Text, Grid, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <Box
      as="section"
      id="about"
      py={16}
      bg="#E9DAC6"
    >
      <Container maxW="container.xl" px={10}>
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={8}
          alignItems="center"
        >
          <Box
            position="relative"
            h={{ base: "500px", md: "700px" }}
            border="4px solid"
            borderColor="#edcb77"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="/fotoperfil.jpg"
              alt="Foto de perfil do João Pedro Assunção"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center'
              }}
              priority
              quality={35}
            />
          </Box>

          <Box>
            <VStack align="flex-start" gap={1} mb={6}>
              <Heading as="h2" size="xl" color="#2e1012">
                João Pedro Assunção
              </Heading>
              <Heading as="h3" size="md" color="#2e1012">
                Sócio Fundador
              </Heading>
            </VStack>

            <Text
              fontSize="md"
              lineHeight="tall"
              color="#2e1012"
            >
              João Pedro Assunção é advogado especializado em Direito
              Trabalhista Bancário e Direito Previdenciário. Com mais de
              R$ 20.000.000,00 em valor protocolado, sua atuação é pautada
              pela análise criteriosa de cada caso, pelo desenvolvimento de
              estratégias jurídicas personalizadas e pelo compromisso em
              buscar as melhores soluções para seus clientes.<br /><br />
              
              Seu trabalho é fundamentado em um atendimento próximo e
              transparente, oferecendo orientação clara durante todas as
              etapas do processo e construindo estratégias jurídicas
              alinhadas às particularidades de cada situação, sempre com
              ética, responsabilidade e dedicação.<br /><br />
              À frente da Advocacia Assunção, coordena um escritório
              especializado em Direito Trabalhista Bancário e Direito
              Previdenciário, reconhecido pela atuação técnica, estratégica
              e pelo atendimento humanizado. Com suporte jurídico para
              clientes em todo o Brasil, o escritório alia excelência,
              transparência e inovação para oferecer uma experiência
              eficiente e focada na defesa dos direitos de trabalhadores
              bancários e segurados da Previdência Social.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
