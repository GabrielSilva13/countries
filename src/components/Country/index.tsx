import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Container, Skeleton, Stack } from "@chakra-ui/react";
import axios from "axios";

import { Link } from "react-router-dom";
import { MemoizedCountry } from "./CountrySingle";
import { v4 as uuidv4 } from "uuid";

import { SearchBar } from "../Search/SearchBar";
import { FilterBar } from "../Search/FilterBar";

const baseURL = "https://restcountries.com/v3.1/all";

export function Country() {
  const [card, setCard] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  const { control, handleSubmit } = useForm();

  async function getData() {
    try {
      setIsLoaded(false);
      let response = await axios.get(baseURL);

      setCard(response.data);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(false);
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function countries() {
    try {
      if (filter === "all") {
        getData();
        return;
      }
      setIsLoaded(false);
      let response = await axios.get(
        `https://restcountries.com/v3.1/region/${filter}`
      );

      setCard(response.data);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(false);
      console.error(error);
    }
  }
  useEffect(() => {
    countries();
  }, [filter]);

  async function research(data: any) {
    try {
      if (data.country.length <= 0) {
        getData();
        return;
      }
      setIsLoaded(false);
      let response = await axios.get(
        `https://restcountries.com/v3.1/name/${data.country}`
      );
      setCard(response.data);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(false);
      console.error(error);
    }
  }

  return (
    <>
      <Container maxW="1440" mt={20}>
        <Box
          as="form"
          onSubmit={handleSubmit(research)}
          display="flex"
          alignItems={["flex-start"]}
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
        >
          <Controller
            name="country"
            control={control}
            render={({ field }) => <SearchBar {...field} />}
          />

          <FilterBar onChange={(event) => setFilter(event.target.value)} />
        </Box>
      </Container>
      <Container maxW="1440px" mt="20">
        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          gap={["8", "10"]}
          align={"center"}
          justify="center"
        >
          {!isLoaded && (
            <>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                w="280px"
                minHeight={"sm"}
              ></Skeleton>
            </>
          )}
          {card.map((country: any) => {
            return (
              <Link to={`/about/${country.name.common}`} key={uuidv4()}>
                <MemoizedCountry
                  country={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  img={country.flags.svg}
                />
              </Link>
            );
          })}
        </Stack>
      </Container>
    </>
  );
}
