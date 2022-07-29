import { Container, Stack, Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BackButton } from "./BackButton";
import { BorderCountries } from "./BorderCountries";
import { CountryInfo } from "./CountryInfo";
import { Flag } from "./Flag";
import { useParams } from "react-router-dom";

export function About() {
  const [countryInfo, setCountryInfo] = useState<any[]>([]);
  const { country } = useParams();

  async function getCountry() {
    try {
      if (country) {
        if (country.length <= 3) {
          let response = await axios.get(
            `https://restcountries.com/v3.1/alpha/${country}`
          );
          setCountryInfo(response.data);
          console.log(response.data[0]);
        } else {
          let response = await axios.get(
            `https://restcountries.com/v3.1/name/${country}?fullText=true`
          );
          setCountryInfo(response.data);
          console.log(response.data[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountry();
  }, [country]);
  return (
    <Container maxW="1440px">
      <BackButton />
      <Stack
        direction={["column", "column", "row"]}
        align="center"
        justify={["center", "center"]}
        gap={[5, 5, 20]}
        mt="20"
        flexWrap={"wrap"}
      >
        <Flag img={countryInfo[0]?.flags.svg} />
        <Box>
          <CountryInfo
            name={countryInfo[0]?.name.common}
            nativeName={countryInfo[0]?.name.official}
            population={countryInfo[0]?.population}
            region={countryInfo[0]?.region}
            subRegion={countryInfo[0]?.subregion}
            capital={countryInfo[0]?.capital}
            topLevelDomain={countryInfo[0]?.tld}
            currencies={countryInfo[0]?.currencies}
            languages={countryInfo[0]?.languages}
          />
          <Stack
            direction={["column", "column", "row"]}
            align={["flex-start", "flex-start", "center"]}
            spacing="4"
            mt="10"
            flexWrap={"wrap"}
          >
            <Text as="strong" fontWeight="600">
              Border Countries:
            </Text>
            {countryInfo[0]?.borders ? (
              <>
                {countryInfo[0]?.borders.map((item: any) => {
                  return (
                    <BorderCountries
                      key={item}
                      countries={item}
                      borderUrl={item}
                    />
                  );
                })}
              </>
            ) : (
              <Text as="span">No borders found</Text>
            )}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
