import { useState } from 'react';
import {
  Link,
  Text,
  Flex,
  Box,
  VStack,
  Input,
  Button,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { Container } from '../components/Container';
import Navigation from '../components/Navigation';
import { generateNRIC, validate } from 'nric';

const Index = (props) => {
  const [value, setValue] = useState('');

  const { onCopy } = useClipboard(value);
  const toast = useToast();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCopy = () => {
    onCopy();
    toast({
      title: 'Copied',
      status: 'info',
      position: 'bottom',
      duration: 500,
    });
  };

  const onGenerate = () => {
    setValue(generateNRIC());
  };

  let borderColor = 'inherit';
  if (value.length === 9) {
    borderColor = validate(value) ? 'green.600' : 'red.600';
  }

  return (
    <Container>
      <Navigation />

      <Box m={[24, 24, 36, 24]} alignItems="center" justifyItems="center">
        <VStack spacing={6} alignItems="center" justifyItems="center">
          <h1>NRIC Generator</h1>

          <Text fontSize="20px" lineHeight="36px">
            A simple utility for developers to validate or generate Singapore
            NRIC numbers based on the check digit. Available as a {''}
            <Link color="blue.500" href="https://www.npmjs.com/package/nric">
              package on NPM
            </Link>
            .
          </Text>
          <Flex alignItems="center" justifyItems="center">
            <Input
              placeholder="S1234567A"
              size="lg"
              width="170px"
              fontSize="20px"
              value={value}
              onChange={handleChange}
              maxLength={9}
              borderColor={borderColor}
              borderWidth={2}
              _focus={{ borderColor: borderColor }}
            />
            <Button
              size="lg"
              onClick={handleCopy}
              ml={2}
              variant="outline"
              _focus={{ outline: 'none' }}
              disabled={value.length !== 9}
            >
              Copy
            </Button>
          </Flex>
          <Button colorScheme="blue" size="lg" onClick={onGenerate}>
            Generate
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
