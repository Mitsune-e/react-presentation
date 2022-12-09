import React from "react";
import { Container, Content, Header, HeaderText, Subtitle, Title } from "./styles";

interface IProps {
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;

  children?: React.ReactNode;
  id?: string;
  noPadding?: boolean;
  titleSize?: number;
}

export const Box: React.FC<IProps> = ({
  children,
  title,
  subtitle,
  id,
  noPadding,
  titleSize = 16
}) => {

  return (
    <Container id={id} className={"box"}>
      {title && (
        <Header className="header">
          <HeaderText>
            <Title titleSize={titleSize} className="title">{title}</Title>

            {subtitle && <Subtitle className="subtitle">{subtitle}</Subtitle>}
          </HeaderText>
        </Header>
      )}

      <Content className={"box-content"} noPadding={noPadding}>
        {children}
      </Content>
    </Container>
  );
};
