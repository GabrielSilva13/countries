import { Box, HStack, Icon, Input, useColorModeValue } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface SearchBarProps {
  onChange?: (e: any) => void;
}

export function SearchBar({ onChange }: SearchBarProps) {
  const bg = useColorModeValue("gray.100", "#2b3743");
  return (
    <Box
      bgColor={bg}
      display="flex"
      alignItems="center"
      w={["100%", "100%", "360px"]}
    >
      <HStack spacing="2" p="1">
        <label htmlFor="search">
          <Icon
            as={BsSearch}
            fontSize="20"
            position={"relative"}
            top="3px"
            left="3px"
          />
        </label>
        <Input
          placeholder={"Search for a country..."}
          id="search"
          w={["100%", "100%", "360px"]}
          p="2"
          variant="unstyled"
          onChange={onChange}
        />
      </HStack>
    </Box>
  );
}
