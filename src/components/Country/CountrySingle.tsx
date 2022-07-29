import { Box, Img, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { memo } from "react";

interface CountrySingleProps {
  country: string;
  population: string;
  region: string;
  capital: string;
  img: string;
}

function CountrySingle({
  country,
  population,
  region,
  capital,
  img,
}: CountrySingleProps) {
  const bg = useColorModeValue("gray.200", "#2b3743");
  return (
    <Stack display="flex" w="280px" bg={bg} minHeight={"sm"}>
      <Img src={img} height="200px" objectFit={"cover"} />
      <Box p="4">
        <Text as="strong" fontSize="xl" display="block" my="4">
          {country}
        </Text>
        <Text fontWeight={600}>
          Population:{" "}
          <Text as="span" fontWeight="normal">
            {new Intl.NumberFormat().format(parseFloat(population))}
          </Text>
        </Text>
        <Text fontWeight={600}>
          Region:{" "}
          <Text as="span" fontWeight="normal">
            {region}
          </Text>
        </Text>
        <Text fontWeight={600}>
          Capital:{" "}
          <Text as="span" fontWeight="normal">
            {capital}
          </Text>
        </Text>
      </Box>
    </Stack>
  );
}

export const MemoizedCountry = memo(CountrySingle);
