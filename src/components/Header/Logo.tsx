import { Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Logo() {
  const color = useColorModeValue("#00000", "#fff");
  return (
    <Link to={`/`}>
      <Text fontWeight={900} fontSize={["sm", "lg", "2xl"]} color={color}>
        Where in the world?
      </Text>
    </Link>
  );
}
