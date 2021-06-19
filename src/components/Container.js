import { Flex } from '@chakra-ui/react';

export const Container = (props) => {
  return (
    <Flex minHeight="100vh" direction="column" justifyContent="start" alignItems="center">
      <Flex maxWidth="800px" width="100%" minHeight="100vh" paddingBottom="80px" direction="column" {...props} />
    </Flex>
  );
};
