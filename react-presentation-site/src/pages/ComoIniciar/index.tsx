import React from "react";
import { Box, Card } from "../../components";

export const ComoIniciar: React.FC = () => {
  const textoIniciar = [
    {
      title: "Crie um App React",
      body:
        <>
          <p>
            {"Criar um react app é um jeito comfortavel de aprender React, melhor jeito de começar é criando uma aplicação de uma pagina. Com esse ccomando ele inicia seu ambiente de desenvolvimento para que você possa usar os ultimas features do JavaScript, você precisa do Node >= 14.0.0 e npm >= 5.6 em sua maquina para criar seu projeto use o comando: "}
          </p>
          <p>
            {"npx create-react-app my-app"}
          </p>
          <p>
            {"cd my-app"}
          </p>
          <p>
            {"npm start"}
          </p>
        </>,
      img: {
        src: "logo512.png",
        alt: "logo react"
      },
      imgText: {
        title:
          <>
            <a href="https://reactjs.org/docs/create-a-new-react-app.html" target={"_blank"}>Aprenda React</a>
          </>,
        text: ""
      }
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