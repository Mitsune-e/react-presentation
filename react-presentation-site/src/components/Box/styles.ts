import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin-bottom: 25px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 15px 7px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

interface ITitleProps {
  titleSize: number;
}

export const Title = styled.div<ITitleProps>`
  font-size: ${props => props.titleSize}px;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  font-size: 16px;
`;

export const Content = styled.div<any>`
  padding: ${(p) => (p.noPadding ? "0px" : "15px")};
`;
