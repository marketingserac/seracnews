import { Box, Heading, Text, Image, Flex, Divider } from "@chakra-ui/react";

export function SixthNews() {
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

      <Flex
        w="100%"
        flexDirection={["column-reverse", "column-reverse", "row"]}
        mt="20px"
      >
        <Flex
          justifyContent={"center"}
          justifyItems="center"
          alignContent={"center"}
          alignItems="center"
          flex="1"
          flexDirection={["column", "column"]}
          pr={["0", "0", "20px"]}
        >
          <Image
            src="./assets/images/JhonnyFinclass.png"
            w="320px"
            alt=""
            mt="10px"
          />
        </Flex>
        <Flex
          flex="1"
          flexDirection={["column", "column"]}
          pr={["0", "0", "20px"]}
        >
          <Box>
            <Heading
              color="blue.900"
              textAlign={"center"}
              fontSize={["7vw", "5.5vw", "3.4vw", "3vw", "3vw"]}
            >
              JHONNY NA FINCLASS
            </Heading>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="20px"
            >
              O Jhonny, representando o SERAC, deu mentoria na{" "}
              <Box as="span" fontFamily={"ComoBold"}>
                Finclass
              </Box>
              , plataforma de educação financeira, sobre como declarar
              investimentos em renda variável e tesouro direto, bitcoins e
              outras criptomoedas e a pagar uma DARF.
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="20px"
            >
              A Finclass centraliza conteúdos sobre o mercado financeiro, para
              ensinar os assinantes a investir do zero. Conta com um time de
              mentores que são referência no assunto e, agora, o SERAC também
              faz parte.
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="20px"
            >
              Conheça:{" "}
              <Box
                as="a"
                href="https://www.finclass.com/"
                fontFamily={"ComoBold"}
                target="_blank"
              >
                https://www.finclass.com/
              </Box>
            </Text>
          </Box>
        </Flex>
        {/* <Flex flex="0.7" flexDirection={"column"} mt={["20px", "20px", "0"]}>
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
            <Heading textAlign={"center"}>Campanha SOS Petrópolis</Heading>
            <Text
              textAlign={"center"}
              fontSize={["4.2vw", "3vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="30px"
              color="white"
            >
              Neste mês tivemos a campanha SOS Petrópolis com objetivo de ajudar
              as famílias que perderam tudo pelas chuvas na cidade de Petrópolis
              no Rio de Janeiro, arrecadamos roupas e itens de higiene pessoal
              que foram entregues às famílias pela ONG Olhar de BIA.
            </Text>
            <Image
              src="./assets/images/SOSPetropolis.png"
              w="100%"
              alt=""
              mt="30px"
            />
          </Box>
        </Flex> */}
      </Flex>
    </Box>
  );
}
