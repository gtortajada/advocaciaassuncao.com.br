import Image from 'next/image'
import { Box, Container, Heading, Button, VStack, Divider } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
      <Box as="section" id="home" position="relative" height="100vh" overflow="hidden">
        <Box display={{ base: 'block', lg: 'block' }}>
          <Image
            src="/hero-bg-mobile.jpg"
            alt="Background Mobile e Tablet"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: -1,
            }}
          />
        </Box>

        <Box display={{ base: 'none', xl: 'block' }}>
          <Image
            src="/hero-bg.jpg"
            alt="Background Desktop"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: -1,
            }}
          />
        </Box>

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.3)"
          zIndex={0}
        />

        <Container
          maxW="container.xl"
          position="relative"
          zIndex={1}
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          pb={8}
        >
          <VStack
            flex="1"
            gap={8}
            textAlign={{ base: 'center', md: 'left' }}
            justify="center"
            alignItems={{ base: 'center', md: 'flex-start' }}
            pl={{ base: 0, md: 20 }}
            mt={{ base: "10vh", md: "15vh" }}
          >
            <VStack alignItems={{ base: 'center', md: 'flex-start' }} gap={4} width="100%">
              <Box>
                <Heading
                  size={{ base: '3xl', md: '2xl' }}
                  lineHeight="1.2"
                  maxW="3xl"
                  color="#ffe4a2"
                  fontFamily="var(--font-free-serif)"
                  px={{ base: 4, md: 0 }}
                >
                  Defendemos seus direitos trabalhistas < br />bancários com excelência.
                </Heading>
                <Divider
                  my={4}
                  borderColor="#ffe4a2"
                  width={{ base: "80%", md: "60%" }}
                  opacity={0.7}
                  mx={{ base: "auto", md: 0 }}
                />
              </Box>
              <Heading
                size={{ base: 'lg', md: 'lg' }}
                lineHeight="1.2"
                maxW="3xl"
                color="white"
                fontFamily="var(--font-montserrat)"
                px={{ base: 4, md: 0 }}
              >
                Atendemos todo o Brasil.<br />
                Resultados comprovados!
              </Heading>
            </VStack>
            <Button
              size="lg"
              colorScheme="blue"
              onClick={() => window.open('https://wa.me/5544988592720', '_blank')}
            >
              Fale com nosso especialista
            </Button>
          </VStack>

          {/* <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={5}
            px={{ base: 4, md: 0 }}
            mt="auto"
          >
            <Box
              p={6}
              bg="rgba(255, 255, 255, 0.8)"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Image
                src="/icons/estrategia-e-precisao.png"
                alt="Ícone de Estratégia e Precisão"
                width={50}
                height={50}
                style={{ margin: '0 auto 6px' }}
              />
              <Heading size="sm">Estratégia e precisão</Heading>
            </Box>
            <Box
              p={6}
              bg="rgba(255, 255, 255, 0.8)"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Image
                src="/icons/atendimento-online.png"
                alt="Ícone de Atendimento Online"
                width={50}
                height={50}
                style={{ margin: '0 auto 6px' }}
              />
              <Heading size="sm">Atendimento online facilitado</Heading>
            </Box>
            <Box
              p={6}
              bg="rgba(255, 255, 255, 0.8)"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Image
                src="/icons/recursos.png"
                alt="Ícone de Recursos"
                width={50}
                height={50}
                style={{ margin: '0 auto 6px' }}
              />
              <Heading size="sm">Recursos até a última instância</Heading>
            </Box>
          </SimpleGrid> */}
        </Container>
      </Box>
    </>
  )
}

export default HomePage