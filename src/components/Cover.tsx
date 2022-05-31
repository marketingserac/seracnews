import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

export function Cover() {
  return (
    <Box
      id="sobre"
      maxW="100%"
      pl={["5%", "10%", "15%"]}
      pr={["5%", "10%", "15%"]}
      pt="1%"
      pb="1%"
    >
      <Flex
        backgroundColor={"blue.900"}
        p="20px"
        flexDirection={"column"}
        borderRadius="15px"
      >
        <Flex
          flex="1"
          flexDirection={"column"}
          justify="center"
          align={"center"}
          color="white"
        >
          <Heading textAlign={"center"} fontSize={["12vw", "8vw", "6vw"]}>
            MISSÃO CONTADOR
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={["5vw", "4vw", "3vw", "1.6vw"]}
            lineHeight={["5.2vw", "4.2vw", "3.2vw", "1.9vw"]}
            maxW={["100%", "100%", "100%", "90%"]}
            color="white"
            mb="20px"
          >
            Nos dias 20 e 21 de maio aconteceu mais uma edição do{" "}
            <Box as="span" fontFamily={"ComoBold"}>
              Missão Contador
            </Box>
            . O evento reuniu Martins, Jhonny, Carla, Thiago Herance, Marcelo
            Lunetta, Paulo Augusto, Rhoney Varela e Vinicius Loprete, para falar
            sobre as habilidades, técnicas e estratégias para o crescimento das
            empresas.
          </Text>
        </Flex>
        <Flex flex="1">
          <Image src="./assets/images/MissaoContadorfoto.png" w="100%" alt="" />
        </Flex>
      </Flex>
    </Box>
  );
}
