import React from "react"

import { ComoIniciar, Analise, Home, Listagem, Bibliografia } from "../pages"

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
            <Route path={"/analise"} element={<Analise />} />
            <Route path={"/comoIniciar"} element={<ComoIniciar />} />
            <Route path={"/bibliografia"} element={<Bibliografia />} />
          </Routes>
        </PageWrapperContent>
      </PageWrapper>
    </>
  );
}