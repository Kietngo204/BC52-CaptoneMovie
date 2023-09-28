import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TextLinkFooter = styled(Link)`
  font-size: 14px;
  color: #ffffff80;
  text-decoration: none;
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  transition: all 0.5s;

  &:hover {
    color: #ffffff;
  }
`;

export const FlexFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoFooter = styled.a`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  color: "white";
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff80;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    filter: grayscale(80%);
    color: #ffffff;
  }
`;

export const TextFooter = styled.p`
  font-size: 14px;
  color: #ffffff80;
  margin-top: 12px;
  margin-left: 10px;
  transition: all 0.5s;

  &:hover {
    color: #ffffff;
  }
`;
