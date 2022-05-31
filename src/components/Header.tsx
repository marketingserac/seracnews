import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      id="sobre"
      maxW="100%"
      pl={["5%", "10%", "15%"]}
      pr={["5%", "10%", "15%"]}
      pt="1%"
      pb="1%"
    >
      <Flex flexDirection={"column"} borderRadius="15px">
        <Flex flex="1">
          <Image src="./assets/images/Header.svg" w="100%" alt="" />
        </Flex>
      </Flex>
    </Box>
  );
}
