import { Box, Heading, Text, Image, Flex, Divider } from "@chakra-ui/react";

export function SecondNews() {
  return (
    <Box
      id="sobre"
      maxW="100%"
      pl={["5%", "10%", "15%"]}
      pr={["5%", "10%", "15%"]}
      pt="1%"
      pb="1%"
    >
      <Flex flexDirection={["column", "column", "row"]}>
        <Flex flex="1" flexDirection={["row"]} pr={["0", "0", "10px"]}>
          <Box pr={["0", "0%", "10px"]}>
            <Heading
              color="blue.900"
              textAlign={"center"}
              fontSize={["8.27vw", "7.4vw", "3.58vw", "3.65vw"]}
            >
              Mais uma edição do Café com o Presidente
            </Heading>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
            >
              No mês de abril tivemos a terceira edição do projeto{" "}
              <Box as="span" fontFamily={"ComoBold"}>
                Café com o Presidente
              </Box>
              , que aconteceu na sala FODA.
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="15px"
            >
              Para participar fique atento às instruções no grupo oficial do
              SERAC no WhatsApp.
            </Text>
            <Image
              src="./assets/images/cafe1.png"
              w={["120%", "120%", "100%"]}
              alt=""
              mt="30px"
            />
            <Image
              src="./assets/images/Cafe2.png"
              w="100%"
              alt=""
              mt="30px"
              mb="10px"
            />
          </Box>
          <Divider
            display={["none", "none", "block"]}
            orientation="vertical"
            backgroundColor={"blue.900"}
            borderColor="blue.900"
            opacity={1}
            borderWidth={"3px"}
            borderRadius="1px"
          />
        </Flex>
        <Divider
          display={["block", "block", "none"]}
          orientation="vertical"
          backgroundColor={"blue.900"}
          borderColor="blue.900"
          opacity={1}
          borderWidth={"3px"}
          borderRadius="1px"
        />
        <Flex flex="0.7" flexDirection={"column"} justify="center">
          <Box
            p="10px"
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            justifyItems="center"
            alignContent={"Center"}
            alignItems="center"
          >
            <Box>
              <Image
                alt="Logo Troca de Pneu"
                src="./assets/images/compart.png"
                w={["120px", "150px"]}
                float="left"
                margin="0px 5px 2px 0"
              />
              <Text
                textAlign={"justify"}
                fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
                lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              >
                Conheça alguns colaboradores do time Contábil e BPO Financeiro.
                Confira o conteúdo integral no grupo de{" "}
                <Box as="span" fontFamily={"ComoBold"}>
                  Whatsapp do SERAC Oficial!
                </Box>
                {/* <Box as="span" fontFamily={"ComoBold"}>
                  Whatsapp do SERAC Oficial!
                </Box>{" "} */}
              </Text>
            </Box>
          </Box>
          <Text
            fontFamily={"ComoBold"}
            fontSize={["6vw", "4vw", "3vw", "1.7vw"]}
            lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
          >
            Alguns integrantes:
          </Text>
          <Box
            p="10px"
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            justifyItems="center"
            alignContent={"Center"}
            alignItems="center"
          >
            <Image src="./assets/images/Mauricio.png" alt="" w="100%" />
            <Text
              mt="10px"
              textAlign={"justify"}
              fontSize={["5vw", "6vw", "1.2vw"]}
              lineHeight={["1.9vw"]}
            >
              Maurício Altino de Souza
            </Text>

            <Image src="./assets/images/Mayana.png" w="100%" alt="" mt="20px" />
            <Text
              mt="10px"
              textAlign={"justify"}
              fontSize={["5vw", "6vw", "1.2vw"]}
              lineHeight={["1.9vw"]}
            >
              Mayana de Souza Galvão
            </Text>

            <Image
              src="./assets/images/Claudia.png"
              w="100%"
              alt=""
              mt="20px"
            />
            <Text
              mt="10px"
              textAlign={"justify"}
              fontSize={["5vw", "6vw", "1.2vw"]}
              lineHeight={["1.9vw"]}
            >
              Cláudia Leocadio da Silva Santos
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
