import { Box, Select, useColorModeValue } from "@chakra-ui/react";

interface FilterBarProps {
  onChange: (e: any) => void;
}

export function FilterBar({ onChange }: FilterBarProps) {
  const bg = useColorModeValue("gray.100", "#2b3743");

  return (
    <Box pt={["10", "10", "0"]}>
      <Select
        alignSelf={"flex-end"}
        maxW="200px"
        bg={bg}
        cursor="pointer"
        onChange={onChange}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">América</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </Select>
    </Box>
  );
}
