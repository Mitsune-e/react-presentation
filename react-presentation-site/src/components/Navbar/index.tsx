import React from "react";

export const Navbar: React.FC = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">React Presentation</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">{"Home"}</a>
            <a className="nav-link" href="/listagem">{"Listagem"}</a>
            <a className="nav-link" href="/analise">{"Analise"}</a>
            <a className="nav-link" href="/comoIniciar">{"Como Iniciar"}</a>
            <a className="nav-link" href="/bibliografia">{"Bibliografia"}</a>
          </div>
        </div>
      </div>
    </nav>
  </>
);