import { Box, Button, Heading, Text, VStack, HStack, Container } from '@chakra-ui/react'
import { MessageCircle } from 'lucide-react'

export default function Contact() {
 return (
   <Box 
     as="section" 
     id="contact"
     py={16}
     bg="#E9DAC6"
   >
     <Container maxW="container.xl">
       <VStack
         spacing={4}
         align="center"
         textAlign="center"
       >
         <Text
           fontSize="xs"
           color="#2e1012"
           textTransform="uppercase"
         >
           Contato
         </Text>

         <Heading 
           as="h6" 
           size="md"
           color="#ffe4a2"
           textTransform="uppercase"
         >
           Fale conosco
         </Heading>

         <Text fontSize="lg" maxW="600px" mb={8}>
           Para esclarecer suas dúvidas e saber as possibilidades do seu caso, 
           faça já uma consulta diretamente com o João Pedro
         </Text>

         <HStack spacing={6}>
           <VStack>
             <Button 
               leftIcon={<MessageCircle />}
               colorScheme="whatsapp"
               size="lg"
               onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI')}
             >
               Entre em contato
             </Button>
           </VStack>

           <VStack>
             <Button 
               colorScheme="blue"
               size="lg"
               onClick={() => window.location.href = 'mailto:seu@email.com'}
             >
               E-mail
             </Button>
           </VStack>
         </HStack>
       </VStack>
     </Container>
   </Box>
 )
}