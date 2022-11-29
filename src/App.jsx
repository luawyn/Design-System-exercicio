import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";
// import products from "./content/products.json";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export default function App() {
  const [makeups, setMakeup] = useState([10]);

  useEffect(() => {
    fetchMakeup();
  }, []);

  const fetchMakeup = async () => {
    try {
      const response = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );

      setMakeup(response.data);
    } catch (error) {
      console.log("Erro ao buscar maquiagens");
      console.log(error);
    }
  };

  return (
    <Container>
      <ChakraProvider>
        {makeups.map((makeup) => {
          if (makeup.id <= 10) {
            return <Card makeup={makeup} key={makeup.id} />;
          }
        })}
      </ChakraProvider>
    </Container>
  );
}
