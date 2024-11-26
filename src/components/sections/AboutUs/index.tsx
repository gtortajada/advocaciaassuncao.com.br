{/*Sobre nós Section*/}

// src/components/sections/AboutUs/index.tsx
import { Box, Container, Heading, Text, Grid, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function AboutUs() {
  const bgOverlay = 'rgba(0, 0, 0, 0.5)'

  return (
    <Box
      as="section"
      id="about"
      py={16}
      bg="gray.50"
    >
      <Container maxW="container.xl">
        <VStack gap={12} align="stretch">
          {/* Header */}
          <Heading
            as="h5"
            size="lg"
            textAlign="center"
            color="blue.600"
          >
            CONHEÇA NOSSO ESCRITÓRIO
          </Heading>

          {/* Content */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={8}
            alignItems="start"
          >
            {/* Foto e texto sobreposto */}
            <Box position="relative" h="500px">
              <Box
                position="relative"
                w="100%"
                h="100%"
                overflow="hidden"
              >
                <Image
                  src="/fotoperfil.jpg"
                  alt="Foto de perfil do João Pedro Assunção"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                {/* Overlay */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg={bgOverlay}
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

            {/* Texto do escritório */}
            <Box>
              <Text
                fontSize="lg"
                lineHeight="tall"
                color="gray.700"
              >
                Especializada em direito trabalhista bancário, 
                a Advocacia Assunção é reconhecida por sua 
                atuação diligente e estratégica. Nossa prática 
                é orientada pelos valores de excelência, 
                inovação, dedicação e transparência, que guiam 
                cada etapa do processo. Com atendimento remoto 
                para clientes em todo o Brasil, oferecemos uma 
                experiência eficiente e resultados consistentes. 
                Com dedicação, defendemos os direitos dos 
                trabalhadores bancários, garantindo justiça 
                e equidade no ambiente de trabalho.
              </Text>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}

{/* <section id="sobreNos" className={styles.sobrenos}>
<div className={styles.contentsobrenos}>
  <div className={styles.headersobrenos}>
    <h5>CONHEÇA NOSSO ESCRITÓRIO</h5>
  </div>
  <div className={styles.corposobrenos}>
    <div className={styles.joao}>
      <Image
        src="/fotoperfil.jpg" alt="Foto de erfil do João Pedro Assunção"
        fill className={styles.imagejoao} />
      <div className={styles.overlay}></div>
      <p className={styles.textoimagemjoao}>João Pedro Assunção é um advogado especializado<br />
        em causas trabalhistas bancárias. Com uma atuação<br /> sólida na área, ele oferece estratégias<br />
        personalizadas, sempre focado em alcançar os melhores resultados.</p>
    </div>
    <div className={styles.textoescritorio}>
      <p>Especializada em direito trabalhista bancário,<br />a Advocacia Assunção é reconhecida por sua<br />
        atuação diligente e estratégica. Nossa prática<br />é orientada pelos valores de excelência,<br />
        inovação, dedicação e transparência, que guiam<br />cada etapa do processo. Com atendimento remoto<br />
        para clientes em todo o Brasil, oferecemos uma<br /> experiência eficiente e resultados consistentes.<br />
        Com dedicação, defendemos os direitos dos<br />trabalhadores bancários, garantindo justiça<br />
        e equidade no ambiente de trabalho.</p>
    </div>
  </div>
</div>

</section> */}