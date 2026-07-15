import { useState } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import { WHATSAPP_NUMBER } from '@/lib/constants'

type FormData = {
  nome: string
  assunto: string
  mensagem: string
}

const initialFormData: FormData = {
  nome: '',
  assunto: '',
  mensagem: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.nome.trim()) newErrors.nome = 'Informe seu nome.'
    if (!formData.assunto.trim()) newErrors.assunto = 'Informe o assunto.'
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Informe sua mensagem.'

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    const text = [
      'Olá João Pedro!',
      '',
      `Nome: ${formData.nome}`,
      `Assunto: ${formData.assunto}`,
      '',
      formData.mensagem,
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const labelProps = {
    color: '#C0C0C0',
    fontWeight: 600,
  }

  const fieldProps = {
    bg: 'transparent',
    color: '#C0C0C0',
    borderColor: '#C0C0C0',
    _placeholder: { color: '#C0C0C0', opacity: 0.6 },
    _hover: { borderColor: '#C0C0C0' },
    _focusVisible: { borderColor: '#C0C0C0', boxShadow: '0 0 0 1px #C0C0C0' },
  }

  return (
    <VStack spacing={5} align="stretch" w="100%">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <FormControl isInvalid={!!errors.nome}>
          <FormLabel {...labelProps}>Nome{errors.nome ? ' *' : ''}</FormLabel>
          <Input
            {...fieldProps}
            value={formData.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            placeholder="Seu nome completo"
          />
          <FormErrorMessage>{errors.nome}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.assunto}>
          <FormLabel {...labelProps}>Assunto{errors.assunto ? ' *' : ''}</FormLabel>
          <Input
            {...fieldProps}
            value={formData.assunto}
            onChange={(e) => handleChange('assunto', e.target.value)}
            placeholder="Sobre o que você quer falar?"
          />
          <FormErrorMessage>{errors.assunto}</FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <FormControl isInvalid={!!errors.mensagem}>
        <FormLabel {...labelProps}>Mensagem{errors.mensagem ? ' *' : ''}</FormLabel>
        <Textarea
          {...fieldProps}
          value={formData.mensagem}
          onChange={(e) => handleChange('mensagem', e.target.value)}
          placeholder="Conte um pouco sobre seu caso"
          rows={5}
        />
        <FormErrorMessage>{errors.mensagem}</FormErrorMessage>
      </FormControl>

      <Button
        bg="#edcb77"
        color="#2e1012"
        _hover={{ bg: '#ffe4a2' }}
        size="sm"
        alignSelf="flex-start"
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </VStack>
  )
}
