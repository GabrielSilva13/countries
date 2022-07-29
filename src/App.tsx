import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { extendTheme } from "@chakra-ui/react";

import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { About } from "../src/Pages/About";
const theme = extendTheme({
  fonts: {
    heading: "Nunito Sans",
    body: "Nunito Sans",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:country" element={<About />} />
    </Routes>
  </ChakraProvider>
);
