import { Box, Heading, Text, Image, Flex, Divider } from "@chakra-ui/react";

export function ImportantNews() {
  return (
    <Box
      id="sobre"
      maxW="100%"
      pl={["5%", "10%", "15%"]}
      pr={["5%", "10%", "15%"]}
      pt="1%"
      pb="1%"
    >
      <Divider
        orientation="vertical"
        backgroundColor={"blue.900"}
        borderColor="blue.900"
        opacity={1}
        borderWidth={"3px"}
        borderRadius="1px"
      />
      <Flex w="100%" flexDirection={["column", "column", "row"]} mt="20px">
        <Flex flex="1" flexDirection={"column"} pr={["0", "0", "20px"]}>
          <Box>
            <Heading
              color="blue.900"
              textAlign={"left"}
              fontSize={["8.27vw", "7.4vw", "3.58vw", "3.65vw"]}
            >
              Está vindo aí:
            </Heading>
            <Text
              mt="20px"
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
            >
              Nos dias 20 e 21 de maio ocorrerá a mentoria Missão Contador. São
              habilidades valiosas sobre Gestão Estratégica de Negócios,
              Customer Experience, Vendas, Tecnologia, Marketing Digital e muito
              mais!
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={["6vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="20px"
            >
              Acesse{" "}
              <Box
                as="a"
                href="https://missaocontador.com.br/"
                target={"_blank"}
                fontFamily={"ComoBold"}
              >
                missaocontador.com.br
              </Box>{" "}
              e saiba mais.
            </Text>
            <Box display={"flex"} justifyContent="center">
              <Image
                src="./assets/images/Missao.png"
                w="90%"
                alt=""
                mt="30px"
                mb="30px"
              />
            </Box>
          </Box>
        </Flex>
        <Flex flex="0.7" flexDirection={"column"} justify="center">
          <Box
            backgroundColor={"blue.900"}
            borderRadius="15px"
            color="white"
            p="10px"
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            justifyItems="center"
            alignContent={"Center"}
            alignItems="center"
          >
            <Heading textAlign={"center"}>SERAC na Times Square</Heading>
            <Text
              color="white"
              textAlign={"center"}
              fontSize={["3.8vw", "2.7vw", "2.7vw", "1.3vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.8vw"]}
              mt="20px"
            >
              Fique ligado para acompanhar esta incrível novidade! Acompanhe a
              live pelo Instagram do{" "}
              <Box as="span" fontFamily={"ComoBold"}>
                G4 Educação
              </Box>
              , @g4educacao
            </Text>
            <Image src="./assets/images/Times.png" w="100%" alt="" mt="20px" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
