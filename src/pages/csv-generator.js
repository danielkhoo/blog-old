import { useState } from 'react';
import {
  Link,
  Text,
  Flex,
  Box,
  VStack,
  HStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { Container } from '../components/Container';
import Navigation from '../components/Navigation';
import { saveAs } from 'file-saver';
import { fake } from 'faker';

const DEFAULT_COL_NUM = 2;

const COLUMN_TYPES = {
  INDEX: 'index',
  NAME: 'name',
  AMOUNT: 'amount',
  DATE: 'date',
};

const Index = (props) => {
  const [tableOptions, setTableOptions] = useState(
    Array(DEFAULT_COL_NUM).fill('Index')
  );

  const [tableData, setTableData] = useState(Array(DEFAULT_COL_NUM).fill([]));
  const [numberOfRows, setNumberOfRows] = useState(2);

  const handleNumberOfCols = (value) => {
    if (value >= 4) return;

    let updatedTableOptions = [...tableOptions];
    if (value < tableOptions.length) {
      updatedTableOptions = updatedTableOptions.slice(0, value);
    } else {
      updatedTableOptions.push(null);
    }
    setTableOptions(updatedTableOptions);
  };
  const handleNumberOfRows = (value) => {
    setNumberOfRows(Number(value));
  };

  const handleColumnSelection = (event, index) => {
    // Update table options state if select is changed
    const updatedTableOptions = [...tableOptions];
    updatedTableOptions[index] = event.target.value;
    setTableOptions(updatedTableOptions);
  };

  const onGenerate = () => {
    let data = [];
    for (let row = 1; row <= numberOfRows; row++) {
      let rowData = [];
      tableOptions.forEach((type) => {
        if (type === COLUMN_TYPES.NAME)
          rowData.push(fake(`{{name.firstName}}`));
        else if (type === COLUMN_TYPES.AMOUNT)
          rowData.push(fake(`{{finance.amount}}`));
        else if (type === COLUMN_TYPES.DATE)
          rowData.push(fake(`{{date.recent}}`));
        else rowData.push(row);
      });
      data.push(rowData);
    }
    setTableData(data);
  };

  const onDownload = () => {
    // Join cells with comma and rows withe line breaks
    const output = tableData.map((rowData) => `${rowData.join(',')}\n`);
    console.log(output);
    var blob = new Blob(output, {
      type: 'text/csv;charset=utf-8',
    });
    saveAs(blob, 'generated.csv');
  };

  return (
    <Container>
      <Navigation />

      <Box m={[24, 12, 36, 12]} alignItems="center" justifyItems="center">
        <VStack spacing={6} alignItems="center" justifyItems="center">
          <h1>CSV Generator</h1>

          <Text fontSize="20px" lineHeight="36px">
            A simple utility for developers generate csv files with FakerJS and
            File Saver.
          </Text>

          <HStack spacing={8}>
            <Flex flexDirection="column">
              <Text fontSize="20px" lineHeight="36px">
                Columns:{' '}
              </Text>
              <NumberInput
                defaultValue={2}
                min={1}
                max={4}
                onChange={handleNumberOfCols}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="20px" lineHeight="36px">
                Rows:{' '}
              </Text>
              <NumberInput
                defaultValue={2}
                min={1}
                max={10}
                onChange={handleNumberOfRows}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </HStack>

          <HStack spacing={8}>
            <Button colorScheme="blue" size="lg" onClick={onGenerate}>
              Generate
            </Button>
            <Button colorScheme="green" size="lg" onClick={onDownload}>
              Download
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                {tableOptions.map((selectValue, index) => (
                  <Th>
                    <Text fontSize="16px" lineHeight="24px" textAlign="center">
                      {' '}
                    </Text>
                    <Select onChange={(e) => handleColumnSelection(e, index)}>
                      <option value={COLUMN_TYPES.INDEX}>Index</option>
                      <option value={COLUMN_TYPES.NAME}>Name</option>
                      <option value={COLUMN_TYPES.AMOUNT}>Amount</option>
                      <option value={COLUMN_TYPES.DATE}>Date</option>
                    </Select>
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((rowData) => (
                <Tr>
                  {rowData.map((cell) => (
                    <Td>{cell}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
