import { Box, Heading, Text, Image, Divider, Flex } from "@chakra-ui/react";

export function SeventhtNews() {
  return (
    <Box
      id="sobre"
      maxW="100%"
      pl={["5%", "10%", "15%"]}
      pr={["5%", "10%", "15%"]}
      pt="1%"
      pb="1%"
    >
      <Flex>
        <Flex flex="1" flexDirection={"column"}>
          <Divider
            orientation="vertical"
            backgroundColor={"blue.900"}
            borderColor="blue.900"
            opacity={1}
            borderWidth={"3px"}
            borderRadius="1px"
          />
          <Box
            display="flex"
            justifyContent={"center"}
            justifyItems="center"
            alignContent={"center"}
            alignItems="center"
          >
            {" "}
            <Image
              src="./assets/images/MuralCompleto.png"
              w={["110%", "110%", "100%"]}
              alt=""
              mt="30px"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
