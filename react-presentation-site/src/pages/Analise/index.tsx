import React from "react";
import { Box } from "../../components";

export const Analise: React.FC = () => {
  const textoEstado = [
    {
      title: "Estado Atual",
      body: "	No momento atual o React 18 é a versão mais nova adicionando mudanças significativas como mudança do renderizador do React para não rodar em concurrent mode somente com concurrent features. Também adiciona melhoras ao Streaming da Renderização de servidores usando Suspense: O renderizador deixa você gerar HTML dos componentes React do servidor e fazer stream deste HMTL para seus usuários, no React 18 você pode usar o Suspense para quebrar seu app em unidades menores independentes que podem ser streamadas separadamente entre elas sem bloquear o resto do aplicativo deixando o usuário ver o conteúdo muito mais cedo e deixando-os interagir muito mais rapidamente."
    },
    {
      title: "Perspectivas Futuras",
      body: "React continuara crescendo e seus devs estão implementando novos jeitos de otimizar e features novas."
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