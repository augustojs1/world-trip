import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        as="header"
        bg={"white.00"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"6.25rem"}
      >
        <Image src="/images/logo.png" alt="WorldTrip logo" />
      </Flex>
      <Box
        w={"100%"}
        backgroundImage="url('/images/background.png')"
        height={"21rem"}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <Flex
          maxWidth={"72.5rem"}
          justifyContent={"space-between"}
          my={"0"}
          mx={"auto"}
        >
          <Box maxWidth={"450"} marginTop={"80px"}>
            <Text
              color={"white"}
              fontWeight={"500"}
              fontSize={"2.25rem"}
              marginBottom={"20px"}
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text color={"gray.500"} fontWeight={"400"} fontSize={"1.25rem"}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image
            src="/images/airplane.png"
            alt="airplane image"
            width={"417px"}
            height={"270px"}
            position={"relative"}
            top={"90px"}
          />
        </Flex>
      </Box>
      <Box marginTop={"80px"}>
        <Flex
          maxWidth={"1160px"}
          my={"0"}
          mx={"auto"}
          justifyContent={"space-evenly"}
          border={"1px"}
          borderColor={"red"}
        >
          <Box>
            <Image
              src="/icons/nightlife.png"
              alt="airplane image"
              width={"85px"}
              height={"85x"}
            />
            <Text fontStyle={"normal"} fontWeight={"600"} fontSize={"24px"}>
              vida noturna
            </Text>
          </Box>
          <Image
            src="/icons/surf.png"
            alt="airplane image"
            width={"85px"}
            height={"85x"}
          />
          <Box>
            <Text fontStyle={"normal"} fontWeight={"600"} fontSize={"24px"}>
              praia
            </Text>
          </Box>
          <Box>
            <Image
              src="/icons/group.png"
              alt="airplane image"
              width={"85px"}
              height={"85x"}
            />
            <Text fontStyle={"normal"} fontWeight={"600"} fontSize={"24px"}>
              moderno
            </Text>
          </Box>
          <Box>
            <Image
              src="/icons/building.png"
              alt="airplane image"
              width={"85px"}
              height={"85x"}
            />
            <Text fontStyle={"normal"} fontWeight={"600"} fontSize={"24px"}>
              clássico
            </Text>
          </Box>
          <Box>
            <Image
              src="/icons/earth.png"
              alt="airplane image"
              width={"85px"}
              height={"85x"}
            />
            <Text fontStyle={"normal"} fontWeight={"600"} fontSize={"24px"}>
              e mais...
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
