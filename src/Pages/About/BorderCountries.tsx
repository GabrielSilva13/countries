import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BorderCountriesProps {
  countries: string;
  borderUrl: string;
}

export function BorderCountries({
  countries,
  borderUrl,
}: BorderCountriesProps) {
  return (
    <>
      <Box>
        <Link to={`/about/${borderUrl}`}>
          <Button>{countries}</Button>
        </Link>
      </Box>
    </>
  );
}
