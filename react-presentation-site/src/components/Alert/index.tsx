import React, { ReactNode } from "react";
import { Container, Icon, Text } from "./styles";

interface IProps {
  type: "success" | "danger" | "warning" | "info";

  id?: string;

  icon?: JSX.Element;
  iconRight?: boolean;
  children?: ReactNode;
}

export const Alert: React.FC<IProps> = ({ children, type, icon, iconRight, id }) => {

  if (children) {
    return (
      <Container id={id} className={`alert alert-${type}`}>
        {icon && !iconRight && <Icon iconRight={iconRight}>{icon}</Icon>}

        <Text>{children}</Text>

        {icon && iconRight && <Icon iconRight={iconRight}>{icon}</Icon>}
      </Container>
    );
  } else return null;
};
