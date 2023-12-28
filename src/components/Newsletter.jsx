import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Image,
  ListIcon,
  ListItem,
  List,
} from '@chakra-ui/react'

import { MdCheckCircle } from 'react-icons/md'

const LoginPage = () => {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        h={{ base: 'auto', md: '75%' }}
        w={{ base: '100%', md: '61%' }}
        bg="white"
        boxShadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        {/* Image for mobile */}
        <Box
          display={{ base: 'block', md: 'none' }}
          flex="1"
          textAlign="center"
          mt={{ base: 8, md: 0 }}
        >
          <Image
            src="/images/illustration-sign-up-mobile.svg"
            maxW="100%"
            maxH={{ base: '300px', md: 'none' }}
            objectFit="contain"
          />
        </Box>

        {/* Left side: Text */}
        <Box
          flex="1"
          p={{ base: 8, md: 12 }}
          color="black"
          mt={{ base: 0, md: 0 }}
        >
          <Heading as="h2" mb={4}>
            Stay updated!
          </Heading>
          <p fontSize={{ base: 'sm', md: 'md' }}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <List spacing={2} mt={4}>
            <ListItem fontSize={{ base: 'sm', md: 'md' }}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Product discovery and building what matters
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md' }}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Measuring to ensure updates are a success
            </ListItem>
            <ListItem fontSize={{ base: 'sm', md: 'md' }}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              And much more!
            </ListItem>
          </List>
          <Input
            mt={5}
            border="2px"
            borderColor="gray.200"
            placeholder="Email"
            type="email"
            mb={6}
          />
          <Button
            colorScheme="blue"
            width="100%"
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Subscribe to monthly Newsletter
          </Button>
        </Box>

        {/* Right side: Image */}
        <Flex
          flex="1"
          justifyContent="center"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Box maxW="100%" maxH="100%" mx="auto">
            <Image
              src="/images/illustration-sign-up-desktop.svg"
              maxH="410px"
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LoginPage
