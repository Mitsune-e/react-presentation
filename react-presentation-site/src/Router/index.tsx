import React from "react"

import { Home } from "../pages"

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
            <Route path="/" element={<Home />} />
          </Routes>
        </PageWrapperContent>
      </PageWrapper>
    </>
  );
}