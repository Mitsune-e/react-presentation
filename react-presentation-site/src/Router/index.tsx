import React from "react"

import { ComoIniciar, EstadoAtual, Home, Listagem } from "../pages"

import { Route, Routes } from 'react-router-dom';
import { PageWrapper, PageWrapperContent } from "./styles";
import { Navbar } from "../components";

export const Router: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <PageWrapperContent>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/listagem"} element={<Listagem />} />
            <Route path={"/estadoAtual"} element={<EstadoAtual />} />
            <Route path={"/comoIniciar"} element={<ComoIniciar />} />
          </Routes>
        </PageWrapperContent>
      </PageWrapper>
    </>
  );
}