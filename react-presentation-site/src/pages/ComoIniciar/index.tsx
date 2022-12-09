import React from "react";
import { Box, Card } from "../../components";

export const ComoIniciar: React.FC = () => {
  const textoIniciar = [
    {
      title: "batatinha",
      body: "aaaaa",
      img: {
        src: "logo512.png",
        alt: "logo react"
      },
      imgText: {
        title: "zzzz",
        text: "wwww"
      }
    },
    {
      title: "batatinha",
      body: "bbbbb",
      img: null,
      imgText: null
    },
    {
      title: "batatinha",
      body: "ccccc",
      img: null,
      imgText: null
    }
  ];
  return (
    <>
      {textoIniciar.map((x, i) => {
        return (
          <Box title={x.title} key={i}>
            {x.img && <>
              <div className={"row g-3"}>
                <div className={"col"}>
                  {x.body}
                </div>

                <div className={"col"}>
                  <Card
                    img={x.img}
                    title={x.imgText ? x.imgText.title : undefined}
                    text={x.imgText ? x.imgText.text : undefined}
                  />
                </div>
              </div>
            </>}

            {!x.img && <>{x.body}</>}
          </Box>
        );
      })}
    </>
  );
}