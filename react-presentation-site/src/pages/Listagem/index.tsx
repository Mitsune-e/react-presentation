import React from "react";
import { Alert, Box } from "../../components";
import { FaCheck, FaTimes } from 'react-icons/fa';

export const Listagem: React.FC = () => {
  const pros = [
    "Declarativo: O React faz com que a criação de UIs interativas seja uma tarefa fácil. Faça views simples para cada estado da aplicação e o React irá atualizar e renderizar de forma eficiente os componentes necessários à medida que os dados mudem.",
    "Baseado em Componentes: Possibilidade de fazer componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.",
    "O React permite escrever um codigo universal que funciona em todas as plataformas."
  ];

  const cons = [
    "Ocupa muita memoria por fazer uma copia completa do DOM.",
    "Visto que o React é feito com JavaScript o usuario é obrigado a manter o JavaScript habilitado no navegador"
  ];

  return (
    <>
      <div className={"row g-3"}>
        <div className={"col"}>
          <Box title={"Pros"}>
            <ul className={"list-group"}>
              {pros.map((p, i) => {
                return (
                  <li className={"list-group-item"} key={i}>
                    <Alert icon={<FaCheck />} type={"success"}>{p}</Alert>
                  </li>
                )
              })}
            </ul>
          </Box>
        </div>
        <div className={"col"}>
          <Box title={"Contras"}>
            <ul className={"list-group"}>
              {cons.map((c, i) => {
                return (
                  <li className={"list-group-item"} key={i}>
                    <Alert icon={<FaTimes />} type={"danger"}>{c}</Alert>
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