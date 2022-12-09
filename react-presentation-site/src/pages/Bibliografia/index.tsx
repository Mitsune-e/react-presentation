import React from "react";
import { Alert, Box } from "../../components";
import { FaCheck, FaTimes } from 'react-icons/fa';

export const Bibliografia: React.FC = () => {
  const pros = [
    {
      src: "https://pt-br.reactjs.org/",
      text: "Pagina Oficial ReactJs"
    },
    {
      src: "https://pt-br.reactjs.org/docs/getting-started.html",
      text: "Documentação oficial ReactJs"
    },
    {
      src: "https://pt.wikipedia.org/wiki/React_(JavaScript)",
      text: "Pagina Wikipedia sobre react"
    },
    {
      src: "https://www.theseus.fi/bitstream/handle/10024/500565/Paudyal_Abhinav.pdf?sequence=2",
      text: "Developing Video Chat Application with ReactJs And WebRTC - Abhinav Paudyal"
    },
    {
      src: "https://www.theseus.fi/bitstream/handle/10024/130495/FInal_Year_Thesis.pdf",
      text: "ReactJS: An Open Source JavaScript Library for Front-end Developement - Naimul Islam Naim"
    },
  ];

  return (
    <>
      <div className={"row g-3"}>
        <div className={"col"}>
          <Box title={"Fontes"}>
            <ul className={"list-group"}>
              {pros.map((p, i) => {
                return (
                  <li className={"list-group-item"} key={i}>
                    <a href={p.src} target="_blank">{p.text}</a>
                  </li>
                )
              })}
            </ul>
          </Box>
        </div>
      </div>
    </>
  );
}