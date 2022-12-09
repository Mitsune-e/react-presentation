import React from "react";
import { Box } from "../../components";

export const Home: React.FC = () => {
  const textoHome = [
    {
      title: "batatinha",
      body: "aaaaa"
    },
    {
      title: "batatinha",
      body: "bbbbb"
    },
    {
      title: "batatinha",
      body: "ccccc"
    }
  ];
  return (
    <>
      {textoHome.map((x, i) => {
        return (
          <Box title={x.title} key={i}>
            {x.body}
          </Box>
        );
      })}
    </>
  );
}