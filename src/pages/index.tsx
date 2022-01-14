import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      as="header"
      bg={"white.00"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100px"}
    >
      <Image src="/images/logo.png" alt="WorldTrip logo" />
    </Flex>
  );
}
