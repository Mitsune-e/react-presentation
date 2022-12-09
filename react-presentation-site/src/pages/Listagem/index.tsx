import React from "react";
import { Alert, Box } from "../../components";
import { FaCheck, FaTimes } from 'react-icons/fa';

export const Listagem: React.FC = () => {
  const pros = [
    "a",
    "b",
    "c",
    "d"
  ];

  const cons = [
    "e",
    "f"
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