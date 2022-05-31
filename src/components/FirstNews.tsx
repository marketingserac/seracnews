import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

export function FirstNews() {
  return (
    <Box id="sobre" maxW="100%" pl="10%" pr="10%" pt="1%" pb="1%">
      <Flex backgroundColor={"blue.300"} p="20px">
        <Flex flex="1" flexDirection={"column"} justify="center" pr="50px">
          <Heading textAlign={"center"}>Notícia Um</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </Text>
        </Flex>
        <Flex flex="0.4">
          <Image src="./assets/images/img.png" w="300px" alt="" />
        </Flex>
      </Flex>
    </Box>
  );
}
