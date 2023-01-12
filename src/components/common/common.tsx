import styled from "styled-components";
interface ITitle {
  title: string;
}
export function ContainerTitle({ title }: ITitle) {
  return <Title>{title}</Title>;
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 80px;
  margin-bottom: 20px;
  border-bottom: 1px solid;
  border-radius: 30px;
  text-decoration: none;
  background-color: ${prop => prop.theme.color1};
  color: ${prop => prop.theme.textDarkColor};
  font-size: 30px;
  cursor: pointer;
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
  line-height: 1.2rem;
  padding: 10px;
`;

interface IButton {
  btnName: string;
  onClick: () => void;
}
export function Button({ btnName, onClick }: IButton) {
  return (
    <TodoButton onClick={onClick} color={btnName}>
      {btnName}
    </TodoButton>
  );
}
const TodoButton = styled.button`
  padding: 5px 10px;
  margin: 3px 5px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  background-color: ${prop => prop.theme.color1};
  &:hover {
    background-color: ${props =>
      props.color === "삭제" ? props.theme.alertColor : props.theme.color1};
  }
  &:active {
    background-color: ${props =>
      props.color === "삭제" ? props.theme.alertColor : props.theme.pointColor};
  }
`;
