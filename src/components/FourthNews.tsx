import { Box, Heading, Text, Image, Divider, Flex } from "@chakra-ui/react";

export function FourthtNews() {
  return (
    <Box
      id="sobre"
      maxW="100%"
      pl={["5%", "10%", "15%"]}
      pr={["5%", "10%", "15%"]}
      pt="1%"
      pb="1%"
    >
      <Flex maxW="100%">
        <Flex flex="1" flexDirection={"column"} maxW="100%">
          <Divider
            orientation="vertical"
            backgroundColor={"blue.900"}
            borderColor="blue.900"
            opacity={1}
            borderWidth={"3px"}
            borderRadius="1px"
          />
          <Box maxW="100%">
            <Heading
              textAlign={"center"}
              fontSize={["10.18vw", "10.61vw", "6vw", "6.05vw", "7.1vw"]}
              color="orange.300"
            >
              SERACÃO
            </Heading>
            <Text
              maxW="100%"
              textAlign={"justify"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
            >
              A campanha SERACÃO, que contribui com doações de ração, tem mais
              um vencedor. A ONG Focinhos Mágicos de Correia Pinto, Santa
              Catarina, foi a instituição mais compartilhada nas redes sociais e
              receberá mais de 1 tonelada de ração!
              {/* <Box as="span" fontFamily={"ComoBold"}>
                Encantar para Crescer
              </Box> */}
            </Text>
            <Box display={"flex"} justifyContent="center">
              <Image
                src="./assets/images/AbrilLaranja.png"
                w="120%"
                alt=""
                mt="30px"
              />
            </Box>
            <Text
              textAlign={"center"}
              fontSize={["5.2vw", "4vw", "3vw", "1.7vw"]}
              lineHeight={["6.2vw", "4.2vw", "3.2vw", "1.9vw"]}
              mt="15px"
            >
              Conheça o projeto!
              <br />
              <Box as="a" href="" fontFamily={"ComoBold"}>
                https://www.instagram.com/ongfocinhosmagicoscp/
              </Box>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
