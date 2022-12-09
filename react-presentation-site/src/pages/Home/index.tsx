import React from "react";
import { Box } from "../../components";

export const Home: React.FC = () => {
  const textoHome = [
    {
      title: "Introdução",
      body: "React ou ReactJS é uma biblioteca front-end JavaScript OpenSource tendo como foco criar interfaces de usuário em páginas-web. Desenvolvido pelo Facebook em 2011 está biblioteca tem como foco trabalhar em componentes e views declarativas com intuito de otimizar a sincronização e otimização de atividades acontecendo paralelemente no feed da aplicação."
    },
    {
      title: "Aplicações do Tema",
      body: "React é uma livraria ótima para criação de soluções interativas mantendo a otimização e atualização de feed sempre que há mudança de estado na aplicação, React é muito comum em aplicações que exigem muito carregamento e atualização constante como Facebook, Discord, Instagram, Uber Eats e Shopify."
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