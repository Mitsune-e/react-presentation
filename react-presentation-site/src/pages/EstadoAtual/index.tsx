import React from "react";
import { Box } from "../../components";

export const EstadoAtual: React.FC = () => {
  const textoEstado = [
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
      {textoEstado.map((x, i) => {
        return (
          <Box title={x.title} key={i}>
            {x.body}
          </Box>
        );
      })}
    </>
  );
}