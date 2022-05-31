import { Box, Heading, Text, Image, Flex, Divider } from "@chakra-ui/react";

export function Times() {
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
          flex="1"
          flexDirection={["column", "column"]}
          pr={["0", "0", "20px"]}
        >
          <Box>
            <Heading
              color="blue.900"
              textAlign={["center", "center", "left"]}
              fontSize={["7vw", "5.5vw", "3.4vw", "3vw", "4vw"]}
            >
              SERAC NA TIMES SQUARE!
            </Heading>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="20px"
            >
              Ao lado do{" "}
              <Box as="span" fontFamily={"ComoBold"}>
                G4 Educação
              </Box>
              , levamos o SERAC para a avenida mais famosa do mundo, a Times
              Square. Juntos, auxiliamos na criação de novos empregos, com a
              meta de gerar 1 milhão de oportunidades de trabalho até 2030.
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="20px"
            >
              Poucos contadores tiveram a oportunidade de marcar presença em um
              espaço que é holofote de grandes marcas. Estamos elevando o status
              da contabilidade!
            </Text>
          </Box>
        </Flex>

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
            src="./assets/images/JhonnyTimesSquare.png"
            w="320px"
            alt=""
            mt="10px"
          />
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
