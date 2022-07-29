import { Flex, Container, Box, useColorModeValue } from "@chakra-ui/react";
import { ColorSwitcher } from "./ColorSwitcher";
import { Logo } from "./Logo";
export function Header() {
  const bg = useColorModeValue("#ffffff", "#2b3743");
  return (
    <Box as="header" w="100%" p="8" boxShadow="md" bg={bg}>
      <Container maxW={"1440"}>
        <Flex justify="space-between" align="center">
          <Logo />
          <ColorSwitcher />
        </Flex>
      </Container>
    </Box>
  );
}
