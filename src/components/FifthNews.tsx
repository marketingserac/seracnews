import { Box, Heading, Text, Image, Divider, Flex } from "@chakra-ui/react";

export function FifthhtNews() {
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
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            justifyContent={"center"}
            justifyItems="center"
            alignContent={"center"}
            alignItems="center"
          >
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              // justifyItems="center"
              // alignContent={"center"}
              // alignItems="center"
              textAlign={"justify"}
            >
              <Heading
                textAlign={"justify"}
                fontSize={["6.4vw", "5.55vw", "4.6vw", "3.65vw", "4.1vw"]}
                color="blue.900"
              >
                Encantar para Crescer!
              </Heading>
              <Text
                mt="20px"
                textAlign={"justify"}
                fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
                lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
                mr={["0", "0", "15px"]}
              >
                Aconteceu o segundo módulo do treinamento Encantar para Crescer,
                com ênfase no atendimento ao cliente. Compartilhamos
                conhecimentos, fizemos dinâmicas, celebramos a Páscoa com
                entregas de ovos de chocolate e, no dia, organizamos na sala
                FODA o stand de degustação e venda de queijos.
              </Text>
            </Box>
            <Image
              src="./assets/images/EncantarparaCrescer01.png"
              w="120%"
              alt=""
              mt="30px"
              mb="30px"
              ml={["0", "0", "10px"]}
            />
          </Box>
          <Box
            flexDirection={["column", "column", "row"]}
            display="flex"
            justifyContent={"center"}
            justifyItems="center"
            alignContent={"center"}
            alignItems="center"
          >
            <Box
              display={"flex"}
              flexDirection={["row"]}
              w={["101%", "100%", "55%"]}
            >
              <Image
                src="./assets/images/EncantarparaCrescer02.png"
                w={["30%", "35%"]}
                alt=""
                mt="10px"
                mb="30px"
                ml={["0", "0", "10px"]}
              />
              <Image
                src="./assets/images/EncantarparaCrescer03.png"
                w={["65%", "90%"]}
                alt=""
                mt="10px"
                mb="30px"
                ml={["10px", "10px", "10px"]}
              />
            </Box>
            <Image
              src="./assets/images/EncantarparaCrescer04.png"
              w={["100%", "90%", "37.5%"]}
              alt=""
              mt="10px"
              mb="30px"
              ml={["10px", "10px", "10px"]}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
