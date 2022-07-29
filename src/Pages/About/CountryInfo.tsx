import { Heading, Stack, Box, Text } from "@chakra-ui/react";

interface CountryInfoProps {
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: any[];
  languages: any[];
}

export function CountryInfo({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
}: CountryInfoProps) {
  return (
    <>
      <Heading my={[2, 8]}>{name}</Heading>
      <Stack direction={["column", "column", "row"]} spacing={["0"]}>
        <Box w="100%">
          <Text fontWeight="600">
            Native Name:{" "}
            <Text as="span" fontWeight="normal">
              {nativeName}
            </Text>
          </Text>
          <Text fontWeight="600">
            Population:{" "}
            <Text as="span" fontWeight="normal">
              {new Intl.NumberFormat().format(parseFloat(population))}
            </Text>
          </Text>
          <Text fontWeight="600">
            Region:{" "}
            <Text as="span" fontWeight="normal">
              {region}
            </Text>
          </Text>
          <Text fontWeight="600">
            Sub Region:{" "}
            <Text as="span" fontWeight="normal">
              {subRegion}
            </Text>
          </Text>
          <Text fontWeight="600">
            Capital:{" "}
            <Text as="span" fontWeight="normal">
              {capital}
            </Text>
          </Text>
        </Box>
        <Box>
          <Text fontWeight="600">
            Top Level Domain:{" "}
            <Text as="span" fontWeight="normal">
              {topLevelDomain}
            </Text>
          </Text>
          <Text fontWeight="600">
            Currencies:{" "}
            {currencies &&
              Object.entries(currencies).map(([key, value]) => {
                return (
                  <Text key={key} as="span" fontWeight="normal">
                    {value.name}
                  </Text>
                );
              })}
          </Text>
          <Text fontWeight="600">
            Languages:{" "}
            {languages &&
              Object.entries(languages).map(([key, value]) => {
                return (
                  <Text key={key} as="span" fontWeight="normal" mr="6px">
                    {value}
                  </Text>
                );
              })}
          </Text>
        </Box>
      </Stack>
    </>
  );
}
