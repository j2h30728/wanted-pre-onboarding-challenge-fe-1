import styled from "styled-components";
import { Link } from "react-router-dom";

interface ITitle {
  title: string;
  to: string;
}
export function ContainerTitle({ title, to }: ITitle) {
  return <Title to={to}>{title}</Title>;
}

const Title = styled(Link)`
  display: flex;
  justify-content: center;
  width: 280px;
  margin-bottom: 20px;
  border-bottom: 1px solid;
  border-radius: 30px;
  text-decoration: none;
  color: ${prop => prop.theme.textDarkColor};
  font-size: 40px;
  cusor: pointer;
`;

interface IContent {
  content: string;
}
export function Content({ content }: IContent) {
  return <ContentText>{content}</ContentText>;
}
const ContentText = styled.pre`
  font-size: 15px;
  white-space: pre-wrap;
`;
