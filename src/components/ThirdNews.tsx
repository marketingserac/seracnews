import { Box, Heading, Text, Image, Divider, Flex } from "@chakra-ui/react";

export function ThirdtNews() {
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
          <Box>
            <Heading
              color="blue.900"
              textAlign={"center"}
              fontSize={["10.9vw", "9.8vw", "8.65vw", "8.45vw", "8.5vw"]}
            >
              Viralize o Bem!
            </Heading>
            <Text
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
            >
              Participamos de uma ação social, em conjunto com a {""}
              <Box as="span" fontFamily={"ComoBold"}>
                ONG Olhar de Bia
              </Box>
              , para doar alimentos e brinquedos para famílias da comunidade
              Jardim Corisco na Zona Norte de São Paulo.
            </Text>
            <Box
              display={"flex"}
              flexDirection={["column", "column", "row"]}
              justifyContent={"center"}
              justifyItems="center"
              alignContent={"center"}
              alignItems="center"
            >
              <Box>
                <Box
                  display={"flex"}
                  flexDirection={["column", "column", "row"]}
                >
                  <Image
                    src="./assets/images/ViralizeoBem01.png"
                    w="930px"
                    alt=""
                    mt="30px"
                    m="5px"
                  />
                  <Image
                    src="./assets/images/ViralizeoBem02.png"
                    w={["100%", "500px"]}
                    alt=""
                    mt="30px"
                    m="5px"
                  />
                </Box>
                <Text
                  textAlign={"justify"}
                  fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
                  lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
                  mt="15px"
                >
                  A ONG Olhar de Bia tem projetos de educação, alimentação e
                  capacitação profissional.
                </Text>
                <Text
                  textAlign={"justify"}
                  fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
                  lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
                  mt="15px"
                >
                  Conheça a iniciativa: {""}
                  <Box
                    as="a"
                    href="https://olhardebia.org.br/"
                    target={"_blank"}
                    fontFamily={"ComoBold"}
                  >
                    https://olhardebia.org.br/
                  </Box>
                </Text>
              </Box>

              <Image
                src="./assets/images/ViralizeoBem03.png"
                w={["70%", "70%", "50%"]}
                h="400px"
                alt=""
                m="10px"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
