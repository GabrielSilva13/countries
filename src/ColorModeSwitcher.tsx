import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Text,
} from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark Mode", "Light Mode");
  const SwitchIcon = useColorModeValue(BsMoon, BsSun);

  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
      <Text fontWeight="600" fontSize={["md", "md", "lg"]}>
        {text}
      </Text>
    </>
  );
};
