import { HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export function ColorSwitcher() {
  return (
    <HStack spacing={["1", "3"]}>
      <ColorModeSwitcher />
    </HStack>
  );
}
