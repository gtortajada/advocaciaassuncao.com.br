import { Box, Container, Heading, Text, Grid, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutUs() {
  const [isImageVisible, setIsImageVisible] = useState(false)
  return (
    <Box
      as="section"
      id="about"
      py={16}
      bg="#E9DAC6"
    >
      <Container maxW="container.xl" px={10}>
        <VStack gap={12} align="center">
          <VStack gap={4} textAlign="center">
            <Heading
              as="h2"
              fontSize="sm"
              color="#2e1012"
              textTransform="uppercase"
            >
              Sobre nós
            </Heading>

            <Heading
              as="h5"
              size="lg"
              textAlign="center"
              color="#2e1012"
            >
              CONHEÇA NOSSO ESCRITÓRIO
            </Heading>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', md: '3fr 2fr' }}
            gap={8}
            alignItems="center"
          >
            <Box position="relative" h={{ base: "500px", md: "700px" }}>
              <Box
                position="relative"
                w="100%"
                h="100%"
                overflow="hidden"
                transition="all 0.3s ease"
                onClick={() => setIsImageVisible(!isImageVisible)}
                cursor="pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Image
                  src="/fotoperfil.jpg"
                  alt="Foto de perfil do João Pedro Assunção"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                  priority
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg={isImageVisible ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)"}
                  opacity={isImageVisible ? 0 : 0.7}
                  transition="all 0.3s ease"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Text
                    color="white"
                    fontSize="lg"
                    textAlign="center"
                    lineHeight="tall"
                  >
                    João Pedro Assunção é um advogado especializado
                    em causas trabalhistas bancárias. Com uma atuação
                    sólida na área, ele oferece estratégias
                    personalizadas, sempre focado em alcançar os melhores resultados.
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box>
              <Text
                fontSize="lg"
                lineHeight="tall"
                color="gray.900"
              >
                Especializada em direito trabalhista bancário,
                a Advocacia Assunção é reconhecida por sua
                atuação diligente e estratégica.<br /><br /> Nossa prática
                é orientada pelos valores de excelência,
                inovação, dedicação e transparência, que guiam
                cada etapa do processo.<br /><br /> Com atendimento remoto
                para clientes em todo o Brasil, oferecemos uma
                experiência eficiente e resultados consistentes.<br /><br />
                Com dedicação, defendemos os direitos dos
                trabalhadores bancários, garantindo justiça
                e equidade no ambiente de trabalho.
              </Text>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box >
  )
}